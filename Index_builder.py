#dependencies
# pip3 install langchain faiss-cpu sentence-transformers
# pip3 install -U sentence-transformers
# pip3 install unstructured
# pip3 install langchain-community
# pip3 install -U langchain-google-genai
# pip3 install python-dotenv
# pip3 install google-generativeai
# pip3 install google-genai
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import UnstructuredURLLoader
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
import pickle

#a hidden dependancy for unstructured 
import nltk
import ssl
try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    pass
else:
    ssl._create_default_https_context = _create_unverified_https_context
nltk.download('punkt')


urls=[
    "https://www.moneycontrol.com/news/business/markets/wall-street-rises-as-tesla-soars-on-ai-optimism-11351111.html",
    "https://www.moneycontrol.com/news/business/tata-motors-launches-punch-icng-price-starts-at-rs-7-1-lakh-11098751.html",
    "https://www.thehindu.com/news/national/india-bans-direct-indirect-imports-from-pakistan/article69533634.ece"
]

def ProcessUrls():
    #load data
    loaders = UnstructuredURLLoader(
        urls=urls,
        show_progess_bar=True,
    )
    data = loaders.load()

    #split the data
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200
    )

    # As data is of type documents we can directly use split_documents over split_text in order to get the chunks.
    docs = text_splitter.split_documents(data)

    # Create the embeddings of the chunks using HuggingFaceEmbeddings
    embedding_model = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

    # Pass the documents and embeddings inorder to create FAISS vector index
    vectorindex_hf = FAISS.from_documents(docs, embedding_model)

    # Storing vector index created in local
    file_path="vector_index.pkl"
    with open(file_path, "wb") as f:
        pickle.dump(vectorindex_hf, f)


ProcessUrls()

