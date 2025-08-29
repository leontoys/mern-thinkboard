# MERN ThinkBoard

A full-stack note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js) following the tutorial by CodeSistency.

🌐 **Live Demo**: [https://mern-thinkboard-b1p2.onrender.com/](https://mern-thinkboard-b1p2.onrender.com/)

## 🌟 Features

- **Create, Update, and Delete Notes** with title and description
- **Fully Functional REST API** with proper HTTP methods and status codes
- **Rate Limiting** implemented with Upstash Redis
- **Completely Responsive UI** that works on all devices
- **Modern Stack** using the latest versions of MERN technologies
- **Deployment Ready** with guides included

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, DaisyUI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Rate Limiting**: Upstash Redis
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/leontoys/mern-thinkboard.git
cd mern-thinkboard
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Set up environment variables:
   - Create a `.env` file in the backend directory
   - Add your MongoDB connection string and Upstash Redis URL:
   ```
   MONGO_URI=your_mongodb_connection_string
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   NODE_ENV=development
   ```

5. Start the development servers:
   - Backend (runs on port 5000):
   ```bash
   cd backend
   npm run dev
   ```
   
   - Frontend (runs on port 5173):
   ```bash
   cd frontend
   npm run dev
   ```

## 🚀 Deployment

The application is deployed on Render. Refer to the original tutorial for detailed deployment instructions.

## 📚 Learning Resources

This project was built following the tutorial: [Learn MERN Stack with this one single tutorial](https://www.youtube.com/watch?v=Ea9rrRj9e0Y)

Additional resources:
- [Diagrams](https://app.eraser.io/workspace/GlhY2...)
- [Upstash](https://upstash.com)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Burak Orkmez](https://github.com/burakorkmez) for the excellent tutorial and original codebase
- [CodeSistency](https://x.com/codesistency) for creating the content

---

⭐ Star this repo if you found it helpful!