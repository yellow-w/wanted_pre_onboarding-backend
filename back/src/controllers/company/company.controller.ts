import { Request, Response } from "express";
import companyService from "../../services/company/company.service";
import errMsg from "../../utils/errMsg";

const post = async(req:Request, res: Response) => {
    let response;
    const {companyInfo} = req.body;
    try{
        response = await companyService.post(companyInfo);
        if(!response.status) throw new Error(response.error);
        res.status(200).json(response);
    } catch (e){
        errMsg(e);
        res.status(500).json(response);
    }
}

const companyController = {
    post,
};

export default companyController;