import { AllowNull, AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";

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
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        comment:'채용 공고에 대한 식별자'
    })
	w_id: number;

    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        comment:'공고를 업로드 한 회사에 대한 식별자'
    })
	c_id: number;

    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        comment:'채용 보상금'
    })
	w_signing_bonus: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        comment:'채용 포지션'
    })
	w_position: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        comment:'채용 내용'
    })
	w_description: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        comment:'사용 기술'
    })
	w_tech_stack: string;
}

export default Wd;