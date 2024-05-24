**表达式 lambda（Expression Lambda）**：

- 语法简洁，只包含一个表达式。

- 返回值是该表达式的计算结果。

- 通常用于简单的计算或操作。

```c#
(参数列表) => 表达式

Func<int, int, int> add = (x, y) => x + y;
int result = add(3, 4); // result 为 7

```
