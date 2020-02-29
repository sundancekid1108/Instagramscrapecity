import lowdb from "lowdb";
import FileSync from 'lowdb/adapters/FileSync';
// Setup the database

const adapter = new FileSync('db.json');
const database = lowdb(adapter);
database.defaults({instagram: []}).write();

export default database;