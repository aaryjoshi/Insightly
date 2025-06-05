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




## ⚙️ Getting Started

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/insightly.git
    cd insightly
    ```

2. **Set up the backend**
    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    pip install -r requirements.txt
    ```

3. **Run backend modules (in order)**

- Build the FAISS vector index
  ```bash
  python index_builder.py
  ```

- Load Gemini LLM and initialize chain
  ```bash
  python llm_model.py
  ```

- Query the model
  ```bash
  python query.py
  ```

4. **Set up the frontend**
    ```bash
    cd ../frontend
    npm install
    ```

5. **Run the application**
    ```bash
    npm start
    ```
