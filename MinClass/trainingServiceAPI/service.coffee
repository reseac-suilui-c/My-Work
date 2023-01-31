
# ********************************  Step Create ******************************
-	create Service 
	-	create directory project 
		cd project 
		-	1. npm init -> install package.json 
		-	2.  - npm install express
		     -	npm install body-parser --save	
		-	3. create file index.js 
		-	4. code ----- 
			var express = require('express');  -> // import Lib
			var app = express();
			app.get('/', function (req, res) { -> // api 
   				res.send('Hello World');  -> // return value
			})

			var server = app.listen(8080, function () { -> // start service
   				var host = "localhost"
   				var port = server.address().port
   				console.log("Service app listening at http://%s:%s", host, port)
			})
		-	5. run service -> node index.js
		-	6. test call postman -> 
	-	edit file index.js 
		-	1. add  - var bodyParser = require("body-parser"); 
			 - app.use(bodyParser.urlencoded({ extended: true }));
			 - app.use(bodyParser.json());
			get value for method post 
		-	2. add - npm i nodemon -> auto refresh after save 
			- edit file package.json add command "nodemon" : "nodemon index.js" in tag scripts
	-	connect DB 
		-	Config MySQL 
			-	User -> sa
			-	Pass -> '4we_TAch',
			- 	Server -> 192.168.1.231
			-	Database -> 'ln_prod'

		-	install lib 
			-	1. npm i mssql
			-	2. edit file index.js 
				-	2.1. add command "const sql = require('mssql')"
				-	2.2. add code 
					const sqlConfig = {
    							user: 'sa',
    							password: '4we_TAch',
    							database: '192.168.1.231',
    							server: 'ln_prod',
    							options: {
      								encrypt: false
    							}
  						}
				-	2.3. show VS Code 

# *************************************************************************
	routerA
		import controllerB
		import controllerA 
	routerB
		import controllerB
		import controllerA
	routerC 
		controllerC

# *************************************************************************
# command 
run node nodemon
run app (interface) yarn run dev 

# ************************************************************************