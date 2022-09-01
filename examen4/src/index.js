const express = require('express');
const app = express();
const morgan = require('morgan');
const axios = require('axios')

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Nuestro primer WS Get
app.get('/pelicula/:substr', (req, res) => {
    console.log(req.params.substr)
    let url = `https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${req.params.substr}`
    console.log('url', url)
    let valor = axios({
        url: url,
        method: 'get',
        data: {

        }
    })
    res.send(valor)
})

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});