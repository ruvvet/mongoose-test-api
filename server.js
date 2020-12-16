require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('TEST API');
});

app.use('/api', require('./routes/testroutes'));

app.listen(process.env.PORT || 3000);