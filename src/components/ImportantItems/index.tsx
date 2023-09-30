import dayjs from "dayjs";
import advanceFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advanceFormat);
export const ImportantItems = ({ date }: { date: string }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "250px",
        background: "white",
        borderRadius: "0 10px 10px 0",
      }}
    >
      <div
        style={{
          height: "145px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontWeight: 500, color: "#666", fontSize: "20px" }}>
          {dayjs(date).format("dddd")}
        </span>
        <span style={{ paddingRight: "10px" }}>,</span>
        <span>{dayjs(date).format("Do")}</span>
      </div>
      <div style={{ height: "494px", border: "1px solid #ddd" }}>
        {[
          { tag: "red", task: "Finish Assignment", time: "6 PM" },
          { tag: "red", task: "Finish Assignment", time: "6 PM" },
          { tag: "red", task: "Finish Assignment", time: "6 PM" },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              padding: "10px",
              borderTop: "1px solid #ddd",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginTop: "8px",
                justifyContent: "left",
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  width: "10px",
                  margin: "0 10px",
                  height: "10px",
                  content: "",
                  background: item.tag,
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{item.task}</span>
              <p style={{ margin: "10px 0" }}>{item.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "1px solid #ddd",
        }}
      >
        <span style={{ fontSize: "20px", fontWeight: 500, color: "blue" }}>
          Add a new note
        </span>
      </div>
    </div>
  );
};
