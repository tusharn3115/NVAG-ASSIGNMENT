# ✈️ Travel Booking Application

A fully responsive and interactive travel booking interface supporting both **One-Way** and **Round-Trip** journeys. Built from scratch using React and Tailwind CSS without relying on external UI libraries.

---

## ✅ Key Features Implemented

### 🧭 One-Way & Round-Trip Booking
- Seamless toggle between **One-Way** and **Round-Trip** modes.
- For **Round-Trip**, return date validation ensures it's always after the departure date.

### 🛫 Airport Selection with Validation
- Select both **From** and **To** airports.
- Error handling prevents users from selecting the same airport for both departure and destination.

### 👨‍👩‍👧 Passenger Details
- Input the number of **Adults**, **Children**, and **Seniors**.
- Choose **Travel Class** (e.g., Economy, Business, First Class).

### 📅 Date Selection
- Integrated date pickers.
- Logic to disable invalid date combinations (e.g., return date before departure date).

### ✅ Booking Confirmation
- On valid input, clicking **Select** shows a success alert to simulate a real booking confirmation.

---

## 🎨 UI & Design Decisions

### ✨ Clean & Minimalist Design
- Focused on **clarity** and **usability** with an intuitive user interface.
- Designed to avoid visual clutter, ensuring a smooth user experience.

### 📱 Fully Responsive Layout
- Works seamlessly across **desktop**, **tablet**, and **mobile** devices.
- Custom media queries and Tailwind responsive utilities ensure adaptive behavior.

### 🛠️ Built From Scratch
- No external UI libraries used.
- All components, styling, and interactions are custom-built using **React + Tailwind CSS**.

---

## 🚀 Getting Started

### 📦 Installation
```bash
git clone https://github.com/tusharn3115/NVAG-ASSIGNMENT
cd NVAG-ASSIGNMENT -> cd travel-booking
npm install
npm run dev
