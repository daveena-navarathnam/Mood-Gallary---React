# 🎨 Mood Gallery — React Image Gallery Application

A responsive and dynamic **Image Gallery web application** built with **React JS**. This project demonstrates reusable component design, dynamic rendering using `map()`, clean component separation, and responsive UI styling.

---

## 📌 Project Overview

**Mood Gallery** is a modern image gallery website that dynamically displays a collection of themed images such as **Nature, City, Beach, and Night views**.

The application is designed using **React component-based architecture**, where image data is stored in an array of objects and rendered dynamically into reusable image cards.

This project was developed as part of a React learning task to strengthen understanding of:

* Reusable Components
* Props
* Dynamic Rendering
* Array Mapping
* Basic Responsive CSS
* Component Separation
* React Project Structure

---

## 🚀 Features

* ✅ Reusable **Gallery Card Component**
* ✅ Dynamic rendering using **`map()`**
* ✅ Image data stored in **array of objects**
* ✅ Props used for parent → child communication
* ✅ Header and Footer layout
* ✅ Styled button section for future filtering
* ✅ Responsive grid/flex image layout
* ✅ Clean and scalable React folder structure
* ✅ Easily extendable with more images

---

## 🛠️ Technologies Used

* **React JS**
* **JavaScript (ES6)**
* **HTML5**
* **CSS3**
* **Git & GitHub**
* **Vercel (Deployment)**

---

## 📂 Project Structure

```bash
imagegallery/
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js
│   ├── index.js
│   └── style.css
│
├── package.json
└── README.md
```

---

## 🧠 Core React Concepts Implemented

### 1) Reusable Components

A reusable `Gallery` component is used to avoid repeating the same JSX structure for every image card.

### 2) Props

Each image card receives:

* `url`
* `title`
* `description`
* `category`

through **props**.

### 3) Dynamic Rendering

The gallery is rendered using:

```javascript
imagegallery.map()
```

This allows automatic UI updates whenever new image objects are added.

### 4) Separation of Concerns

The project separates:

* UI structure
* data
* styling
* rendering logic

for better readability and maintainability.

---

## 📸 Sample Data Structure

```javascript
{
  url: "https://picsum.photos/300?random=1",
  title: "Nature",
  description: "Beautiful green forest view",
  category: "nature"
}
```

---

## 🎯 Learning Outcomes

Through this project, the following React skills were practiced:

* Creating functional components
* Passing props efficiently
* Rendering lists dynamically
* Structuring a React project professionally
* Writing reusable JSX
* Styling layouts with CSS flex/grid
* Preparing projects for deployment

---

## 🌐 Live Demo



https://mood-gallary-react-e2sv.vercel.app/




## 📦 Installation & Setup

To run locally:

```bash
git clone https://github.com/your-username/Mood-Gallery---React.git
cd imagegallery
npm install
npm start
```

---

## 🔮 Future Improvements

Planned enhancements:

* 🎯 Category filter buttons with `useState`
* 🌙 Dark mode toggle
* 🔍 Search images by title
* ❤️ Favorite image feature
* 🖼️ Modal popup preview
* ✨ Hover animations

---

## 👩‍💻 Author

**Daveena Navarathnam**

Frontend Developer | React Learner | UI Enthusiast

GitHub: `daveena-navarathnam`

---

## 📄 License

This project is created for **educational and portfolio purposes**.
