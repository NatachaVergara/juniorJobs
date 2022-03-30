import ProfilePage from "./pages/ProfilePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Layout from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<HomePage />} />
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
