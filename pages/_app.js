import React from "react";
import Header from "@/components/header";
import CreateGoalcardPage from "@/components/CreateGoalcardPage";
import Footer from "@/components/Footer";
import { mainStyles } from "@/styles";

const App = () => {
  return (
    <div style={mainStyles}>
      <Header />
      <CreateGoalcardPage />
      <Footer />
    </div>
  );
};

export default App;
