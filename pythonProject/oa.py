from selenium import webdriver
import time

driver = webdriver.Chrome()

driver.get('https://myoa.omenow.com/Schedule/MySchedule/')

time.sleep(5)

driver.find_element_by_xpath('//*[@id="username"]').send_keys('INA.H')
driver.find_element_by_xpath('//*[@id="password"]').send_keys('000000')

driver.find_element_by_xpath('//*[@id="loginbtn"]/button').click()

time.sleep(5)

driver.find_element_by_xpath('//*[@id="btnCheckOut"]').click()

time.sleep(5)

driver.find_element_by_xpath('//*[@id="popupWindow"]/div/input').click()

time.sleep(30)

driver.find_element_by_xpath('//*[@id="btnCheckIn"]').click()

time.sleep(5)

driver.find_element_by_xpath('//*[@id="popupWindow"]/div/input').click()

time.sleep(5)

driver.get('https://mycenter.omenow.com/attendance/index/')

driver.quit()

