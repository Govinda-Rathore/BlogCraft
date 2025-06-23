# 📝 BlogCraft

A minimalist blog publishing platform inspired by Medium. **BlogCraft** allows users to sign up, sign in, read existing blogs, and publish their own. Each blog shows the author, estimated reading time, and publish date — making content accessible and easy to consume.

---

## 🔧 Tech Stack

- **Frontend:** React + Tailwind CSS
- **Backend:** Cloudflare Workers
- **Language:** TypeScript
- **Validation:** Zod
- **Authentication:** JWT-based
- **ORM:** Prisma (with connection pooling)
- **Database:** PostgreSQL
- **Common Module:** Published on NPM and shared between frontend and backend

---

## 🚀 Features

- 🆕 **User Signup & Signin**
- 📖 **Read Blogs** with:
  - Author name
  - Read time
  - Publish date
- ✍️ **Publish Your Own Blogs**
- 🔐 **Secure Authentication** using JWT
- ⚙️ **Zod-based Input Validation**
- 🌐 **Modular Monorepo** with:
  - `frontend` – React UI
  - `backend` – Cloudflare Worker-based API
  - `common` – Shared logic published as an NPM package

---

## 📦 Installation

### Clone the Repository
```bash
git clone https://github.com/your-username/blogcraft.git
cd blogcraft
```


##Setup Common Module
cd common
npm install
npm run build
npm link  # Optional: Link locally for development

##Setup Backend
cd ../backend
npm install


##Setup Frontend
cd ../frontend
npm install

##Running Locally
###Frontend (React)
cd frontend
npm run dev

###Backend (Cloudflare Workers)
cd backend
npx wrangler dev

Make sure your environment variables (e.g., PostgreSQL connection string, JWT secret) are set up correctly for both frontend and backend.



##📈 Future Features (TODO)

-🗂 Blog categories/tags

-🧾 Rich-text editor support

-🔍 Full-text search

-🧑‍🤝‍🧑 Follow authors or save blogs
