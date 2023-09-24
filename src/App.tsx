import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route
          path="*"
          element={
            <div className=" grid place-content-center min-h-screen">
              <div className="max-w-sm mx-auto text-center">
                <p>What are you doing here?</p>
                <Link to="/">Go home</Link>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

