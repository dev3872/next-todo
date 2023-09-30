"use client";

import DaySelect from "@/src/components/DaySelect";
import { ImportantItems } from "@/src/components/ImportantItems";
import YearSelect from "@/src/components/YearSelect";
import { LogoutOutlined } from "@ant-design/icons";
import { FloatButton, Tooltip } from "antd";

export default function Landing() {
  return (
    <div className="flex w-screen h-screen justify-center content-center">
      <div className="flex justify-center items-center w-full h-full bg-slate-600">
        <div className="bg-gradient-to-b from-blue-400 to-blue-800 rounded-l-lg">
          <YearSelect
            items={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            active="Aug"
          />
        </div>
        <div>
          <DaySelect month="8" year="2023" />
        </div>
        <div>
          <ImportantItems />
        </div>
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
