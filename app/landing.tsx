"use client";

import { LogoutOutlined } from "@ant-design/icons";
import { FloatButton, Tooltip } from "antd";

export default function Landing() {
  return (
    <div className="flex w-full h-full justify-center content-center">
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <a href="/api/auth/logout">Logout</a>
      </div>
      <Tooltip title="Logout">
        <FloatButton
          shape="circle"
          type="primary"
          style={{ right: 24 }}
          icon={
            <a href="/api/auth/logout">
              <LogoutOutlined />
            </a>
          }
        />
      </Tooltip>
    </div>
  );
}
