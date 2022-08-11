import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import Feed from "./pages/Feed/Feed";
import DetailPages from "./pages/DetailPages/DetailPages";
import Write from "./pages/Write/Write";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detailpages/:id/*" element={<DetailPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
