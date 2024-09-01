import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Footer, Gallery, Hero, Navbar, UpcomingEvents } from "./components";
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
              <Footer />
            </>
          }
        />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}