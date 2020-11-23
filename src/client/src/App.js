import React from "react";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // GraphQLサーバーのエンドポイントを設定
});

const App = () => {
  return (
    <div className="App" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "gray"
    }}>
      <ApolloProvider client={client}>
        <div>
          <h2>
            My first API project
            <span role="img" aria-label="Rocket">
              🚀
            </span>
          </h2>
          <Restaurants />
        </div>
      </ApolloProvider>
    </div>
  );
};

const Restaurants = () => {
  // 発行クエリを定義する
  const restaurantsQuery = gql`
      query {
        Restaurants{
          name,
          genre,
          comment
        }
      }
    `;

  // クエリを発行する
  const { loading, error, data } = useQuery(restaurantsQuery);
  console.log(error);

  // 結果を表示する
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.Restaurants.map(({ name, genre, comment }) => (
    <div key={name}>
      <h3>name: {name}</h3>
      <p>genre: {genre}</p>
      <p>comment: {comment}</p>
    </div>
  ));
};

export default App;