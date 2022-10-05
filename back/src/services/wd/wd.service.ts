import { Op } from "sequelize";
import { IWd } from "../../@types/sequelize/models/wd.model";
import Company from "../../sequelize/models/company/company.model";
import Wd from "../../sequelize/models/wd/wd.model";
import errMsg from "../../utils/errMsg";
import responseObj from "../../utils/response";

let response;
const post = async (wdInfo: IWd) => {
	// const {c_id, w_signing_bonus, w_position, w_description, w_tech_stack} = wdInfo;
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
		w_id,
		c_id,
		w_signing_bonus,
		w_position,
		w_description,
		w_tech_stack,
	} = wdInfo;
	try {
		const [updatable] = await Wd.update(
			{
				c_id,
				w_signing_bonus,
				w_position,
				w_description,
				w_tech_stack,
			},
			{
				where: {
					w_id,
				},
			}
		);
		const result = await Wd.findOne({
			where: {
				w_id,
			},
			raw: true,
		});
		if (updatable !== 1)
			throw new Error("sequelize 이슈로 채용 공고가 수정되지 않았습니다.");
		if (result === null)
			throw new Error("w_id에 해당하는 채용 공고가 없습니다.");
		response = responseObj(1, result, undefined);
	} catch (e) {
		response = responseObj(0, undefined, e.message);
		errMsg(e);
	}
	return response;
};

//각 페이지에서 읽어오기
//특정 회사의 다른 공고도 볼 수 있어야 함

/*
Example)
{
	"채용공고_id": 채용공고_id,
  "회사명":"원티드랩",
  "국가":"한국",
  "지역":"서울",
	"회사가올린다른채용공고":[채용공고_id, 채용공고_id, ..] # id List (선택사항 및 가산점요소).
}

      "c_id": 0,

    "w_id": 3,
    "c_name":'',
    "c_nationality":'',
    "c_location":'',
    "w_signing_bonus": 10000,
    "w_position": "개발자",
    "w_description": "nodeJS 개발자",
    "w_tech_stack": "nodeJS",

    SELECT W.w_id, C.c_name, C.c_nationality, C.c_location, W.w_signing_bonus, W.w_position, W.w_description, W.w_tech_stack
        FROM wd AS W
        LEFT OUTER JOIN company AS C
        ON W.c_id = C.c_id;
*/
/*
User.findAll({
  include: [{
    model: Tool,
    where: { name: { [Op.ne]: 'empty trash' } },
    required: false // will create a left join
  }]
});
*/
const read = async (c_id: number) => {
	try {
		const result = await Wd.findAll({
			include: [{
                model: Company,
                where: { c_id: {
                    [Op.ne]: c_id
                } },
                required: false
            }],
			raw: true,
		});
        console.log(result)
		if (result === null)
			throw new Error("c_id에 해당하는 채용 공고가 없습니다.");



		response = responseObj(1, result, undefined);
	} catch (e) {
		response = responseObj(0, undefined, e.message);
		errMsg(e);
	}
	return response;
};

const remove = async (w_id: number) => {
	try {
		const deletable = await Wd.destroy({
			where: {
				w_id,
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
		const result = await Wd.findAll();
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
			where: {
				[Op.or]: {
					w_signing_bonus: {
						[Op.like]: keyWord,
					},
					w_position: {
						[Op.like]: keyWord,
					},
					w_description: {
						[Op.like]: keyWord,
					},
					w_tech_stack: {
						[Op.like]: keyWord,
					},
				},
			},
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
