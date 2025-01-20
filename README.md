# 💰 Change Calculator

## 📌 Project Overview

The **Change Calculator** is a web-based application designed to calculate the optimal combination of coins (quarters, dimes, nickels, and pennies) for a given amount of cents ranging from 0 to 99. By leveraging an **object literal in JavaScript**, the application processes user input, validates it, and dynamically displays the calculated coin breakdown.

## 🚀 Features

- 🧮 **Accurate Coin Calculation**: Determines the exact number of quarters, dimes, nickels, and pennies for any valid input.
- ✅ **Input Validation**: Ensures users provide a number between 0 and 99.
- ⚡ **Instant Results**: Displays the coin breakdown as soon as the "Calculate" button is clicked.
- ⚠️ **Error Handling**: Alerts users if the input is invalid.
- 🎨 **User-Friendly Interface**: Styled with a visually appealing and responsive design.

## 📂 Project Structure

```
📁 change_calculator
 ├── 📁 imgs/              # Image assets (background, icons, etc.)
 ├── 📄 index.html         # Main HTML file for the interface
 ├── 📄 calculate.css      # Stylesheet for layout and design
 ├── 📄 calculate.js       # JavaScript for input validation and event handling
 ├── 📄 library_coin.js    # Object literal handling the coin calculation logic
```

## 🛠 Technologies Used

- **HTML5**: Structures the user interface.
- **CSS3**: Styles the layout, ensuring a clean and accessible design.
- **JavaScript (ES6)**: Manages validation, coin calculation, and DOM updates.
- **jQuery**: Simplifies event handling and DOM manipulation.

## 🏃‍♂️ How to Use the Application

1. **Enter Cents**:
   - Input a value between 0 and 99 in the "Enter number of cents" field.

2. **Calculate Change**:
   - Click the "Calculate" button to process the input.

3. **View Results**:
   - The calculated number of quarters, dimes, nickels, and pennies will appear in their respective fields.

4. **Reset**:
   - Enter a new value to perform another calculation.

## 📝 Code Highlights

### `makeChange` Method (`library_coin.js`)
- **Purpose**: Calculates the number of quarters, dimes, nickels, and pennies needed for a given amount of cents.
- **Logic**:
  - Divides the cents by the coin value to determine the quantity.
  - Uses the remainder (`%`) to calculate the next coin type.

### `calculate.js`
- Handles user interaction:
  - Validates input.
  - Calls the `makeChange` method.
  - Updates the DOM with the calculated results.

## 🌟 Future Improvements

- 🧹 **Clear Button**: Add a button to reset all fields.
- 💵 **Dollar Support**: Extend functionality to calculate amounts over 99 cents.
- 📊 **History Feature**: Display a log of previous calculations.

## 📜 License

This project was developed for educational purposes as part of a **college assignment**.

---

💼 **Author:** Juan Jacobo Florez Monroy | 🚀 Portfolio: [Portfolio Website or GitHub]