import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Gallery, Hero, Navbar, UpcomingEvents } from "./components";
import SignUp from "./SignUp";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Gallery />
              <UpcomingEvents />
            </>
          }
        />

        <Route path="/freshers" element={<SignUp />} />
      </Routes>
    </Router>
  );
}