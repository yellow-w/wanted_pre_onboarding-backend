import { IWd } from "../../@types/sequelize/models/wd.model";
import Wd from "../../sequelize/models/wd/wd.model";
import errMsg from "../../utils/errMsg";
import responseObj from "../../utils/response";

let response;
const post = async (wdInfo:IWd) => {
    // const {c_id, w_signing_bonus, w_position, w_description, w_tech_stack} = wdInfo;
 	try {
        const result = await new Wd(
            wdInfo, {
            raw: true
        }).save();
		response = responseObj(1, result, undefined);
	} catch (e) {
		response = responseObj(0, undefined, e.message);
		errMsg(e);
	}
	return response;
};

const update = async (wdInfo: IWd) => {
    const { w_id, c_id, w_signing_bonus, w_position, w_description, w_tech_stack } = wdInfo;
	try {
        const [updatable] = await Wd.update({
            c_id,
            w_signing_bonus,
            w_position,
            w_description,
            w_tech_stack
        },{
            where: {
            w_id
        }})
        const result = await Wd.findOne({
            where: {
                w_id
            },
            raw: true
        })
        if(updatable !== 1) throw new Error('sequelize 이슈로 채용 공고가 수정되지 않았습니다.')
        if(result === null) throw new Error('w_id에 해당하는 채용 공고가 없습니다.')
		response = responseObj(1, result, undefined);
	} catch (e) {
		response = responseObj(0, undefined, e.message);
		errMsg(e);
	}
	return response;
};

//각 페이지에서 읽어오기
const read = async (w_id: number) => {
	try {
        const result = await Wd.findOne({
            where: {
                w_id
            },
            raw: true
        })
        if(result === null) throw new Error('w_id에 해당하는 채용 공고가 없습니다.')
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
                w_id
            }
        })
        if(deletable !== 1) throw new Error("sequelize 이슈로 채용 공고가 삭제되지 않았습니다.");
		response = responseObj(1, "채용 공고가 성공적으로 삭제되었습니다.", undefined);
	} catch (e) {
		response = responseObj(0, undefined, e.message);
		errMsg(e);
	}
	return response;
};

const requestAll = async () => {
	try {
        const result = await Wd.findAll();
        response = responseObj(1, result, undefined)
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
    requestAll
};

export default wdService;