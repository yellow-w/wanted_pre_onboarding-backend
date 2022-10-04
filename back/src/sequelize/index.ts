import { Sequelize } from "sequelize-typescript";
import options from "./config";
import path from "path";

const mode = (process.env.NODE_ENV === 'production') ? process.env.NODE_ENV : 'development';
const config = options[mode]
const modelPath = path.join(__dirname,'./models/**/*.model.ts')

const sequelize: Sequelize = new Sequelize({
    ...config,
    models:[modelPath]
});

export default sequelize;