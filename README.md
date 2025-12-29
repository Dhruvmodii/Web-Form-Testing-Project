# Web-Form-Testing-Project
Tested a user registration web form to ensure proper input validation, UI behavior, and functional correctness using manual testing techniques and Selenium automation.

🧪 Selenium Automation – User Registration Form
📌 Project Overview

This project demonstrates end-to-end web automation testing using Selenium WebDriver with Python.
The automation script tests a User Registration form by simulating real user behavior such as entering input data and submitting the form.

The goal of this project is to showcase:

Practical Selenium usage

DOM element interaction

Basic UI test automation workflow

🛠 Tech Stack Used

Python

Selenium WebDriver

HTML, CSS, JavaScript

Chrome Browser

📂 Project Structure
selenium-registration-test/
│
├── index.html        # User registration UI
├── style.css         # Styling for the form
├── script.js         # Client-side form validation
├── one.py            # Selenium automation test script
└── README.md         # Project documentation

🚀 What This Automation Does

The Selenium script (one.py) performs the following steps:

Launches Chrome browser

Opens the registration page (index.html)

Locates input fields using XPath

Enters:

Name

Email

Password

Confirm Password

Clicks the Register button

Verifies successful form submission

Closes the browser

This mimics real user interaction, not dummy testing.

🧠 Selenium Concepts Demonstrated

WebDriver initialization

Element locating using By.XPATH

send_keys() for input simulation

click() for button interaction

Browser session handling

Basic test flow automation

▶ How to Run This Project
1️⃣ Install Dependencies
pip install selenium

2️⃣ Make Sure You Have

Google Chrome installed

ChromeDriver compatible with your Chrome version

Live Server / Localhost running for index.html

3️⃣ Run the Test
python one.py

📸 Output

Browser opens automatically

Form is filled automatically

Form is submitted

Console prints:

Login successful

💡 Why This Project Matters

Most freshers claim Selenium knowledge.
This project proves it by showing:

✔ Real automation
✔ Clean DOM interaction
✔ Practical testing flow

Perfect for:

QA Fresher roles

Automation Tester Internships

Selenium learning portfolios

📌 Future Improvements

Add assertions for validation messages

Convert to PyTest framework

Add Page Object Model (POM)

Cross-browser testing
