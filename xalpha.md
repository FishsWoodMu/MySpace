### xalpha 库

`xalpha` 是一个 Python 库，用于基金投资的量化分析与回测。它支持对中国市场的基金、股票、债券等资产的分析，特别适合用来进行基金估值、资产配置分析、收益回测等操作。`xalpha` 提供了从基金净值查询、定投回测、资产组合到收益可视化等多种功能。

---

##### 获取基金持仓股票信息

```python
fund = xa.fundinfo("000001")  # 输入基金代码
stock_holdings = fund.get_stock_holdings()  # 获取持仓股票信息
print(stock_holdings)
```



