const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const foods = require('./data/foods.json')

app.get('/', (req, res) => {
    res.send('Hello Auth & Server....')
});

app.get('/foods', (req, res) => {
    res.send(foods)
})

app.listen(port, () => {
    console.log(`practice prot listening on port ${port}`);
})