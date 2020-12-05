const express = require('express')

const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('home')
    // res.send('Hello')
})

const PORT = 4000;

app.listen(PORT, () => console.log('server running on 4000'));