"use client";

import DaySelect from "@/src/components/DaySelect";
import { ImportantItems } from "@/src/components/ImportantItems";
import YearSelect from "@/src/components/YearSelect";
import { LogoutOutlined } from "@ant-design/icons";
import { FloatButton, Tooltip } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

export default function Landing() {
  const [date, setDate] = useState({
    day: dayjs().format("DD"),
    month: dayjs().format("MM"),
    year: dayjs().format("YYYY"),
  });
  const updateDate = (value: string, attr: "month" | "year" | "day") => {
    setDate((prevDate) => {
      return {
        ...prevDate,
        [attr]: value,
      };
    });
  };
  const months = [
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
  ];
  return (
    <div className="flex w-screen h-screen justify-center content-center">
      <div className="flex justify-center items-center w-full h-full bg-slate-600">
        <div className="bg-gradient-to-b from-blue-400 to-blue-800 rounded-l-lg h-max">
          <YearSelect
            items={months}
            active={months.at(parseInt(date.month) - 1) || "Jan"}
            setDate={updateDate}
          />
        </div>
        <div>
          <DaySelect
            month={date.month}
            year={date.year}
            setDate={updateDate}
            date={date}
          />
        </div>
        <div>
          <ImportantItems date={`${date.year}-${date.month}-${date.day}`} />
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
