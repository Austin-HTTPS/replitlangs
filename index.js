const express = require('express');
const app = express();

const fs = require('fs');

const _port = 3000;
const _debug = true;

function langs(lang) {
	const atob = str => Buffer.from(str, 'base64').toString('binary');
	let langs = Object.values(
		JSON.parse(atob(fs.readFileSync(__dirname + '/langs').toString()))
	);
	
	return langs;
}

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', (req, res) => {
  let info = langs();
  console.log(info)
  res.render('index', {info: info})
});

app.listen(_port, () => {
  console.log('Listening on Port: ', _port)
})