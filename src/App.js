// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Components/Form";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      {/* <BasicExample/> */}
      {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}/>
            {/* <Route path="Form" element={<BasicExample/>} /> */}
            <Route path="Form" element={<Form/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
