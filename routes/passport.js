const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/platform");
  });

router.get("/logout",
  function (req, res) {
    req.logout();
    res.send(true);
  });
router.get("/user",
  function(req,res){
    res.json(req.user||null);
  });


router.get("/google",
  passport.authenticate("google",  { scope: ["openid", "email", "profile"] }));

router.get("/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/platform");
  });
module.exports = router;
