import NewsFeed from "./Components/NewsFeed";
import Navbar from "./Components/Navbar";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState("")
  let setTime = new Date();
  let currentTime = setTime.getHours()

  
  return (
    <div style={{backgroundColor:darkMode}}>
   <Navbar />
  <NewsFeed />
    </div>
  );
}

export default App;
