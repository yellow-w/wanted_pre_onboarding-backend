import { AllowNull, Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
	modelName: "Application",
	timestamps: false,
	charset: "utf8",
	freezeTableName: true,
	tableName: "application",
})
class Application extends Model {
    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    u_id: number;

    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    r_id: number;
}

export default Application;