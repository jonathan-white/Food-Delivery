const router = require("express").Router();
const menuCategoriesController = require("../../controllers/menuCategoriesController");

// Matches with "/api/menu-categories"
router.route("/")
  .get(menuCategoriesController.findAll)
  .post(menuCategoriesController.create);

// Matches with "/api/menu-categories/:id"
router.route("/:id")
  .get(menuCategoriesController.findById)
  .put(menuCategoriesController.update)
  .delete(menuCategoriesController.remove);

// Matches with "/api/menu-categories/location/:id"
router.route("/location/:id")
  .get(menuCategoriesController.findByLocation);

module.exports = router;
