const express = require('express');
const app = express();
const path = require('path')

const port = process.env.PORT || 5000;
const myLiffId = process.env.MY_LIFF_ID;
const key = process.env.KEY;

app.use(express.static('public'));

app.get('/test',function(req,res) {
    res.json({message:'test'})
});

app.get('/', function(req, res) {
    res.json({message:'connected!'});
    // res.json({id: myLiffId});
});

app.listen(port, () => console.log(`app listening on port ${port}!`));

