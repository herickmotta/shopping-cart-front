import React from "react";
import { Spin } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import styled from "styled-components";
import colors from "../../config/colors";

export default function Spinner({ color, onClick }) {
  const antIcon = (
    <Box>
      <ReloadOutlined
        style={{
          fontSize: 30,
          color: color || colors.darkerGreen,
          textAlign: "center",
          padding: "5px",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    </Box>
  );
  return <Spin indicator={antIcon} />;
}

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
