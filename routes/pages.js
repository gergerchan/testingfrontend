const router = require(`express`).Router();

// pages ini akan dipisah, jadi index cuma use2 aja. sisanya tinggal dibuat per file untuk router

// homepage
router.get("/", (req, res) => {
  res.render(`homepage.ejs`);
});

// auth
router.get("/signin", (req, res) => {
  res.render(`auth/index.ejs`);
});

// profile
router.get("/profile/:param", (req, res) => {
  let param = req.params.param;
  let params = {
    param: param,
  };
  if (param != "logout") {
    res.render(`profile/${param}.ejs`, { data: params });
  } else {
    res.status(200).json({
      status: 200,
      message: `anda berhasi logout`,
    });
  }
});

module.exports = router;
