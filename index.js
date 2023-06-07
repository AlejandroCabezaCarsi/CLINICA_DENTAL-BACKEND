const express = require('express'); 

const db = require('./db');

const router = require('./router');

const app = express(); 

const PORT = 3000; 

app.use(express.json());

app.use(router)

db.then(() =>
    {
        app.listen(3000, () => {
    console.log('Server is running on port ' + PORT)
    })
    }
).catch((error) =>{
    console.log('Error starting server', error.message)
})
