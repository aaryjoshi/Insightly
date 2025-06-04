from llm_model import ask_question
from llm_model import chain

def ask_question(query):
    try:
        result = chain.invoke(query)
        return {
            "answer": result.get("answer", "No answer found."),
            "sources": result.get("sources", "No sources.")
        }
    except Exception as e:
        print("An error occurred while invoking the RAG chain:")
        print(str(e))

query = "What did India ban? Explain the situation in brief."
responce = ask_question(query)
print("Answer:")
print(responce['answer'])
print("Sources:")
print(responce['sources'])

