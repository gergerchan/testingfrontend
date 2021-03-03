const express = require("express")
const app = express()

app.use(express.static("assets"))
app.set("view engine", "ejs")
app.get("/register", (req,res) => {
    res.render("register", {judul : "Register Akun", css:"css/register.css"})    
})
app.get("/goal", (req,res) => {
    res.render("goal", {judul : "Goal kamu", css:"css/goal.css"})    
})
app.listen(3000, () => console.log("Server jalan di Port 3000") )