const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const router = express.Router();

router.get('/todos', (req, res, next) => {
  // get placeholder
});

router.post('/todos', (req, res, next) => {
  // post placeholder
});

router.delete('/todos/:id', (req, res, next) => {
  // delete placeholder
});

module.exports = router;
app.use('/', router);
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});