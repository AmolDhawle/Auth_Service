const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const app = express();
const apiRoutes = require('./routes/index');

// const UserService  = require('./services/user-service');

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', apiRoutes);
    
    app.listen(PORT, () => {
        console.log(`Server started on PORT ${PORT}`);

        // const service = new UserService();
        // const newToken = service.createToken({email: 'ganesh@admin.com', id: 1});

        // console.log("new token is", newToken);

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhbmVzaEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNzAyNzQxMDIzLCJleHAiOjE3MDI3NDEwNTN9.9le8G_R9GqX5m7YWVWn1BcNXxuguC3hYfW49CET2bgQ'
        // const response = service.verifyToken(token);
        // console.log(response);
    })
}

prepareAndStartServer();