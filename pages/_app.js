import { useState } from "react";
import Header from "@/components/header";
import CardCreator from "@/components/CardCreator";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import ProfilePage from "@/components/ProfilePage";
import MainPage from "@/components/MainPage";
import { mainStyles } from "@/styles";

const App = () => {
  const [currentPage, setCurrentPage] = useState("main");

  const handleCreateClick = () => {
    setCurrentPage("create");
  };

  const handleMainClick = () => {
    setCurrentPage("main");
  };

  const handleProfileClick = () => {
    setCurrentPage("profile");
  };

  return (
    <div style={mainStyles}>
      <Header />
      <MenuBar
        onCreateClick={handleCreateClick}
        onMainClick={handleMainClick}
        onProfileClick={handleProfileClick}
      />
      {currentPage === "create" && (
        <>
          <CardCreator />
          <Footer />
        </>
      )}
      {currentPage === "main" && <MainPage />}
      {currentPage === "profile" && (
        <>
          <ProfilePage />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
