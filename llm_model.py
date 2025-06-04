#these are the some older versions but they show no compatiblity issue
# pip3 install langchain-google-genai==2.1.3
# pip3 install google-ai-generativelanguage==0.6.17
import os
import pickle
from dotenv import load_dotenv
from langchain_community.vectorstores import FAISS
from langchain.chains import RetrievalQAWithSourcesChain
from langchain_google_genai import ChatGoogleGenerativeAI

# Load environment
load_dotenv()
os.environ['GOOGLE_API_KEY'] = os.getenv("GEMINI_API_KEYS")

# Load vector index
with open("vector_index.pkl", "rb") as f:
    vector_index = pickle.load(f)

# Create retriever
documentSearch = vector_index.as_retriever()

# Load Gemini model
llm = ChatGoogleGenerativeAI(
    model="models/gemini-2.0-flash",
    temperature=0.9,
    max_tokens=512,
    google_api_key=os.environ["GOOGLE_API_KEY"]
)

# Create RAG chain
chain = RetrievalQAWithSourcesChain.from_llm(llm=llm, retriever=documentSearch)

