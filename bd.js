// db.js

const mysql = require("mysql2/promise");


async function connect() {

    if (global.connection && global.connection.state !== 'disconnected') {

        return global.connection;

    }


    const connection = await mysql.createConnection({

        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '', // Coloque a senha aqui, se houver
        database: 'crud'

    });


    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;

}


// Opcional: executa a conexão ao carregar o módulo

connect();

async function consultarClientes() {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM clientes');
    return rows;
}


module.exports = { consultarClientes };