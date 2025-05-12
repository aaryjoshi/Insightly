# Financial Article Research Assistant

A research tool designed to analyze financial articles by ingesting URLs or text files and enabling intelligent, context-aware interactions.
Built with **LangChain**, **OpenAI**, **FAISS**, and **Streamlit**, this assistant streamlines the exploration of financial content using advanced NLP and retrieval systems.

## Features

* 🌐 **Flexible Input**: Load articles from URLs or upload text files containing URLs.
* 🔍 **Smart Preprocessing**: Seamless extraction and preprocessing via LangChain’s `UnstructuredURLLoader`.
* 🧠 **Semantic Understanding**: Convert articles into high-dimensional vectors using OpenAI embeddings.
* ⚡ **Efficient Retrieval**: Perform similarity-based document search using FAISS for fast, accurate results.
* 🤖 **LLM-Powered Q\&A**: Ask ChatGPT questions and receive intelligent, source-aware answers.
* 🖥 **Intuitive UI**: Streamlit interface for real-time interaction, file handling, and dynamic user experience.

## Tech Stack

* **NLP & Retrieval**: LangChain, OpenAI Embeddings, FAISS
* **Interface**: Streamlit
* **LLM Integration**: OpenAI ChatGPT

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/aaryjoshi/Insightly.git
   cd 2_news_research_tool_project
   ```

2. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

3. **Configure API Key**

   * Create a `.env` file in the root directory.
   * Add your API key:

     ```bash
     Gemini_Api_keys=your_api_key_here
     ```

4. **Run the application**

   ```bash
   streamlit run main.py
   ```

## Usage

* Open the app in your browser.
* Use the sidebar to enter URLs or upload a file with multiple URLs.
* Click “Process URLs” to:

  * Extract and split the text.
  * Generate embeddings.
  * Index using FAISS (saved as a `.pkl` file).
* Ask questions based on the indexed content and receive precise answers with source references.

## Project Structure

* `main.py`: Main Streamlit app script.
* `requirements.txt`: Python dependencies.
* `faiss_store_openai.pkl`: Saved FAISS index for future retrieval.
* `.env`: API key configuration file.

---

Would you like this saved to a file or converted into a README for your GitHub repo?
