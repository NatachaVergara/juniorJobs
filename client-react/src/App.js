import ProfilePage from "./pages/ProfilePage";
import { Navigate, Route, Routes } from "react-router-dom";
//import { Col, Container, Row } from "reactstrap";
import Layout from "./components/Layout/Layout";
import { JobDescriptionPage } from "./pages/JobDescriptionPage";
import { HomePage } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/job" element={<JobDescriptionPage/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/about" element={<AboutUsPage/>} />
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
  );
}

export default App;
