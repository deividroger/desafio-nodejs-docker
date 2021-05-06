const express = require('express')
const app = express()
const port = 3000;

const conf = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(conf);
console.log('inserindo registro de teste');
const sql = `INSERT INTO people(name) values('usuario Nodejs')`;
connection.query(sql);


app.get('/', (req, res) => {
    
    console.log('/ foi acionado');

    res.write(`<h1>Full Cycle Rocks!</h1>`);
    console.log('selecionando dados');

    connection.query("SELECT id,name FROM people", function (error, results, fields) {
        if (error) throw error;
 
        for (let index = 0; index < results.length; index++) {
           
            res.write(`<h2>${results[index].name}</h2>`)
        };
        res.end()
    });



});

app.listen(port, () => {
    console.log('Rodando na porta' + port);
});