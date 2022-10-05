import express, {Router} from 'express';
import recruitController from '../../controllers/wd/wd.controller';
const router: Router = express.Router();


//채용 공고 CRUD - DB에서 삭제됨
//채용 공고 검색 기능( 쿼리 스트링 ?search = )
//채용 상세 페이지
//유저는 채용 공고당 1회씩 지원 가능
router.post('/post',recruitController.post);
router.post('/update',recruitController.update);
//특정 회사의 다른 공고도 볼 수 있어야 함
router.post('/read',recruitController.read);
router.post('/remove',recruitController.remove);
router.post('/requestAll',recruitController.requestAll);
router.get('/search',recruitController.search);


export default router;