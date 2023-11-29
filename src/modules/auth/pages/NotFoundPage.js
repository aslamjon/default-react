import Button from "components/elements/button";
import Flex from "components/elements/flex";
import React, { memo } from "react";
import styled from "styled-components";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
  background: white;
  img {
    max-width: 100%;
  }
  .contant_box_404 {
    h3 {
      font-size: 4vw;
    }
    p {
      margin: 20px 0;
    }
    .link_404 {
      padding: 10px 20px;
    }
  }
`;

const NotFoundPage = ({ history }) => {
  return (
    <Style>
      <img
        src={
          "https://api.pdp.uz/api/attachment/v1/attachment/download?id=e647f515-b79b-4808-8e00-f2380fe9a11d.image_gif&view=open"
        }
        alt="file not found"
      />
      <Flex align="center" direction="column" className="contant_box_404">
        <h3 className="h2">Look like you're lost</h3>

        <p>the page you are looking for not avaible!</p>

        <Button success className="link_404" onClick={() => history.push("/")}>
          Go Home
        </Button>
      </Flex>
    </Style>
  );
};

export default memo(NotFoundPage);
