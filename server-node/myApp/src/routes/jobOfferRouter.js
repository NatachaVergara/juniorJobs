var express = require("express");
var router = express.Router();
const jobOfferController = require("../controllers/jobOfferController");

router.get("/", jobOfferController.index);

router.get("/:id", jobOfferController.show);

router.post("/", jobOfferController.create);

router.put("/:id", jobOfferController.update);

router.delete("/:id", jobOfferController.destroy);

module.exports = router;
