import { useState } from "react";
import Header from "@/components/header";
import CardCreator from "@/components/CardCreator";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import ProfilePage from "@/components/ProfilePage";
import MainPage from "@/components/MainPage";
import { containerStyles, GlobalStyle } from "@/styles";

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
    <>
      <GlobalStyle />
      <div style={containerStyles}>
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
        {currentPage === "main" && (
          <>
            <MainPage />
            <Footer />
          </>
        )}
        {currentPage === "profile" && (
          <>
            <ProfilePage />
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default App;
