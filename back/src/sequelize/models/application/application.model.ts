import { AllowNull, BelongsTo, Column, DataType, Model, Table } from "sequelize-typescript";
import User from "../user/user.model";
import Wd from "../wd/wd.model";

@Table({
	modelName: "Application",
	timestamps: false,
	charset: "utf8",
	freezeTableName: true,
	tableName: "application",
})
class Application extends Model {
    @AllowNull(false)
    @BelongsTo(()=>User,{
        foreignKey: 'u_id',
        as: 'U'    
    })
    @Column({type: DataType.INTEGER})
    u_id: number;

    @AllowNull(false)
    @BelongsTo(()=>Wd,{
        foreignKey: 'w_id',
        as: 'W'    
    })
    @Column({type: DataType.INTEGER})
    w_id: number;
}

export default Application;