import './App.css';
import {useState} from "react"
import { useEffect,useRef } from 'react'

function Work() {
  const [formData,setFormdata]=useState({
    query:"",
    source:""
  })

  const [output,setOutput]=useState("")
  const [fullAnswer, setFullAnswer] = useState("");  

  const handleChange=(e)=>{
    const {name,value}= e.target;
    setFormdata((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urls = formData.source.split(",").map(url => url.trim()).filter(url => url !== "");
    try {
      const response = await fetch("https://1a06-34-169-163-125.ngrok-free.app/api/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: formData.query,
          urls: urls,
        }),
      });

      const data = await response.json();
      console.log("✅ Answer:", data.answer);
      console.log("🔗 Sources:", data.sources);

      const combined = `${data.answer}\n\nSources: ${data.sources}`;
      setFullAnswer(combined);

    } catch (error) {
      console.error("❌ Backend error:", error);
    }
  };

  const outputRef = useRef("");
  useEffect(() => {
    if (!fullAnswer) return;
  
    let i = 0;
    outputRef.current = ""; // reset ref
    setOutput(""); // reset visible output
  
    const interval = setInterval(() => {
      if (i < fullAnswer.length) {
        outputRef.current += fullAnswer.charAt(i);       // ✅ append to ref
        setOutput(outputRef.current);                    // ✅ update state once per char
        i++;
      } else {
        clearInterval(interval);                          // ✅ done typing
      }
    }, 20);
  
    return () => clearInterval(interval); // cleanup on re-run
  }, [fullAnswer]);
  

  return (
    <div className="App">
      {/* Left section for inputs */}
      <div className="input-section">
        {/* Siri-like wave animation */}
        <div className="wave-container">
          <div className="wave-circle">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="particles-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        <form className="input-container" onSubmit={handleSubmit}>
          <h2 className="section-title">Research Query</h2>

          <label htmlFor="query">Enter your query</label>
          <input
            type="text"
            id="query"
            name="query"
            placeholder="What would you like to research?"
            value={formData.query}
            onChange={handleChange}
          />

          <label htmlFor="source">Sources</label>
          <input
            type="text"
            id="source"
            name="source"
            placeholder="Add reference sources or constraints..."
            value={formData.source}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">Process Query</button>
        </form>
      </div>
      
      {/* Right section for output */}
      <div className="output-section">
        <div className="output-container">
          <h2 className="section-title">Research Findings</h2>
          
          <label htmlFor="answer">Results</label>
          <textarea 
            id="answer" 
            name="answer" 
            placeholder="Your research results will appear here..."
            rows="150"
            value={output}
            style={{
              height: "500px",
              overflowY: "auto",
              resize: "vertical",
              padding: "12px",           // 👈 Add this
              fontFamily: "monospace"    // Optional: better look for typed text
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="Work">
      <Work/>
    </div>
  );
}

export default App;
