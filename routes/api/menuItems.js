const router = require("express").Router();
const menuItemsController = require("../../controllers/menuItemsController");

// Matches with "/api/menu-items"
router.route("/")
  .get(menuItemsController.findAll)
  .post(menuItemsController.create);

// Matches with "/api/menu-items/:id"
router.route("/:id")
  .get(menuItemsController.findById)
  .put(menuItemsController.update)
  .delete(menuItemsController.remove);

// Matches with "/api/menu-items/location/:id"
router.route("/location/:id")
  .get(menuItemsController.findByLocation);

module.exports = router;
