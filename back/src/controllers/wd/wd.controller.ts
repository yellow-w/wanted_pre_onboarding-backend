import { Request, Response } from "express";
import wdService from "../../services/wd/wd.service";
import errMsg from "../../utils/errMsg";
let response;
//공고 등록
const post = async(req:Request, res: Response) => {
    const {wdInfo} = req.body;
    try{
        response = await wdService.post(wdInfo);
        if(!response.status) throw new Error(response.error);
    } catch (e){
        errMsg(e);
    }
    res.json(response);
}

//공고 조회
const read = async(req:Request, res: Response) => {
    const {w_id} = req.body;
    try{
        response = await wdService.read(w_id);
        if(response.status) throw new Error(response.error);
    } catch (e){
        errMsg(e);
    }
    res.json(response);
}

//공고 수정
const update = async(req:Request, res: Response) => {
    const {wdInfo} = req.body;
    try{
        response = await wdService.update(wdInfo);
        if(response.status) throw new Error(response.error);
    } catch (e){
        errMsg(e);
    }
    res.json(response);
}

//공고 삭제
const remove = async(req:Request, res: Response) => {
    const {w_id} = req.body;
    try{
        response = await wdService.remove(w_id);
        if(response.status) throw new Error(response.error);
    } catch (e){
        errMsg(e);
    }
    res.json(response);
}

//리스트 페이지
const requestAll = async( req: Request, res: Response) => {
    try{
        response = await wdService.requestAll();
        if(response.status) throw new Error(response.error);
    } catch (e){
        errMsg(e);
    }
    res.json(response);
}

const recruitController = {
    post,
    update,
    read,
    remove,
    requestAll
};

export default recruitController;