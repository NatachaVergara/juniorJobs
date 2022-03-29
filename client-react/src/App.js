import ProfilePage from "./pages/ProfilePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate replace to="/profile" />} />
        <Route path="/profile" element={<ProfilePage />} />
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
