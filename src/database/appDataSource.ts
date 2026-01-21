import { DataSource } from "typeorm";

export const appDataSource = new DataSource({

    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "reservaIot2",
    entities: ["src/entities/*.ts"],
    logging: true,
    synchronize: true,

})