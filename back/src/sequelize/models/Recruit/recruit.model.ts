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
    @Column({
        type: DataType.INTEGER,
        comment:'채용 공고에 대한 식별자'
    })
    @AllowNull(false)
	r_id: number;

    @Column({
        type: DataType.INTEGER,
        comment:'공고를 업로드 한 회사에 대한 식별자'
    })
    @AllowNull(false)
	c_id: number;

    @Column({
        type: DataType.INTEGER,
        comment:'채용 보상금'
    })
    @AllowNull(false)
	r_signing_bounus: number;

    @Column({
        type: DataType.STRING,
        comment:'채용 포지션'
    })
    @AllowNull(false)
	r_position: string;

    @Column({
        type: DataType.STRING,
        comment:'채용 내용'
    })
    @AllowNull(false)
	r_description: string;

    @Column({
        type: DataType.STRING,
        comment:'사용 기술'
    })
    @AllowNull(false)
	r_tech_stack: string;
}

export default Recruit;