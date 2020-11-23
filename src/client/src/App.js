import React from "react";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, useQuery, useMutation } from "@apollo/react-hooks";

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
          <PostRestaurant />
          <UpdateRestaurant />
          <DeleteRestaurant />
          <GetRestaurants />
        </div>
      </ApolloProvider>
    </div>
  );
};

const GetRestaurants = () => {
  // 発行クエリを定義する
  const restaurantsQuery = gql`
      query {
        Restaurants{
          id,
          name,
          genre,
          comment,
          score
        }
      }
    `;

  // クエリを発行する
  const { loading, error, data } = useQuery(restaurantsQuery);

  // 結果を表示する
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.Restaurants.map(({ id, name, genre, comment, score }) => (
    <div key={id}>
      <h3>id: {id}</h3>
      <p>name: {name}</p>
      <p>genre: {genre}</p>
      <p>comment: {comment}</p>
      <p>score: {score}</p>
    </div>
  ));
};

const DeleteRestaurant = () => {
  // 発行クエリを定義する
  const deleteQuery = gql`
      mutation DeleteRestaurant($id: Int!){
        DeleteRestaurant(id : $id){
          name
          genre
          comment
    			score
        }
      }
    `;

  // クエリを発行する
  const [deleteFunc] = useMutation(deleteQuery);
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          deleteFunc({ variables: { id: Number(input.value) } });
          input.value = '';
          window.location.reload(false);
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">DELETE</button>
      </form>
    </div>
  );
};

const UpdateRestaurant = () => {
  // 発行クエリを定義する
  const updateQuery = gql`
      mutation EditRestaurant($input: EditRestaurantInput!){
        EditRestaurant(input : $input){
          name
          genre
          comment
    			score
        }
      }
    `;

  // クエリを発行する
  const [updateFunc] = useMutation(updateQuery);
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          updateFunc({ variables: { input: input.value } });
          input.value = '';
          window.location.reload(false);
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">UPDATE</button>
      </form>
    </div>
  );
};

const PostRestaurant = () => {
  // 発行クエリを定義する
  const postQuery = gql`
      mutation AddRestaurant($input: RestaurantInput!){
        AddRestaurant(input : $input){
          name
          genre
          comment
    			score
        }
      }
    `;

  // クエリを発行する
  const [postFunc] = useMutation(postQuery);
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(input.value);
          postFunc({
            variables: { input: input.value }
          });
          input.value = '';
          window.location.reload(false);
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">POST</button>
      </form>
    </div >
  );
};

export default App;