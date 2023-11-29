import Button from "components/elements/button";
import { withTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setTokens } from "../authSlice";
import Form from "containers/Form/form";
import Field from "containers/Form/field";

const Style = styled.div``;
// eslint-disable-next-line react-hooks/exhaustive-deps
const TestPage = ({ match, history, t }) => {
  const dispatch = useDispatch();

  return (
    <Style>
      test
      <Button
        success
        onClick={() => {
          dispatch(setTokens({}));
        }}
      >
        click
      </Button>
      <Form>
        <Field type={"input"} name="hello" />
      </Form>
    </Style>
  );
};

export default withTranslation()(TestPage);
