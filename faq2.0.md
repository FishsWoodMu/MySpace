1. 添加新的参数有效日期 开始和技术日期，是否长期
2. 修改 dto domain
3. 判断 is_longterm 



你负责的那个生效时间，就是在AddOrUpdateAskAnswerCommand这个接口，添加一个生效的和失效时间字段，然后add进去；用户问问题的时候，就在PredictAnswerRequest来过滤答案的时间，在生效时间外就不回复这条答案，生效时间内就回复这条答案

ask_answer 就是这张表加字段





Script0085_modify_history_feedback_label_record_table_column.sql