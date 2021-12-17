import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../../features/about/AboutPage";
import { Cataloge } from "../../features/cataloge/Cataloge";
import { ProductDetails } from "../../features/cataloge/ProductDetails";
import { ContactPage } from "../../features/contact/ContactPage";
import { HomePage } from "../../features/home/HomePage";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container className="body-section">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cataloge" element={<Cataloge />} />
          <Route path="cataloge/:id" element={<ProductDetails />} />
        </Routes>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
