const express = require("express");
const router = express.Router();
const { pool } = require("../db.config");

router.get("/list", (req, res) => {
  const sql = "SELECT * FROM Products";
  pool.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching products:", err);
      res.status(500).send("Error fetching products");
      return;
    }
    res.json(result);
  });
});

// 根据产品ID查询产品信息
router.post("/id", (req, res) => {
  const { productId } = req.body;

  console.log(req);

  const sql = `SELECT * FROM Products WHERE id = ` + productId;
  pool.query(sql, (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).send("产品未找到");
    }
  });
});

module.exports = router;
