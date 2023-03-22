const dotEnv = require('dotenv')
dotEnv.config();

const relate = require('./database/relationships')
relate();

const { loginWithEmailAndPassword, loginWithToken } = require('./auth');
// loginWithEmailAndPassword('babs@gamil.com', '22').then(user => console.log(user))
loginWithToken( 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0MiwiZW1haWxfYWRkcmVzcyI6ImJhYnNAZ2FtaWwuY29tIiwiaWF0IjoxNjc5NTAzOTc2LCJleHAiOjE2Nzk1MDc1NzZ9.wN9Oj9Zr6DQlhR1iWbkUHSdWlh3AfzKyA34ZxlGjvpI').then(console.log());