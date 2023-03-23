const dotEnv = require('dotenv')
dotEnv.config();

const relate = require('./database/relationships')
relate();

const { loginWithEmailAndPassword, loginWithToken } = require('./auth');
const { authorizeByToken, authorizeIsAdmin } = require('./authz');
// loginWithEmailAndPassword('babs@gamil.com', '22').then(user => console.log(user))
// loginWithToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDIsImVtYWlsX2FkZHJlc3MiOiJiYWJzQGdhbWlsLmNvbSIsImlhdCI6MTY3OTU2NTgwOCwiZXhwIjoxNjc5NTY5NDA4fQ.7w3nu9d0DW7LA_CzrS6sJ4i-tbJh652y5xSx00EdP9Y').then(console.log)
authorizeByToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0MiwiZW1haWxfYWRkcmVzcyI6ImJhYnNAZ2FtaWwuY29tIiwiaWF0IjoxNjc5NTAzOTc2LCJleHAiOjE2Nzk1MDc1NzZ9.wN9Oj9Zr6DQlhR1iWbkUHSdWlh3AfzKyA34ZxlGjvpI').then (token => console.log(token))
// authorizeIsAdmin('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0MiwiZW1haWxfYWRkcmVzcyI6ImJhYnNAZ2FtaWwuY29tIiwiaWF0IjoxNjc5NTAzOTc2LCJleHAiOjE2Nzk1MDc1NzZ9.wN9Oj9Zr6DQlhR1iWbkUHSdWlh3AfzKyA34ZxlGjvpI'), console.log()
