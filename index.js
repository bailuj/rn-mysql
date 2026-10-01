(async () => {
const db = require('./bd');
console.log('Começou!');
console.log('SELECT * FROM clientes');
const clientes = await db.consultarClientes();
console.log(clientes);
})();
