const router = require(`express`).Router();

router.get("/goal", (req,res) => {
    res.render(`goal/goal.ejs`, {judul : "Goal kamu", css:"goal/goal", title:"home"})    
})

module.exports = router;