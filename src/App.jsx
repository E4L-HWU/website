import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Footer, Gallery, Hero, Navbar, UpcomingEvents } from "./components";
import SignUp from "./SignUp";
import GalleryPage from "./Gallery";

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
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}