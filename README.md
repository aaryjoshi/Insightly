# 🧠 Financial Article Research Assistant

An AI-powered research tool for analyzing financial news articles with ease and intelligence.

## 🚀 Overview

The **Financial Article Research Assistant** enables users to explore, analyze, and query financial news content from online URLs or uploaded files. Built with modern NLP tools like LangChain, OpenAI Embeddings, and FAISS, this project lets users retrieve context-aware answers from articles via a Streamlit interface.

## 🛠️ Technologies Used

- **LangChain** – For chaining document loading, processing, and querying.
- **OpenAI Embeddings** – To convert textual content into meaningful vector representations.
- **FAISS** – A powerful vector store for fast similarity-based retrieval.
- **Streamlit** – For creating an interactive and user-friendly web interface.

## ✨ Features

- 🔗 **URL & File Support**: Upload a `.txt` file of URLs or paste URLs directly to ingest content.
- 📄 **Content Extraction**: Uses LangChain's `UnstructuredURLLoader` for seamless article loading and cleaning.
- 🧠 **Embeddings & Indexing**: Embeds content using OpenAI and indexes it with FAISS for fast semantic search.
- 💬 **Intelligent Q&A**: Ask context-aware questions and receive relevant answers grounded in your article data.
- 💾 **Local Storage**: Embeddings are stored in a FAISS index (`.pkl` file) for efficient reusability.

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/aaryjoshi/Insightly.git

Install dependencies
bash
Set your API key
Create a .env file in the project root and add:

env
Copy
Edit
Gemini_Api_key=your_gemini_api_key
▶️ Running the App
bash
Copy
Edit
streamlit run main.py
Use the sidebar to input URLs.

Click "Process URLs" to start processing.

Ask questions in the prompt box and receive answers with source URLs.

