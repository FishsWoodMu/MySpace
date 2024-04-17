### post请求

1.  需要安装body-parser
1.  `body-parser`可以帮助你将请求体解析为一个易于操作的JavaScript对象

```
方式一
//引入
const bodyParser = require("body-parser");
//使用body-parser中间件
app.user(bodyParser.urlencoded);
方式二
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
```

