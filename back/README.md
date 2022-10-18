npm init
npm i typescript express dotenv sequelize-typescript mysql mysql2 eslint prettier nodemon ts-node
npm i -D nodemon @types/express @types/node"
npm i -D jest @types/jest ts-jest

## DB 스키마

1. Company

- c_id
- c_name
- c_nationality
- c_location

2. Recruit

- r_id
- c_id
- r_signing_bonus
- r_position
- r_description
- r_tech_stack

3. Apply

- r_id
- u_id

4. User

2022-10-06
response 객체 전역 설정의 문제점
짧은 단위로 다른 요청이 들어올 경우 response가 바뀔 수 있다....

그렇다고 해서
response를 try 와 catch문 모두에 넣자니 코드가 더러워진다...

insert into company (name) values ('카카오');
insert into company (name) values ('네이버');
insert into company (name) values ('라인');
insert into company (name) values ('쿠팡');
insert into company (name) values ('배달의민족');
