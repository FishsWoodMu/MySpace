### LINQ 查询简介TOC

LINQ 通过提供处理各种数据源和数据格式的数据的一致模型，简化了这一情况。 在 LINQ 查询中，始终会用到对象。 可以使用相同的基本编码模式来查询和转换 XML 文档、SQL 数据库、[http://ADO.NET](https://link.zhihu.com/?target=http%3A//ADO.NET) 数据集、.NET 集合中的数据以及 LINQ 提供程序可用的任何其他格式的数据。

### 查询操作

- 获取数据源
- 创建查询
- 执行查询



create table smart_faq.user_question_behaviour
(
    id               int auto_increment
        primary key,
    user_question_id int         not null,
    behaviour_type   int         not null,
    created_date     datetime(3) not null
);