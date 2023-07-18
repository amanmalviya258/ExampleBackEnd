

var app = require('../../app');
var debug = require('debug')('datalabs-apis:server');
var http = require('http');


let port = process.env.DL_PORT || '80'
app.listen(port,()=>{
    console.log(`Running at port: ${port}`)
});
