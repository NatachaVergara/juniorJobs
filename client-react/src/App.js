import ProfilePage from "./pages/ProfilePage";
import { Navigate, Route, Routes } from "react-router-dom";
//import { Col, Container, Row } from "reactstrap";
import Layout from "./components/Layout/Layout";
import { JobDescriptionPage } from "./pages/JobDescriptionPage";
import { HomePage } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutUsPage from "./pages/AboutUsPage";

import ResourcesPage from "./pages/ResourcesPage";

import FaqPage from "./pages/FaqPage";
import UserContextProvider from "./Store/UserContext";
 

function App() {
  return (

    <UserContextProvider>
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/job" element={<JobDescriptionPage/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />

        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/resources" element={<ResourcesPage/>} />


        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/faq" element={<FaqPage/>} />
        
 
        {/* {authCtx.isLoggedIn && (
        <>
        <Route path="*" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add-recipe" element={<SearchPage />} />
        </>
        )}
        {!authCtx.isLoggedIn && (
          <>
          <Route path="*" element={<Navigate replace to="/auth" />} />
          <Route path="/auth" element={<AuthPage />} />
          </>
        )} */}
      </Routes>
      </Layout>
    </UserContextProvider>
  );
}

export default App;
