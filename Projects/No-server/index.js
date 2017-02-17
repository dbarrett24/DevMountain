"use strict";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const stattleshipCtrl = require('./stattleshipCtrl');

app.use(express.static('./public'))
app.use(bodyParser.json());

app.get('/api/getPlayers', (req, res, next)=> {
    stattleshipCtrl.getPlayers().then(players => {
        return res.send(players);
    })

})
app.listen(3000, function () {
    console.log(`listening on port ${this.address().port}`);
})