import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { QueryClient, QueryClientProvider } from "react-query";
//import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./pages/HomePage";
import RQSuperHerosPage from "./pages/RQSuperHerosPage";
import SuperHerosPage from "./pages/SuperHerosPage";
import TodoList from "./components/TodoList";
import AnimationOne from "./pages/AnimationOne";
import AnimationTwo from "./pages/AnimationTwo";
import ImageAnimation from "./pages/ImageAnimation";
import FramerAnimatioin from "./components/FramerAnimation";

//const queryClient = new QueryClient();

function App() {
  return (
    //<QueryClientProvider client={queryClient}>
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "5px",
                  padding: "8px",
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "5px",
                  padding: "8px",
                }}
                to="/super-heros"
              >
                Super Heros
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "5px",
                  padding: "8px",
                }}
                to="/rq-super-heros"
              >
                RQ Super Heros
              </Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/animation-one" element={<AnimationOne />} />
          <Route path="/animation-two" element={<AnimationTwo />} />
          <Route path="/image-animation" element={<ImageAnimation />} />
          <Route path="/framer-animation" element={<FramerAnimatioin />} />
          <Route path="/super-heros" element={<SuperHerosPage />} />
          <Route path="/rq-super-heros" element={<RQSuperHerosPage />} />
          <Route path="/to-do-list" element={<TodoList />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>

    //<ReactQueryDevtools initialIsOpen={false} />
    //</QueryClientProvider>
  );
}

export default App;
