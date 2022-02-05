import pgp from 'pg-promise';
 const cn = {

     host: 'localhost', // server name or IP address;
     port: 5000,
     database: 'font_gallery',
     user: 'postgres',
     password: 'Kbyf290400'
 };
 //var cn = 'postgres://username:password@host:port/database';

const db = pgp()(cn); // database instance;

// alternative - new ES7 syntax with 'await\':\n' +
    let user = await db.one('SELECT name FROM usr WHERE id_user = 1');
console.log((user.name));


// select and return a single user name from id:
// db.one('SELECT name FROM usr WHERE id_user = 1')
//     .then(user => {
//         console.log(user.name); // print user name;
//     })
//     .catch(error => {
//         console.log(error); // print the error;
//     });


export default db;
