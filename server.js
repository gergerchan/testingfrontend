const express = require("express");
const app = express();
const pages = require(`./routes/pages`);
const goals = require(`./routes/goal`);
const register = require(`./routes/register`);
const ejs = require("ejs");
const dotenv = require("dotenv");
const chalk = require("chalk");
dotenv.config({ path: `./.env` });

app.set(`view engine`, ejs);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use(pages);
app.use(goals);
app.use(register);

app.listen(process.env.PORT, () =>
  console.log(
    chalk.bgGreenBright(chalk.black(`Server jalan di Port ${process.env.PORT}`))
  )
);
