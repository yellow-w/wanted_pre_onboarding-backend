import { ICompany } from "../../@types/sequelize/model.d.ts/model";
import Company from "../../sequelize/models/company/company.model";
import errMsg from "../../utils/errMsg";
import responseObj from "../../utils/response";

const post = async (companyInfo:ICompany) => {
	let response;
	try {
		const result = await new Company(companyInfo, {
			raw: true,
		}).save();
		response = responseObj(1, result, undefined);
	} catch (e) {
		response = responseObj(0, undefined, e.message);
		errMsg(e);
	}
	return response;
};

const CompanyService = {
	post,
};

export default CompanyService;
