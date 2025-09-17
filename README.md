# 🌸 MI Store Dashboard

A full-featured **Next.js 13+ Dashboard** application with authentication, protected routes, and flower post management.  
Built with **React, Next.js App Router, Tailwind CSS, and ShadCN UI**.

## Live Link : https://mi-store-rho.vercel.app

---

## 🚀 Features

- 🔐 **Authentication**
  - JWT-based login & signup
  - Role-based access (User/Admin)
  - Protected dashboard routes

- 🏠 **Dashboard Layout**
  - Responsive sidebar navigation
  - Mobile-friendly sheet menu
  - User profile section with role badge

- 🌸 **Flower Management**
  - Add Flower Post (title, description, image, etc.)
  - Store data securely in MongoDB
  - Fetch flowers via API routes

- 🎨 **UI/UX**
  - Styled with **Tailwind CSS**
  - **ShadCN UI components**
  - Light/Dark mode support
  - Lucide-react icons

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js 13+](https://nextjs.org/), React, Tailwind CSS, ShadCN UI  
- **Backend**: Next.js API Routes (Node.js, Express-like APIs)  
- **Database**: MongoDB  
- **Auth**: JWT, LocalStorage (with client-side guards)  
- **Icons**: Lucide-react  

---

## 📂 Project Structure

app/
├── (dashboard)/
│ ├── layout.jsx # Dashboard layout (sidebar, header, auth check)
│ ├── page.jsx # Main dashboard page
│ └── add-post/ # Add Flower Post page
├── sign-in/ # Sign-in page
├── api/
│ └── user/
│ └── profile # API route for user profile
components/
├── ui/ # ShadCN UI components
├── UserInfo.jsx # User profile info (client component)
└── FlowerPostForm.jsx # Form for creating flower posts