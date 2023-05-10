import React from "react";
import Header from "@/components/header";
import CardCreator from "@/components/CardCreator";
import Footer from "@/components/Footer";
import { mainStyles } from "@/styles";

const App = () => {
  return (
    <div style={mainStyles}>
      <Header />
      <CardCreator />
      <Footer />
    </div>
  );
};

export default App;
