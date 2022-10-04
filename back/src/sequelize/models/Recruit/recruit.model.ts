import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
	modelName: "Recruit",
	timestamps: false,
	charset: "utf8",
	freezeTableName: true,
	tableName: "recruit",
})
class Recruit extends Model {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        comment:'채용 공고에 대한 식별자'
    })
	r_id: number;

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
	r_signing_bounus: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        comment:'채용 포지션'
    })
	r_position: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        comment:'채용 내용'
    })
	r_description: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        comment:'사용 기술'
    })
	r_tech_stack: string;
}

export default Recruit;