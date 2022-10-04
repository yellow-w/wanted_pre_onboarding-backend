import { IOtions } from "../@types/sequelize/config";

const host = process.env.DB_HOST || "127.0.0.1";
const username = process.env.DB_USERNAME || "ivy";
const password = process.env.DB_PASSWORD || "GOODDAY";
const database = process.env.DB_DATABASE || "Hiring";
const port = Number(process.env.PORT_DB) || 3306;

const options: IOtions = {
	development: {
		host,
		username,
		password,
		database,
		dialect: 'mysql',
		port
	},
	production: {
		host,
		username,
		password,
		database,
		dialect: 'mysql',
		port
	},
};


export default options;