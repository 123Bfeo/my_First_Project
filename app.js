const express = require('express');
const path = require("path");
const app = express();
const routeMain = require('./src/routes/main.routes');



app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use('/', routeMain);





var port = process.env.PORT || 3023;
app.listen(3023, () => {
    console.log(`servidor de Maye corriendo 😉 ${port}`)
})