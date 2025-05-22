const express = require('express');
const fetch = require('node-fetch');
const app = express();


app.listen(3000, () => console.log("Ipikaiei madafocar!"));
app.use(express.static('public'));

let serialserver = require('./p5.serialport-master/p5.serialserver.js');
serialserver.start(8081);


app.get("/query", async (req, res) => {
    const d1 = req.query.data1;
    const d2 = req.query.data2;

    try {
        getResults(res,d1,d2);


    } catch (e) {
        console.log(e);
    }
});

function getResults(res,d1,d2) {

    try {
      
        const query = "coimbra";
        const url = 'https://www.base.gov.pt/Base4/pt/resultados/?type=csv_contratos&texto='+query+'&tipo=0&tipocontrato=0&desdedatacontrato='+d1+'&atedatacontrato='+d1+'&pais=0&distrito=0&concelho=0&sort(-publicationDate)';
      


        fetch(encodeURI(url))
            .then((response) => {

                return response.text();
            })
            .then((result) => {

                res.send(result);
            })
            .catch(err => console.log(err));



    } catch (e) {
        return [];
    }
}