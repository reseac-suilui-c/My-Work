const     express = require("express")
const     mongoose = require("mongoose")
const     routes = require("./routes")

const     app = express()
app.use("/api", routes)
app.listen(process.env.PORT || 5000, () => {console.log("Server has started!!")} )

// Connnect to Mongoose
// mongoose
// .connect("http://localhost:3000", { useNewUrlParser: true })
// .then( () => {
//      const     app = express()
//      app.listen( 5000, () => {console.log("Server has started!!")} )
// })