import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUsersTable1715000647312 } from './migrations/1715000647312-CreateUsersTable'
import User from "../app/entities/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "project_typeorm",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1715000647312],
    subscribers: [],
})
