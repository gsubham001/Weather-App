# 🌤️ Angular Weather App

<div align="center">

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

A beginner-friendly **Single Page Weather Application** built with Angular to demonstrate core Angular concepts like Components, Data Binding, Interpolation, and Two-Way Binding.

</div>

---

## 📸 App Preview

![Weather App Preview](weather-app-preview.jpg)

> Search for any city name and instantly view its weather details — all without a single page reload!

---

## 🎯 Purpose

This project was built as a **hands-on learning project** after completing Angular fundamentals. Instead of just reading about Angular concepts, each concept is practically implemented inside this project — making it a great reference for beginners.

---

## 🚀 Features

- 🔍 **City Search** — Type any city name and hit Search
- 🌡️ **Weather Details** — Displays City, Temperature, Condition, and Humidity
- 🌤️ **Weather Icon** — Visual weather emoji/icon using Property Binding
- ⚡ **No Page Reload** — Instant result rendering (Single Page Application)
- 🎨 **Clean UI** — Minimal card-style design with a soft gradient background

---

## 🛠️ Angular Concepts Used

| Concept | Where It's Used |
|---|---|
| `Components` | AppComponent + WeatherComponent |
| `Parent-Child Components` | AppComponent renders WeatherComponent via selector |
| `Interpolation {{ }}` | Displaying city name, temperature, condition, humidity |
| `Property Binding [ ]` | Binding properties on HTML elements dynamically |
| `Event Binding ( )` | Search button click triggers weather fetch logic |
| `Two-way Binding [(ngModel)]` | City name input field — reads and updates simultaneously |
| `FormsModule` | Imported to enable ngModel in the app |
| `Angular CLI` | Used for project scaffolding and component generation |
| `Single Page Application` | No page reload on search — smooth user experience |
| `Angular Bootstrapping` | Understanding main.ts → AppModule → AppComponent flow |

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| **Angular** | Frontend Framework |
| **TypeScript** | Programming Language |
| **CSS3** | Styling & Layout |
| **Angular CLI** | Project Tooling |
| **Node.js & npm** | Package Management |

---

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── app/
│   │   ├── app.component.ts          # Root component
│   │   ├── app.component.html        # Root template
│   │   ├── app.component.css         # Root styles
│   │   ├── weather/
│   │   │   ├── weather.component.ts      # Weather logic & mock data
│   │   │   ├── weather.component.html    # Weather card UI
│   │   │   └── weather.component.css     # Weather card styles
│   ├── main.ts                       # Angular entry point
│   └── index.html                    # Root HTML file
├── angular.json                      # Angular CLI config
├── package.json                      # Project dependencies
└── tsconfig.json                     # TypeScript config
```

---

## ▶️ How to Run Locally

Make sure you have **Node.js** and **Angular CLI** installed.

```bash
# Step 1 — Clone the repository
git clone https://github.com/your-username/angular-weather-app.git

# Step 2 — Navigate into the project folder
cd angular-weather-app

# Step 3 — Install all dependencies
npm install

# Step 4 — Start the development server
ng serve
```

Then open your browser and visit 👉 **`http://localhost:4200`**

---

## 📌 Important Note

> This project uses **hardcoded mock weather data** for learning purposes.
> The goal is to demonstrate Angular fundamentals — not live API integration.
>
> **Future Improvements planned:**
> - Integrate OpenWeatherMap API for real-time data
> - Add loading spinner during fetch
> - Add multiple city support
> - Make it fully responsive for mobile

---

## 📝 What I Learned

Building this project helped me understand:

- How Angular **bootstraps** from `main.ts` → `AppModule` → `AppComponent`
- How **parent and child components** communicate using selectors
- The difference between **one-way and two-way data binding**
- How **event binding** connects user interactions to component logic
- The role of **FormsModule** in enabling `ngModel`
- How Angular creates a true **Single Page Application** experience

---

## 🙋‍♂️ Author

Made with ❤️ while learning Angular fundamentals.
Feel free to **fork**, **star** ⭐, and build on top of it!

---

<div align="center">

⭐ If you found this helpful, give it a star! It motivates me to keep building & learning.

</div>
