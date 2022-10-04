npm init
npm i typescript express dotenv sequelize-typescript mysql2 eslint prettier nodemon ts-node
npm i -D nodemon

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
