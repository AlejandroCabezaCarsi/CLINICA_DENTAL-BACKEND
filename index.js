const express = require('express'); 

const app = express(); 

const PORT = 3000; 

app.use(express.json()); 

app.listen(PORT, ()=>{

    console.log('Servidor levantado correctamente en el puerto ' + PORT)

})