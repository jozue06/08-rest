'use strict';

const router = require('../lib/router.js');


function routesHeader (res){
  res.statusCode = 200;
  res.statusMessage = 'OK';
}



router.get('/', (req,res) => {
  routesHeader(res);
  let name = req.query.name || '';
  res.write(`Hello ${name}`);
  res.end();
});

router.get('/api/v1/fox-song', (req, res)=>{
  routesHeader(res);
  res.write(`what does the fox say?`);
  res.end();

});

router.get('/api/v1/dogs', (req, res)=>{
  routesHeader(res);
  res.write(`all dog info`);
  res.end();

});

router.get('/api/v1/dogs', (req, res)=>{
  routesHeader(res);
  res.write('whats up?');
  res.end();

});

router.get('/api/v1/data', (req,res) => {
  routesHeader(res);
  res.write(req.query.text);
  res.end();
});

// test with httpie:
//    echo '{"title":"Go Home","content":"foobar"}' | http post http://localhost:3333/data
 
router.post('/api/v1/post/data', (req,res) => {
  routesHeader(res);
  console.log('posted');
  res.write( JSON.stringify(req.body) );
  res.end();
});

router.put('/api/v1/put', (req,res) => {
  routesHeader(res);
  console.log('putted');
  res.write(JSON.stringify(req.query.body.id));
  res.end();
});



router.post('/api/v1/dogs', (req,res) => {
  routesHeader(res);
  console.log('posted');
  res.write( JSON.stringify(req.body) );
  res.end();
});

router.put('/api/v1/dogs', (req,res) => {
  routesHeader(res);
  console.log('putted');
  res.write( JSON.stringify(req.body) );
  res.end();
});


module.exports = {};