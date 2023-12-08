const     express = require("express")
const     mongoose = require("mongoose")

const     app = express()
app.listen( 5000, () => {console.log("Server has started!!")} )

// Connnect to Mongoose
// mongoose
// .connect("http://localhost:3000", { useNewUrlParser: true })
// .then( () => {
//      const     app = express()
//      app.listen( 5000, () => {console.log("Server has started!!")} )
// })