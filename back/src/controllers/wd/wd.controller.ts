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
        res.status(200).json(response);
    } catch (e){
        errMsg(e);
        res.status(400).json(response);
    }
}

//공고 조회
const read = async(req:Request, res: Response) => {
    const id = Number(req.params.id);
    try{
        response = await wdService.read(id);
        if(!response.status) throw new Error(response.error);
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
        if(response.status !== 1) throw new Error(response.error);
    } catch (e){
        errMsg(e);
    }
    res.json(response);
}

//공고 삭제
const remove = async(req:Request, res: Response) => {
    const {id} = req.body;
    try{
        response = await wdService.remove(id);
        if(response.status !== 1) throw new Error(response.error);
    } catch (e){
        errMsg(e);
    }
    res.json(response);
}

//리스트 페이지
const requestAll = async( req: Request, res: Response) => {
    try{
        response = await wdService.requestAll();
        if(response.status !== 1) throw new Error(response.error);
    } catch (e){
        errMsg(e);
    }
    res.json(response);
}

const search = async(req: Request, res: Response) =>{
    const keyWord = req.query.search
    try{
        response = await wdService.search(`%${keyWord}%`);
        if(response.status !== 1) throw new Error(response.error);
    } catch(e){
        errMsg(e)
    }
    res.json(response)
}

const recruitController = {
    post,
    update,
    read,
    remove,
    requestAll,
    search
};

export default recruitController;


/*
{
	"채용공고_id": 채용공고_id,
  "사용자_id": 사용자_id
}
*/


//채용 공고 목록
/*
[
	{
		"채용공고_id": 채용공고_id,
	  "회사명":"원티드랩",
	  "국가":"한국",
	  "지역":"서울",
	  "채용포지션":"백엔드 주니어 개발자",
	  "채용보상금":1500000,
	  "사용기술":"Python"
	},
	{
		"채용공고_id": 채용공고_id,
	  "회사명":"네이버",
	  "국가":"한국",
	  "지역":"판교",
	  "채용포지션":"Django 백엔드 개발자",
	  "채용보상금":1000000,
	  "사용기술":"Django"
	},
  ...
]

*/