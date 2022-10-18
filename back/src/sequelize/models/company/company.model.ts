import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import Wd from "../wd/wd.model";

@Table({
    modelName:'Company',
    timestamps: false,
    charset: "utf8",
    freezeTableName: true,
    tableName:'company'
 })

class Company extends Model {
    @PrimaryKey
    @HasMany(()=>Wd,
    {
        foreignKey: 'c_id',
        as: 'W'
    })
    @AutoIncrement
    @AllowNull(false)
	@Column({
		type: DataType.INTEGER,
		comment: '회사에 대한 식별자',
	})
	id: number;

    @AllowNull(false)
	@Column({ 
        type: DataType.STRING,
        comment: '회사명'
     })
	name: string;

    @AllowNull(false)
    @Default('한국')
	@Column({ 
        type: DataType.STRING,
        comment: '회사 국적'
    })
	nationality: string;

    @AllowNull(false)
    @Default('서울')
	@Column({ 
        type: DataType.STRING,
        comment: '회사 위치'
    })
	location: string;


}

export default Company;