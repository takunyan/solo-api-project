import {MigrationInterface, QueryRunner} from "typeorm";

export class restaurant1606115187609 implements MigrationInterface {
    name = 'restaurant1606115187609'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "restaurant" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "genre" character varying NOT NULL, "comment" character varying NOT NULL, "score" integer NOT NULL, CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "restaurant"`);
    }

}
