from requests_html import HTMLSession

session = HTMLSession()
url = 'https://h5.waimai.meituan.com/waimai/mindex/home'
response = session.get(url)

# 等待JavaScript渲染
response.html.render()

# 打印页面的HTML内容
print(response.html.html)
