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


🔧 Installation
🐍 Backend Setup
bash
Copy
Edit
git clone https://github.com/yourusername/insightly.git
cd insightly/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt
⚠️ Add your Google API key to your environment:

bash
Copy
Edit
export GOOGLE_API_KEY=your_api_key
🧠 Run the RAG System
bash
Copy
Edit
python query.py
🌐 Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
npm start
Ensure the backend is running before querying via the frontend.

📁 Project Structure
csharp
Copy
Edit
insightly/
├── backend/
│   ├── query.py               # Runs RAG pipeline
│   ├── vector_index.pkl       # Precomputed FAISS index
│   ├── rag_pipeline.py        # Central RAG setup
│   └── requirements.txt
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
🧪 Example Query
python
Copy
Edit
from rag_pipeline import ask_question

response = ask_question("What did India ban? Explain the situation in brief.")
print(response["answer"])
print("Sources:", response["sources"])


