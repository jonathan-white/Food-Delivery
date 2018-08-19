const router = require("express").Router();
const accountsController = require("../../controllers/accountsController");

// Matches with "/api/accounts"
router.route("/")
  .get(accountsController.findAll)
  .post(accountsController.create);

// Matches with "/api/accounts/:id"
router.route("/:id")
  .get(accountsController.findById)
  .put(accountsController.update)
  .delete(accountsController.remove);

// Matches with "/api/accounts/login"
router.route("/login")
  .post(accountsController.login);

module.exports = router;
