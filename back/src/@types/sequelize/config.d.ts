import { SequelizeOptions } from "sequelize-typescript";

export interface IOtions {
    development: SequelizeOptions,
    production: SequelizeOptions

}