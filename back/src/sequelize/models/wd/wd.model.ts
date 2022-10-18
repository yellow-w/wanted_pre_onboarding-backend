import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import Application from "../application/application.model";
import Company from "../company/company.model";

@Table({
	modelName: "Wd",
	timestamps: false,
	charset: "utf8",
	freezeTableName: true,
	tableName: "wd",
})
class Wd extends Model {
    @PrimaryKey
    @AutoIncrement
    @HasMany(()=>Application,
    {
        foreignKey: 'w_id',
        as: 'A'
    })
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        comment:'채용 공고에 대한 식별자'
    })
	id: number;

    @AllowNull(false)
    @BelongsTo(()=>Company, {
        foreignKey: 'c_id',
        as:'C'
    })
    @Column({
        type: DataType.INTEGER,
        comment:'공고를 업로드 한 회사에 대한 식별자',
    })

	c_id: number;
  
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        comment:'채용 보상금'
    })
	signing_bonus: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        comment:'채용 포지션'
    })
	position: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        comment:'채용 내용'
    })
	description: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        comment:'사용 기술'
    })
	tech_stack: string;
}

export default Wd;