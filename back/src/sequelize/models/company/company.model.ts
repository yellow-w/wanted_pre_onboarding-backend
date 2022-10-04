import { AllowNull, AutoIncrement, Column, DataType, Default, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({
    modelName:'Company',
    timestamps: false,
    charset: "utf8",
    freezeTableName: true,
    tableName:'company'
 })
class Company extends Model {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
	@Column({
		type: DataType.INTEGER,
		comment: '회사에 대한 식별자',
	})
	c_id: number;

    @AllowNull(false)
	@Column({ 
        type: DataType.STRING,
        comment: '회사명'
     })
	c_name: string;

    @AllowNull(false)
    @Default('한국')
	@Column({ 
        type: DataType.STRING,
        comment: '회사 국적'
    })
	c_nationality: string;

    @AllowNull(false)
    @Default('서울')
	@Column({ 
        type: DataType.STRING,
        comment: '회사 위치'
    })
	c_location: string;
}

export default Company;