## akshare   python 库

**stock_report_fund_hold_detail**  获取基金持仓股票额详细信息

```python
stock_report_fund_hold_detail_df = ak.stock_report_fund_hold_detail(symbol="512600", date="20240630")

```
**stock_report_fund_hold_detail** 获取基金的某个时间段的净值信息

```python
fund_etf_fund_info_em_df = ak.fund_etf_fund_info_em(fund="260112", start_date="20240901", end_date="20241030")
```

**fund_rating_all** 获取基金的评级信息
```python
fund_stars_all = ak.fund_rating_all()
```

**fund_individual_profit_probability_xq** 基金盈利概率

```python
fund_individual_profit_probability_xq_df = ak.fund_individual_profit_probability_xq(symbol="000001")
print(fund_individual_profit_probability_xq_df)
```



```

```

