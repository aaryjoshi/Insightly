# 🧠 Insightly: AI-Powered News Analysis with Gemini + LangChain + React

![Project Banner](https://img.shields.io/badge/LLM-Gemini-blue?style=for-the-badge)
![Built With](https://img.shields.io/badge/Built%20With-React%20%7C%20LangChain%20%7C%20FAISS%20%7C%20Gemini-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

> **Insightly** is an intelligent RAG-based application that scrapes financial news from the web, embeds them using HuggingFace transformers, and enables natural language querying via Google's Gemini LLM — all wrapped in a modern and interactive **React** frontend.

---

## 🚀 Features

- 🔍 **Real-time Web Scraping** of news articles from URLs
- 🧩 **Text Chunking & Embedding** via HuggingFace + FAISS
- 🔄 **RAG Pipeline** powered by LangChain + Gemini Flash
- 💬 **Natural Language Q&A** with source attribution
- 🌐 **React Frontend** with a sleek, responsive UI
- ⚡ **Fast Retrieval** with local vector index

---




🛠️ Tech Stack
| Layer          | Tools / Libraries                             |
| -------------- | --------------------------------------------- |
| **Frontend**   | React.js, TailwindCSS                         |
| **Backend**    | Python, LangChain, FAISS                      |
| **LLM**        | Gemini 2.0 Flash via `langchain-google-genai` |
| **Embeddings** | Hugging Face Sentence Transformers            |
| **Vector DB**  | FAISS (in-memory, local)                      |
| **Deployment** | Local / Coming Soon: Cloud                    |




⚙️ Setup Instructions
🔧 1. Backend Setup (Python)
The backend is responsible for scraping articles, building the FAISS vector index, embedding using HuggingFace models, and querying with Gemini via LangChain.

1.1 Clone the repository
bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/insightly.git
cd insightly/backend

1.2 Create a virtual environment (optional but recommended)
bash
Copy
Edit
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
1.3 Install dependencies
bash
Copy
Edit
pip install -r requirements.txt
1.4 Run the backend modules in order
Step 1: Build vector index from scraped articles

bash
Copy
Edit
python index_builder.py
Step 2: Load the index and set up the LLM model

bash
Copy
Edit
python llm_model.py
Step 3: Run the query interface

bash
Copy
Edit
python query.py
✅ Tip: You can wrap all of this into a FastAPI/Flask backend later to make it queryable from the React frontend.

🌐 2. Frontend Setup (React)
The frontend is a sleek and responsive UI built with React + Tailwind for interacting with the AI system.

2.1 Navigate to the frontend folder
bash
Copy
Edit
cd ../frontend
2.2 Install dependencies
bash
Copy
Edit
npm install
2.3 Start the React app
bash
Copy
Edit
npm start
