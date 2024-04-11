const fs = require("fs");
const path = require("path");

//封装路由
function loadRoutes(app) {
  const routesDir = path.join(__dirname, "");
  fs.readdirSync(routesDir).forEach((file) => {
    if (file.endsWith("Routes.js")) {
      const route = require(path.join(routesDir, file));
      const routeName = file.replace("Routes.js", "");
      app.use(`/api/${routeName}`, route);
    }
  });
}

module.exports = loadRoutes;
