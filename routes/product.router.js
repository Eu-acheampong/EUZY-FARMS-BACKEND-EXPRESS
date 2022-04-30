const router = require("express").Router();
// const { verifyToken } = require("../midleware/verifyToken");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controller/productController");

router.get("/", getAllProducts);
router.get("/:productId", getSingleProduct);
router.post("/add", createProduct);
router.patch("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;
