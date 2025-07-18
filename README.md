# 🎬 Minimal Api Studio Hits – Fastify + TypeScript

<img src="https://github.com/EwertonSolitto/dio-minimal-api-studio-hits/blob/main/assets/preview.png" alt="App preview" />

## 📝 About

A minimal and high-performance API built with **Fastify**, **Node.js**, and **TypeScript**, serving a collection of popular game studios and their top-selling hits.  
Ideal for rapid prototyping, learning API development, and querying data through clean and efficient endpoints.

## 🧩 Features

✅ Lightweight structure using **Fastify** – blazing fast and flexible  
✅ Fully typed with **TypeScript**  
✅ Handles JSON datasets for studios and their game hits  
✅ Includes route parameters and basic filtering  
✅ Easy to extend and customize

## 📁 API Routes

- `GET /hits` → Returns a list of studio hits  
- `GET /studios` → Returns all game studios  
- `GET /studios/:id` → Returns details of a specific studio by ID

## ⚙️ Technologies

- ⚡ Fastify  
- 🧠 Node.js  
- 🔡 TypeScript

## 📦 Dependencies

- 🚀 [`tsup`](https://www.npmjs.com/package/tsup) – for bundling the TypeScript code  
- 💡 [`tsx`](https://www.npmjs.com/package/tsx) – for running TypeScript instantly without build steps

## 🧪 Example Requests

- All studio hits:

```nginx
GET http://localhost:3333/hits
```

- All studios:

```nginx
GET http://localhost:3333/studios
```

- A specific studio (e.g., ID = 3):

```nginx
GET http://localhost:3333/studios/3
```

## 🚀 Getting Started

> Make sure you have **Node.js** installed

1. 📁 Clone the repository

```bash
git clone https://github.com/EwertonSolitto/dio-minimal-api-studio-hits.git
```

2. 📂 Navigate into the project folder

```bash
cd dio-minimal-api-studio-hits
```

3. 📦 Install the dependencies

```bash
npm install
```

4. ▶️ Run the development server

```bash
npm run start
```

5. 🛠 Build for production

```bash
npm run dist
```
