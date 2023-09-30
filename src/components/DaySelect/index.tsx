"use client";

import { Table } from "antd";
import dayjs from "dayjs";
import "./style.scss";
import { FileAddFilled, PlusCircleTwoTone } from "@ant-design/icons";
interface dayType {
  0: number | null;
  1: number | null;
  2: number | null;
  3: number | null;
  4: number | null;
  5: number | null;
  6: number | null;
}
export default function DaySelect({
  month,
  year,
}: {
  month: string;
  year: string;
}) {
  const createMonthDataSource = () => {
    const count = dayjs(`${year}-${month}-01`).daysInMonth();
    const row = [];
    const defaultWeek: dayType = {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
    };
    let newWeek = { ...defaultWeek };
    for (const x of Array.from(Array(count).keys())) {
      const day = dayjs(`${year}-${month}-${x + 1}`).day() as keyof dayType;
      newWeek[day] = x + 1;
      if (day === 6) {
        row.push(newWeek);
        newWeek = { ...defaultWeek };
      }
    }
    if (Object.values(newWeek).find((val) => val !== null)) {
      row.push(newWeek);
      newWeek = { ...defaultWeek };
    }
    return row;
  };
  const columns = [
    { dataIndex: 0, title: "Sun" },
    { dataIndex: 1, title: "Mon" },
    { dataIndex: 2, title: "Tue" },
    { dataIndex: 3, title: "Wed" },
    { dataIndex: 4, title: "Thu" },
    { dataIndex: 5, title: "Fri" },
    { dataIndex: 6, title: "Sat" },
  ];
  const columnsSource = columns.map((col, index) => ({
    ...col,
    key: col.dataIndex,
    width: 100,
    bordered: true,
    render: (value: number, record: dayType) => {
      return (
        <div style={{ height: "70px" }}>
          <p style={{ color: "blue", fontWeight: 500, fontSize: "20px" }}>
            {value}
          </p>
          {value === null ? (
            record[0] === null ? (
              <p style={{ color: "grey", fontWeight: 500, fontSize: "20px" }}>
                {dayjs(`${year}-${month}-${record[6] || 0}`)
                  .subtract(6 - index, "day")
                  .date()}
              </p>
            ) : (
              <p style={{ color: "grey", fontWeight: 500, fontSize: "20px" }}>
                {dayjs(`${year}-${month}-${record[0] || 0}`)
                  .add(index, "day")
                  .date()}
              </p>
            )
          ) : (
            <></>
          )}
        </div>
      );
    },
  }));
  return (
    <div style={{ height: "100%" }}>
      <div
        style={{
          height: "145px",
          backgroundColor: "white",
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 30px",
        }}
        className="w-max bottom-1"
      >
        <div>
          <span
            style={{
              fontSize: "24px",
              fontWeight: "500",
              color: "rgb(22,119,255)",
            }}
          >
            {dayjs(`2023-${month}-01`).format("MMMM")}
          </span>
          <span style={{ paddingRight: "10px" }}>,</span>
          <span style={{ fontSize: "16px", color: "#666" }}>{year}</span>
        </div>
        <span>
          <PlusCircleTwoTone style={{ fontSize: "32px" }} />
        </span>
      </div>

      <div className="w-max">
        <Table
          pagination={false}
          dataSource={createMonthDataSource()}
          columns={columnsSource}
        />
      </div>
    </div>
  );
}
