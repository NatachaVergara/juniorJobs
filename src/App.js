import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import { JobDescriptionPage } from "./pages/JobDescriptionPage";
import AboutUsPage from "./pages/AboutUsPage";
import ResourcesPage from "./pages/ResourcesPage";
import FaqPage from "./pages/FaqPage";
import { useUserContext } from "./Store/UserContext";
import NewJobOffer from "./pages/NewJobOffer";
import { JobOffersPage } from "./pages/JobOffersPage";

function App() {
  const { userType, isUser } = useUserContext();
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path='/joboffers' element={<JobOffersPage />} />
        <Route path="/job/:id" element={<JobDescriptionPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/faq" element={<FaqPage />} />
        {userType === "Recruiter" & isUser ? 
          <Route path="/newjob" element={<NewJobOffer />} />
        : null}
      </Routes>
    </Layout>
  );
}

export default App;
