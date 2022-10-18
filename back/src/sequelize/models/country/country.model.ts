import { AllowNull, AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Location from "../location/location";

@Table({
    modelName:'Nationality',
    timestamps: false,
    charset: "utf8",
    freezeTableName: true,
    tableName:'nationality'
 })

class Nationality extends Model {
    @PrimaryKey
    @AutoIncrement
    @HasMany(()=>Location,{
        foreignKey: 'n_id',
        as:'L'
    })
    @AllowNull(false)
	@Column({
		type: DataType.INTEGER,
		comment: '국가에 대한 식별자',
	})
	id: number;

    @AllowNull(false)
    @Column({
		type: DataType.STRING,
		comment: '국가 이름',
	})
    name: string;
}

export default Nationality;