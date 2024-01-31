const request = require('request-promise');
const cheerio = require('cheerio');

const URL = 'https://sigaa.ufrn.br/sigaa/public/departamento/professores.jsf?id=162';

(async () => {
    const response = await request(URL);

/*    console.log(response);*/

    let $ = cheerio.load(response);
    let title = $('span[class="nome"]').text();

    console.log(title);
})();