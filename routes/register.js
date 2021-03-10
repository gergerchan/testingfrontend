const { default: axios } = require("axios")
const router = require(`express`).Router();
const baseUrl = "https://fokusin-backend.herokuapp.com"

router.get("/register", (req,res) => {
    res.render(`register/register.ejs`, {judul : "Register Akun", css:"register/register"})    
})

router.post("/register", (req, res) => {
    req.body.role = "user"
    axios.post(`${baseUrl}/register`, req.body)
    .then(result => {
      res.redirect("/signin")
    })
    .catch(err => console.log(err))
  }) 

module.exports = router;