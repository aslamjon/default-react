import React, { memo } from "react";
// import { useDispatch } from "react-redux";
import Flex from "components/elements/flex";
import Content from "components/content";
import Toastify from "components/toastify";
import OverlayLoader from "components/loader/overlay-loader";

const MainLayout = ({
  children,
  loading,
  mode,
  changeModeRequest,
  changeLangRequest,
  getLanguageList,
  languages,
  entities,
  lang,
  request,
  logoutRequest,
  trigger,
  ...rest
}) => {
  // const dispatch = useDispatch();

  // const logout = () => {
  //   logoutRequest({
  //     cb: {
  //       success: () => {
  //         trigger();
  //       },
  //       fail: () => "",
  //     },
  //   });
  //   window.localStorage.removeItem("persist:storage");
  //   window.location.reload();
  // };

  // useEffect(() => {
  //   const storeName = "language-list";
  //   const entityName = "language";
  //   let scheme = { data: [LanguageScheme] };
  //   request({
  //     url: "auth/v1/auth/languages",
  //     cb: {
  //       success: (data) => {
  //         let normalizerData = Normalizer.Normalize(data, scheme);
  //         dispatch({
  //           type: NormalizerAction.NORMALIZE.SUCCESS,
  //           payload: {
  //             ...normalizerData,
  //             storeName,
  //             entityName,
  //           },
  //         });
  //       },
  //       fail: () => {},
  //     },
  //   });
  // }, []);
  // languages = Normalizer.Denormalize(languages, { result: { data: [LanguageScheme] } }, entities);

  return (
    <>
      {loading && <OverlayLoader />}
      <Flex>
        <Content>
          <Toastify />
          {children}
        </Content>
      </Flex>
    </>
  );
};

export default memo(MainLayout);
