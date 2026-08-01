import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home initialCategory="all" />} />
          <Route path="/ta" element={<Home initialCategory="ta" />} />
          <Route path="/dev" element={<Home initialCategory="dev" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}
