const mysql = require("mysql2");
const dbSettings = require("./config/keys").dbConnnection;
//创建连接池
const pool = mysql.createPool({
  host: dbSettings.host, //服务器地址
  user: dbSettings.user, //账号
  password: dbSettings.password, //密码
  database: dbSettings.database, //数据库名称
});

//封装sql执行函数
const executeQuery = (sql, values) => {
  return new Promise((resolve, reject) => {

    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      connection.query(sql, values, (queryErr, results) => {
        connection.release();

        if (queryErr) {
          reject(queryErr);
        } else {
          resolve(results);
        }
      });
    });
  });
};

module.exports = {
  pool,
  executeQuery,
};
