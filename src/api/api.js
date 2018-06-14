'use strict';

const router = require('../lib/router.js');

function routesHeader (res){
  res.statusCode = 200;
  res.statusMessage = 'OK';
}

router.get('/', (req,res) => {
  routesHeader(res);
  let name = req.query.name || '';
  res.write(`Hello drummer ${name}`);
  res.end();
});


router.get('/api',(req,res) =>{
  res.statusCode = 400;
  res.statusMessage = 'bad request';
  res.end();
});

router.get('/api/v1/drums', (req, res)=>{
  if(!req.query.id){
    res.statusCode = 404;
    res.statusMessage = 'not found';
    return err;
  }
  else{
    routesHeader(res);
    res.write(`drum info for ID: ${req.query.id}`);
    res.end();
  }
});

// test with httpie:
//    echo '{"title":"Go Home","content":"foobar"}' | http post http://localhost:3333/data
 
router.post('/api/v1/drums', (req,res) => {
  if(!req.body){
    res.statusCode = 500;
    res.statusMessage = 'no such record';
    return err;}
  else{
    // routesHeader(res);
    res.write( JSON.stringify(req.body) );
    res.end();
  }
});

router.put('/api/v1/drums', (req,res) => {
  if(!req.query.id){return err;}
  else if(!req.body){return err;}
  else{
    routesHeader(res);  
    res.write(JSON.stringify(req.body));
    res.end();
  }
  
});


router.delete('/api/v1/drums', (req,res) => {
  routesHeader(res);
  res.write(`id: ${req.query.id} was deleted`);
  res.end();
});



module.exports = {};