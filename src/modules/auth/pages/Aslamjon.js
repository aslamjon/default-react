import React, { useState } from "react";
import Tabs from "components/tabs";
import styled from "styled-components";
import Message from "components/elements/message";

const Style = styled.div`
  padding: 20px;
`;

const MyComponent = ({ temp, setTemp }) => {
  // console.log(temp);
  const [state, setState] = useState(false);
  return (
    <Style>
      {/* <Avatar /> */}
      <Tabs header={["hello", "HI"]} body={[<div>"welcome"</div>, <div>"back"</div>]} />
      {/* <DropZone>hello world</DropZone> */}
      {/* <FormDemo>
        <Field type="dropzone" name="drop"></Field>
      </FormDemo> */}

      <button onClick={() => setState((s) => !s)}>sfds</button>

      <Message message={"Congratulations, you have successfully passed the tests"} />
      <Message message={"Sorry, you failed the tests"} status="fail" active={state} />
      {/* <div style={{ width: "250px" }}>
      <button
        onClick={() => {
          setTemp({ item: "232132", storeName: "temp" });
        }}
      >
        Test
      </button>
    </div> */}
    </Style>
  );
};

export default MyComponent;
