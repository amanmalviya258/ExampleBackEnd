const mongoose = require('mongoose');
const mysql = require('mysql');
const { ClickHouse } = require('clickhouse');
const genericPool = require('generic-pool');
const type = process.env.DL_MONGODB_ADMIN;
const host = process.env.DL_MONGODB_HOST;
const port = process.env.DL_MONGODB_PORT;
const user = process.env.DL_MONGODB_USERNAME;
const password = process.env.DL_MONGODB_PASSWORD;
const database = process.env.DL_MONGODB_SCHEME;

let uri = process.env.DL_NODE_ENV === 'localhost' ? process.env.DL_DB_URL : 'mongodb://' + user + ':' + password + '@' + host + ':' + port + '/' + database + '?authMechanism=DEFAULT&authSource=' + type;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("Database Connection Established Successfully......");
}).on('error', (err) => {
    console.log('Error while connecting to DB: ' + err);
});

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/* clickhousePool */
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

const clickhousePool = genericPool.createPool({
    create: function () {
        return new ClickHouse({
            host: process.env.DL_CLICKHOUSE_HOST,
            port: process.env.DL_CLICKHOUSE_PORT,
            user: process.env.DL_CLICKHOUSE_USER,
            password: process.env.DL_CLICKHOUSE_PASSWORD,
            protocol: process.env.DL_CLICKHOUSE_PROTOCOL,
            dataObjects: process.env.DL_CLICKHOUSE_DATA_OBJECTS,
            connect_timeout: process.env.DL_CLICKHOUSE_CONNECT_TIMEOUT,
            queryOptions: {
                database: process.env.DL_CLICKHOUSE_DATABASE
            }
        });
    },
    destroy: function (client) {
        client.disconnect();
    }
}, {
    max: process.env.DL_CLICKHOUSE_MAX,
    min: process.env.DL_CLICKHOUSE_MIN,
    idleTimeoutMillis: process.env.DL_CLICKHOUSE_ACQUIRE_TIMEOUT_MILLIS,
    acquireTimeoutMillis: process.env.DL_CLICKHOUSE_IDLE_TIMEOUT_MILLIS
});

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/* mysqlPool */
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

const mysqlPool = mysql.createConnection({
    host: process.env.DL_MYSQL_HOST,
    user: process.env.DL_MYSQL_USER,
    password: process.env.DL_MYSQL_PASSWORD,
    database: process.env.DL_MYSQL_DATABASE,
    dialect: process.env.DL_MYSQL_DIALECT,
    charset: process.env.DL_MYSQL_CHARSET,
    pool: {
        max: process.env.DL_MYSQL_MAX,
        min: process.env.DL_MYSQL_MIN,
        acquire: process.env.DL_MYSQL_ACQUIRE,
        idle: process.env.DL_MYSQL_IDLE,
    }
});

mysqlPool.connect((err) => {
    try {
        if (err) {
            throw err;
        } else {
            // console.log('');
        }
    }
    catch (err) {
        console.log(`${err.code}, ${err.sqlMessage}`);
    }
});

module.exports = { mongoose, clickhousePool, mysqlPool };