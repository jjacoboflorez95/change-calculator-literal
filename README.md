# 💰 Change Calculator

## 📌 Project Overview

The **Change Calculator** is a **web-based application** designed to calculate the **optimal combination of coins** (quarters, dimes, nickels, and pennies) for a given amount of **cents ranging from 0 to 99**. By leveraging an **object literal in JavaScript**, the application processes user input, validates it, and dynamically displays the calculated coin breakdown.

Developed as part of a **college assignment**, this project demonstrates **JavaScript-based computation, form validation, and user-friendly UI design**.

---

## 🚀 Features

- 🧮 **Accurate Coin Calculation** – Determines the exact number of **quarters, dimes, nickels, and pennies** required.
- ✅ **Input Validation** – Ensures users provide a number between **0 and 99**.
- ⚡ **Instant Results** – Displays the coin breakdown as soon as the **"Calculate"** button is clicked.
- ⚠️ **Error Handling** – Alerts users if the input is invalid.
- 🎨 **User-Friendly Interface** – Styled with a visually appealing and **responsive design**.

---

## 🛠 Technologies Used

- **HTML5** → Provides the structure of the application.
- **CSS3** → Styles the layout, ensuring a clean and accessible design.
- **JavaScript (ES6)** → Manages validation, coin calculation, and DOM updates.
- **jQuery** → Simplifies event handling and DOM manipulation.

---

## 🎯 Project Purpose

This project was developed as part of a **college assignment**, allowing me to:

- ✅ **Implement JavaScript-based financial computation** for real-world applications.
- ✅ **Enhance form validation techniques** to ensure accurate user input.
- ✅ **Apply Object-Oriented Programming (OOP) principles** using JavaScript object literals.
- ✅ **Practice event-driven programming** with real-time UI updates.
- ✅ **Develop a structured and maintainable JavaScript codebase**.

---

## 📂 Project Structure

```
📁 change_calculator
 ├── 📁 imgs/              # Image assets (background, icons, etc.)
 ├── 📄 index.html         # Main HTML file for the interface
 ├── 📄 calculate.css      # Stylesheet for layout and design
 ├── 📄 calculate.js       # JavaScript for input validation and event handling
 ├── 📄 library_coin.js    # Object literal handling the coin calculation logic
```

---

## 🏃‍♂️ How to Use the Application

1️⃣ **Enter Cents** – Input a value between **0 and 99** in the **"Enter number of cents"** field.  
2️⃣ **Calculate Change** – Click the **"Calculate"** button to process the input.  
3️⃣ **View Results** – The calculated number of **quarters, dimes, nickels, and pennies** will appear in their respective fields.  
4️⃣ **Reset** – Enter a new value to perform another calculation.  

---

## 📝 Code Highlights

### `makeChange` Method (`library_coin.js`)
- **Purpose** – Calculates the **number of quarters, dimes, nickels, and pennies** needed for a given amount of cents.
- **Logic** –
  - Divides the cents by the coin value to determine the quantity.
  - Uses the remainder (`%`) to calculate the next coin type.

### `calculate.js`
- Handles user interaction:
  - Validates input.
  - Calls the `makeChange` method.
  - Updates the DOM with the calculated results.

---

## 🌟 Future Improvements

- 🔁 **Reset Button** – Add a button to clear all input and output fields.
- 💵 **Dollar Support** – Extend functionality to calculate amounts over **99 cents**.
- 📊 **History Feature** – Display a log of previous calculations.

---

## 🎭 Screenshots  

| Change Calculator |  
|--------------|  
| ![Change Calculator](imgs/github/change-calculator-literal.png) |  

---

## 📜 License

This project was developed for **educational purposes** as part of a **college assignment**.

---

## 💼 Author

👤 **Juan Jacobo Florez Monroy**  
🌐 **Portfolio**: [jjacobo95.com](https://jjacobo95.com)  
🐙 **GitHub**: [github.com/jjacoboflorez95](https://github.com/jjacoboflorez95)