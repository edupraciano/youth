// initial settings
const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const path = require("path");

// proxima aula
const db = mysql.connect({
  host: "localhost",
  password: "password",
  user: "root",
  database: "mysql",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Conectado ao Banco de Dados");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);

app.use.apply(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);

// Criação das Rotas
app.get("/add_product", (req, res) => {
  res.render("/add_product");
});

app.post("/add_product", (req, res) => {}); // configurar mysql

app.get("/products", (req, res) => {
  // configurar mysql

  res.render("/list_products"); // configurar objeto
});

app.listen(3000, () => {
  console.log("listen on port 3000");
});
