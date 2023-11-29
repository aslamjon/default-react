import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "modules/auth/pages/NotFoundPage";
import TestPage from "modules/auth/pages/TestPage";

const AccessRoute = () => {
  return (
    <Routes>
      {/* <Suspense fallback={<InitialLoader />}>
        <Route path={["/modules", "/modules/:id"]} exact render={(props) => <ModulesPage {...props} />} />
        <Route path={"/modules/:id/syllabus"} exact component={TabsContainer} />
        <Route path={"/modules/:id/syllabus/create"} exact component={TabsContainer} />
        <Route path={"/modules/:id/assignments"} exact component={AssigmentsPage} />
      </Suspense> */}

      <Route path={"/"} exact element={<TestPage />} />
      <Route path={"/404"} exact element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AccessRoute;
