# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 💼 MyPortofolio

MyPortofolio is a personal portfolio web application built using **ReactJS**, **Tailwind CSS**, and **Firebase**. It showcases skills, portfolios by category, and includes a contact form integrated with **EmailJS**.

---

## 🔧 Features

- 🧠 About Me Section
- 🛠 Skills by Category (Frontend, Backend, Design, etc.)
- 🖼 Portfolio per skill category (dynamic routing)
- 📩 Contact Form with EmailJS integration
- 🌐 Responsive design with Tailwind CSS
- 🔥 Data from Firebase Firestore

---

## 🚀 Tech Stack

- **ReactJS**
- **Tailwind CSS**
- **Firebase (Firestore)**
- **EmailJS**
- **Vite**

---

## 🧪 Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/myPortofolio.git
   cd myPortofolio
   ```

2. Install dependencies:

   npm install

3. Run the app locally:
   
   npm run dev
   
---
🔥 Firebase Setup
Create a Firebase project

- Enable Firestore and create a Skills collection

- Add data structure like:

{
  "Category": "Frontend",
  "category": "frontend",
  "icon": "https://link-to-icon.com/icon.png",
  "skills": ["ReactJS", "VueJS", "Tailwind"]
}

- Replace the Firebase config in /src/firebase.js with your credentials
---
📧 EmailJS Setup
1. Create an account at EmailJS

2. Add a new service and email template

3. Copy:

    - Service ID

    - Template ID

    - Public key

4. Add them to your email form logic
---
📦 Build and Deploy
To build:

npm run build

To deploy:

- Upload the /dist folder to Netlify or Vercel

- Or connect your GitHub repo for CI/CD deployment
---
🙋‍♂️ Author
Mata Khoirul Anwar
Frontend & Backend Developer
📧 mathakmka@gmail.com
