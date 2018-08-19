const router = require("express").Router();
const reviewsController = require("../../controllers/reviewsController");

// Matches with "/api/reviews"
router.route("/")
  .get(reviewsController.findAll)
  .post(reviewsController.create);

// Matches with "/api/reviews/:id"
router.route("/:id")
  .get(reviewsController.findById)
  .put(reviewsController.update)
  .delete(reviewsController.remove);

// Matches with "/api/reviews/location/:id"
router.route("/location/:id")
  .get(reviewsController.findByLocation);

module.exports = router;
