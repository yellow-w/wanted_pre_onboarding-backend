import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import Nationality from "../country/country.model";

@Table({
    modelName:'Location',
    timestamps: false,
    charset: "utf8",
    freezeTableName: true,
    tableName:'location'
 })

class Location extends Model {
    @PrimaryKey
    @AutoIncrement
    @BelongsTo(()=>Nationality,{
        foreignKey:'n_id',
        as:'N'
    })
    @AllowNull(false)
	@Column({
		type: DataType.INTEGER,
		comment: '지역에 대한 식별자',
	})
	id: number;

    @AllowNull(false)
    @Column({
		type: DataType.STRING,
		comment: '지역 이름',
	})
    name: string;
}

export default Location;