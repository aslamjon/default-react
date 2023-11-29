import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LayoutManager from "../layouts/LayoutManager";
import AuthLoader from "../services/auth/AuthLoader";
import IsAuth from "../services/auth/IsAuth";
import HasAccess from "../services/auth/HasAccess";
import IsGuest from "../services/auth/IsGuest";

// AUTH MODULES
// import Aslamjon from "../modules/auth/pages/Aslamjon";
// import SignUpPage from "../modules/auth/pages/SignUpPage";
// import VerificationPage from "../modules/auth/pages/VerificationPage";
// import VerificationMethodsPage from "../modules/auth/pages/VerificationMethodsPage";
// import LoginOrSignUpPage from "../modules/auth/pages/LoginOrSignUpPage";
// import ForgotPhoneNumberPage from "../modules/auth/pages/ForgotPhoneNumberPage";
// import LoginPage from "../modules/auth/pages/LoginPage";
// import ResetPasswordPage from "../modules/auth/pages/ResetPasswordPage";
import TestPage from "../modules/auth/pages/TestPage";

import AccessRoute from "./accessRoute";
import CustomBrowserRouter from "./CustomBrowserRouter";

const Routers = () => {
  return (
    <CustomBrowserRouter>
      <AuthLoader>
        <LayoutManager>
          <IsAuth>
            <HasAccess>{({ userCan }) => <AccessRoute />}</HasAccess>
          </IsAuth>
          <IsGuest>
            <Routes>
              {/* <Route path={"/auth"} exact element={<LoginOrSignUpPage />} />
              <Route path={["/auth/sign-up/:phone", "/auth/sign-up/:phone/:hasPassword"]} exact element={<SignUpPage />} />
              <Route path={"/auth/verification/:phone/:smsCodeId/:message/:options/:type"} exact element={<VerificationPage />} />
              <Route
                path={"/auth/reset-password/:phone/:options/:type/:hint/:smsCode/:smsId"}
                exact
                element={<ResetPasswordPage />}
              />
              <Route
                path={["/auth/forgot-phone-number", "/auth/forgot-phone-number/:email"]}
                exact
                element={<ForgotPhoneNumberPage />}
              />
              <Route path={"/auth/verification-methods/:phone/:options/:type"} exact element={<VerificationMethodsPage />} />
              <Route path={"/auth/login/:phone"} exact element={<LoginPage />} />
              <Route path={"/aslamjon"} exact element={<Aslamjon />} /> */}

              <Route path="/" element={<TestPage />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </IsGuest>
        </LayoutManager>
      </AuthLoader>
    </CustomBrowserRouter>
  );
};

export default Routers;
