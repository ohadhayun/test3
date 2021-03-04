const express = require("express");
const app = express();
const cors = require('cors');
const someData = require('./modules');


app.use(express.urlencoded({ extended : true}));
app.use(express.json());
app.use(cors());

app.get('/catapi/random', async (req, res) => {
    const data = await someData.getRandom();
    res.send(data);
})

app.get('/catapi', async (req, res) => {
    const data = await someData.getAll();
    res.send(data);
})

app.get('/catapi/:id', async (req, res) => {
    const data = await someData.getId(req.params.id);
    res.send(data);
})

app.post('/catapi',  (req, res) => {
    const data =  someData.postUser(req.body);
    res.send("Well Done!");
})

app.delete('/catapi', async (req, res) => {
    const data = await someData.dealeteUser(req.body);
    res.send(data);
})


app.listen(3001, () => {console.log('Server is running...');});