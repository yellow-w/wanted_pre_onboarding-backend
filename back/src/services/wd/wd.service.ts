import { Op } from "sequelize";
import sequelize from "../../../src/sequelize/index";
import { IWd } from "../../@types/sequelize/models/wd.model";
import Company from "../../sequelize/models/company/company.model";
import Wd from "../../sequelize/models/wd/wd.model";
import errMsg from "../../utils/errMsg";
import responseObj from "../../utils/response";

let response;
const post = async (wdInfo: IWd) => {
	try {
		const result = await new Wd(wdInfo, {
			raw: true,
		}).save();
		response = responseObj(1, result, undefined);
	} catch (e) {
		response = responseObj(0, undefined, e.message);
		errMsg(e);
	}
	return response;
};

const update = async (wdInfo: IWd) => {
	const {
		id,
		signing_bonus,
		position,
		description,
		tech_stack,
	} = wdInfo;
	try {
		const [updatable] = await Wd.update(
			{
				signing_bonus,
				position,
				description,
				tech_stack,
			},
			{
				where: {
					id,
				},
			}
		);
		const result = await Wd.findOne({
			where: {
				id,
			},
			raw: true,
		});
		if (updatable !== 1)
			throw new Error("sequelize 이슈로 채용 공고가 수정되지 않았습니다.");
		if (result === null)
			throw new Error("id에 해당하는 채용 공고가 없습니다.");
		response = responseObj(1, result, undefined);
	} catch (e) {
		response = responseObj(0, undefined, e.message);
		errMsg(e);
	}
	return response;
};

const read = async (id: number) => {
	try {
		const result = await Wd.findAll({
			attributes: {
				include: [
					"id",
					"position",
					"signing_bonus",
					"tech_stack",
					"description",
				],
				exclude: ["c_id"]
			},
			include: [
				{
					model: Company,
					as: "C",
					attributes: {
						include: [
							"id",
							"name",
							"nationality",
							"location",
							[
								sequelize.literal(`(
								SELECT JSON_ARRAYAGG(W.id) AS others
									FROM wd AS W 
									INNER JOIN company AS C 
									ON W.c_id = (SELECT c_id FROM WD WHERE id = ${id}) AND W.c_id = C.id
									GROUP BY(W.c_id))`),
								"moreInfo",
							],
						],
					},
					required: true,
				},
			],
			where: { id },
			raw: true,
		});
		if (result === null)
			throw new Error("c_id에 해당하는 채용 공고가 없습니다.");

		response = responseObj(1, result, undefined);
	} catch (e) {
		response = responseObj(0, undefined, e.message);
		errMsg(e);
	}
	return response;
};

const remove = async (id: number) => {
	try {
		const deletable = await Wd.destroy({
			where: {
				id,
			},
		});
		if (deletable !== 1)
			throw new Error("sequelize 이슈로 채용 공고가 삭제되지 않았습니다.");
		response = responseObj(
			1,
			"채용 공고가 성공적으로 삭제되었습니다.",
			undefined
		);
	} catch (e) {
		response = responseObj(0, undefined, e.message);
		errMsg(e);
	}
	return response;
};

const requestAll = async () => {
	try {
		const result = await Wd.findAll({
            attributes:['id', 'signing_bonus', 'position', 'tech_stack'],
            include: {
                model: Company,
                as: 'C',
				attributes:['name', 'nationality', 'location',],
                required:true
            },
			order: [['id','DESC']],
			raw: true
        });
		response = responseObj(1, result, undefined);
	} catch (e) {
		response = responseObj(0, undefined, e.message);
		errMsg(e);
	}
	return response;
};

const search = async (keyWord: any) => {
	try {
		const result = await Wd.findAll({
			attributes:['id', 'position', 'signing_bonus','tech_stack'],
            include: {
                model: Company,
                as: 'C',
				attributes:['name', 'nationality', 'location',],
                required:true
            },
			where: {
				[Op.or]: {
					signing_bonus: {
						[Op.like]: keyWord,
					},
					position: {
						[Op.like]: keyWord,
					},
					description: {
						[Op.like]: keyWord,
					},
					tech_stack: {
						[Op.like]: keyWord,
					},
				},
			},
			order: [['id','DESC']],
			raw: true,
		});
		if (!result[0] === undefined) throw new Error("검색 결과가 없습니다.");
		response = responseObj(1, result, undefined);
	} catch (e) {
		response = responseObj(0, undefined, e.message);
		errMsg(e);
	}
	return response;
};

const wdService = {
	post,
	update,
	read,
	remove,
	requestAll,
	search,
};

export default wdService;
