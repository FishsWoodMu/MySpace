var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/reguster', function(req, res, next) {
  res.send('respond with a resource');

});

// 检查用户是否存在
async function checkUserExists(email) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT COUNT(*) AS count FROM users WHERE email = ?', [email]);
    return rows[0].count > 0;
  } finally {
    connection.release();
  }
}


module.exports = router;
