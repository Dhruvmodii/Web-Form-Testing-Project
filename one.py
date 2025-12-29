import time
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("http://127.0.0.1:5500/index.html")
driver.find_element(By.XPATH, "//input[@id='name']").send_keys("Dhruv")
driver.find_element(By.XPATH, "//input[@id='email']").send_keys("test@example.com")
driver.find_element(By.XPATH, "//input[@id='password']").send_keys("12345678")
driver.find_element(By.XPATH, "//input[@id='confirmPassword']").send_keys("12345678")
driver.find_element(By.XPATH, "//button[@type='submit']").click()
print("Login successful")

time.sleep(5)
driver.quit()
