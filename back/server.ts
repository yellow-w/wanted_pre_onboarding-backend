import express, {Application } from 'express';
import sequelize from './src/sequelize';
import dotenv from 'dotenv'
import errMsg from './src/utils/errMsg';
dotenv.config();

const backPort = process.env.PORT_BACK || 3007;
const app : Application = express();

app.get('/',(req,res)=>{
    res.send('hey')
})

app.listen(backPort, async () => {
	try {
		await sequelize.sync({
            force: true
        });
		console.log(`back server running on port ${backPort}`);
	} catch (e) {
		errMsg(e);
	}
});