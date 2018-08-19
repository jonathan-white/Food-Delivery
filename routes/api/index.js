const router = require("express").Router();
const locationRoutes = require("./locations");
const accountRoutes = require("./accounts");
const reviewRoutes = require("./reviews");
const menuCategories = require("./menuCategories");
const menuItems = require("./menuItems");

// middleware routes
router.use("/locations", locationRoutes);
router.use("/accounts", accountRoutes);
router.use("/reviews",reviewRoutes);
router.use("/menu-categories",menuCategories);
router.use("/menu-items",menuItems);

router.get("/session", (req, res) => {
  console.log('Session:',req.sessionID);
  res.json(req.sessionID);
});

module.exports = router;
