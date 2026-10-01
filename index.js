(async () => {
const db = require('./db');
console.log('Começou!');
console.log('SELECT * FROM clientes');
const clientes = await db.consultarClientes();
console.log(clientes);
})();
