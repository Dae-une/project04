import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import Write from "./pages/Write/Write";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/write" element={<Write/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
