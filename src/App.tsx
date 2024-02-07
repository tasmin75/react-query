import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./components/HomePage";
import RQSuperHerosPage from "./components/RQSuperHerosPage";
import SuperHerosPage from "./components/SuperHerosPage";
import TodoList from "./components/TodoList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heros">Super Heros</Link>
              </li>
              <li>
                <Link to="/rq-super-heros">RQ Super Heros</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heros" element={<SuperHerosPage />} />
            <Route path="/rq-super-heros" element={<RQSuperHerosPage />} />
            <Route path="/to-do-list" element={<TodoList />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
