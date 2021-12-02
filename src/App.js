import "./App.css";
import Navbar from "./Views/Navbar/Navbar";
import Sidebar from "./Views/Sidebar/Sidebar";
import MainBody from "./Views/MainContent/MainBody";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="gridContainer">
        <Sidebar />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
