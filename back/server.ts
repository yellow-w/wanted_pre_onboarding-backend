import express, {Application } from 'express';
import sequelize from './src/sequelize';
import router from './src/routers/index'

import dotenv from 'dotenv'
import errMsg from './src/utils/errMsg';
dotenv.config();

const backPort = process.env.PORT_BACK || 3007;
const app : Application = express();

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.use('/api',router);


app.listen(backPort, async () => {
	try {
		await sequelize.sync({
            force: false
        });
		console.log(`back server running on port ${backPort}`);
	} catch (e) {
		errMsg(e);
	}
});