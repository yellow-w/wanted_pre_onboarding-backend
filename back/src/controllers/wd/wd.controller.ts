import { Request, Response } from "express";
import wdService from "../../services/wd/wd.service";
import errMsg from "../../utils/errMsg";

const post = async(req:Request, res: Response) => {
    let response;
    const {wdInfo} = req.body;
    try{
        response = await wdService.post(wdInfo);
        if(!response.status) throw new Error(response.error);
        res.status(200).json(response);
    } catch (e){
        errMsg(e);
        res.status(500).json(response);
    }
}

//공고 조회
const read = async(req:Request, res: Response) => {
    let response;
    const id = Number(req.params.id);
    try{
        response = await wdService.read(id);
        if(!response.status) throw new Error(response.error);
    } catch (e){
        errMsg(e);
    }
    res.status(500).json(response);
}

//공고 수정
const update = async(req:Request, res: Response) => {
    let response;
    const {wdInfo} = req.body;
    try{
        response = await wdService.update(wdInfo);
        if(!response.status) throw new Error(response.error);
    } catch (e){
        errMsg(e);
    }
    res.status(500).json(response);
}

//공고 삭제
const remove = async(req:Request, res: Response) => {
    let response;
    const {id} = req.body;
    try{
        response = await wdService.remove(id);
        if(!response.status) throw new Error(response.error);
    } catch (e){
        errMsg(e);
    }
    res.status(500).json(response);
}

//리스트 페이지
const requestAll = async( req: Request, res: Response) => {
    let response;
    try{
        response = await wdService.requestAll();
        if(!response.status) throw new Error(response.error);
    } catch (e){
        errMsg(e);
    }
    res.status(500).json(response);
}

const search = async(req: Request, res: Response) =>{
    let response;
    const keyWord = req.query.search
    try{
        response = await wdService.search(`%${keyWord}%`);
        if(!response.status) throw new Error(response.error);
    } catch(e){
        errMsg(e)
    }
    res.status(500).json(response)
}
const apply = async(req: Request, res: Response) =>{
    let response;
    const w_id = Number(req.params.w_id);
    const {u_id} = req.body;
    try{
        response = await wdService.apply(w_id, u_id);
        if(!response.status) throw new Error(response.error);
    } catch(e){
        errMsg(e)
    }
    res.status(500).json(response)
}


const recruitController = {
    post,
    update,
    read,
    remove,
    requestAll,
    search,
    apply
};

export default recruitController;
