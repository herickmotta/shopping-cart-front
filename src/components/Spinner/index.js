import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import colors from "../../config/colors";

export default function Spinner({ color, fontSize }) {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: fontSize || 24,
        color: color || colors.white,
      }}
      spin
    />
  );
  return <Spin indicator={antIcon} />;
}
