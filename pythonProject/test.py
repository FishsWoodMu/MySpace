import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime


def get_current_time():
    return datetime.now().strftime('%Y-%m-%d %H:%M:%S')


# 初始化WebDriver
driver = webdriver.Chrome(executable_path='/usr/local/bin/chromedriver')

try:
    # 打开指定网址
    driver.get('https://myoa.omenow.com/Schedule/MySchedule/')

    # 输入用户名和密码
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, '//*[@id="username"]'))
    ).send_keys('INA.H')

    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, '//*[@id="password"]'))
    ).send_keys('000000')

    # 点击登录按钮
    WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="loginbtn"]/button'))
    ).click()

    # 等待并检查 btnCheckIn 按钮是否可点击
    btnCheckIn = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, '//*[@id="btnCheckOut"]'))
    )

    if not btnCheckIn.is_enabled():
        print(f"{get_current_time()} - 签出按钮当前处于禁用状态，无法点击。")
    else:
        # 点击签入按钮
        btnCheckIn.click()
        print(f"{get_current_time()} - 签出按钮已点击。")

        time.sleep(5)

        # 等待并处理弹出窗口
        try:
            WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, '//*[@id="popupWindow"]/div/input'))
            ).click()
            print("弹窗关闭按钮已点击。")
        except Exception as e:
            print(f"处理签入弹窗时出现异常: {e}")

    time.sleep(5)

    # 等待并检查 btnCheckOut 按钮是否可点击
    btnCheckOut = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, '//*[@id="btnCheckIn"]'))
    )

    if not btnCheckOut.is_enabled():
        print(f"{get_current_time()} - 签入按钮当前处于禁用状态，无法点击。")
    else:
        # 点击签出按钮
        btnCheckOut.click()
        print(f"{get_current_time()} - 签入按钮已点击。")

        time.sleep(5)

        # 等待并处理弹出窗口
        try:
            WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, '//*[@id="popupWindow"]/div/input'))
            ).click()
            print("弹窗关闭按钮已点击。")

            time.sleep(10)

            driver.get('https://mycenter.omenow.com/attendance/index/')

        except Exception as e:
            print(f"处理签出弹窗时出现异常: {e}")

except Exception as e:
    print(f"发生异常: {str(e)}")

finally:
    # 关闭浏览器

    driver.quit()
