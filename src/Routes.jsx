import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Students = React.lazy(() => import("pages/Students"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const LoginRegister = React.lazy(() => import("pages/LoginRegister"));
const FavoriteMenu = React.lazy(() => import("pages/FavoriteMenu"));
const HOMEWithCategories = React.lazy(() => import("pages/HOMEWithCategories"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homewithcategories" element={<HOMEWithCategories />} />
          <Route path="/favoritemenu" element={<FavoriteMenu />} />
          <Route path="/loginregister" element={<LoginRegister />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
