const express = require('express');
const routes = require("./routes");
const { get } = require('./routes/pessoasRoute');

const app = express();
const port = 3000;

const data = new Date();
const horas = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;

routes(app);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
    console.log(`${horas}`)
})

