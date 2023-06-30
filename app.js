const express = require('express')
const mongoose = require('mongoose');
const router = require('./routes/user-routes');
const blogRouter = require('./routes/blog-routes');



const app = express();
app.use(express.json());
app.use("/api/user", router) 
app.use("/api/blog", blogRouter)

mongoose.connect("")
.then(() => console.log("connected to database and listening to localhost 5000")).catch((err) => console.log(err));


app.listen(5000);