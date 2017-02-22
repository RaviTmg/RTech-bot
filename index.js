var express = require('express');
var bodyparser = require('body-parser')
var request = require('request')
var app = express()

app.set('port', process.env.PORT || 3000)

app.use(bodyparser.urlencoded({
	extended:false
}))

app.use(bodyparser.json())

app.get('/', function(request, response){
	response.send('hello world');
})

app.listen(app.get('port'), function(){
	console.log('listening', app.get('port'))
})
