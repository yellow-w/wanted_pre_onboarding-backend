# wanted_pre_onboarding-backend



## 1. 개발 환경 및 사용 기술
  
  LANGUAGE & SERVER : <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/></a><img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/></a><img src="https://img.shields.io/badge/nodeJS-339933?style=flat-square&logo=Node.js&logoColor=white"/></a>   
  RDBMS : <img src="https://img.shields.io/badge/sequelize-4479A1?style=flat-square&logo=MySQL&logoColor=white"/></a>   
  ORM : <img src="https://img.shields.io/badge/sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white"/></a>   
   
   
## 2. DB 스키마
![image](https://user-images.githubusercontent.com/99452521/196575294-6c699d3b-88ab-4b1c-8051-b89278080696.png)   
   
   
## 3. API 설정

### 1) 채용공고 등록
* PATH: /api/wd/post   
* REQUEST BODY:
```JSON
{
  "wdInfo": {
    "c_id":4,
    "signing_bonus":1000000,
    "position": "백엔드 주니어 개발자",
    "description":"원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
    "tech_stack": "javascript"
  }
}
```



### 2) 채용공고 수정
* PATH: /api/wd/update   
* REQUEST BODY:
```JSON
{
  "wdInfo":{
    "id": 13,
    "signing_bonus":1500000,
    "position":"백엔드 시니어 개발자",
    "description":"원티드랩에서 백엔드 시니어 개발자를 채용합니다. 자격요건은..",
    "tech_stack":"javascript"
  }
}
```

### 3) 채용공고 삭제
* PATH: /api/wd/remove   
* REQUEST BODY:

```JSON
{
  "id": 5
}
```

### 4) 전체 채용공고 조회
* PATH: /api/wd/requestAll   
   

### 5) 특정 채용공고 조회
* PATH: /api/wd/read/:idx   
   

### 6) 채용 지원
* PATH: /api/wd/apply/:idx  
* REQUEST BODY:
```JSON
{
  "u_id":1
}
```
