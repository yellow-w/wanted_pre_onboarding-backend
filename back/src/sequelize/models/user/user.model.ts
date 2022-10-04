import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({
	modelName: "User",
	timestamps: false,
	charset: "utf8",
	freezeTableName: true,
	tableName: "user",
})
class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        comment: '사용자에 대한 식별자'
    })
    u_id: number;

    @Column({
        type: DataType.STRING,
        comment: '사용자 이름'
    })
    u_name: string;
}

export default User;