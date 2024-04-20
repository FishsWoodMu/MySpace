### Sequelize模型和数据库连接：

Sequelize 是一个流行的 Node.js 的 ORM (对象关系映射) 工具，用于管理 SQL 数据库交互。在 Sequelize 中，模型是一个代表数据库中表的类，通过这个模型，你可以执行创建、查询、更新和删除等操作。

##### 安装依赖

```javascript
npm install sequelize mysql2
```



##### 测试数据库连接

```javascript
// 测试数据库连接
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");

    // 启动服务器
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

```



##### 关闭数据库连接

```javascript
 await sequelize.close();
```



