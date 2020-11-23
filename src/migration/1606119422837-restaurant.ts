import {MigrationInterface, QueryRunner} from "typeorm";

export class restaurant1606119422837 implements MigrationInterface {
    name = 'restaurant1606119422837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "genre" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "restaurant"."genre" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "restaurant"."genre" IS NULL`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "genre" DROP NOT NULL`);
    }

}
