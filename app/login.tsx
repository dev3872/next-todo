"use client";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useTransition, animated } from "@react-spring/web";
import { Button } from "antd";
import { useState } from "react";
export default function Login() {
  const [showList] = useState(true);

  const transitions = useTransition(
    showList
      ? [
          "Yearly Planner",
          "Create Reminders",
          "Simplified Task Management",
          "Increased Productivity",
          "Anywhere Access",
          "User-Friendly Interface",
          "Goal Tracking",
        ]
      : [],
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { duration: 800 }, // Adjust the animation duration as needed
      trail: 800,
    }
  );
  return (
    <div className="flex w-screen h-screen">
      <div className="flex justify-center items-center w-4/6 bg-yellow-100 relative">
        <span className="absolute top-5 left-10 font-extrabold uppercase text-2xl">
          Checklist
        </span>
        <div className="h-max">
          <p className="text-2xl font-bold">Register to enjoy benefits</p>
          <ul className="text-xl">
            {transitions((props, item, _, key) => (
              <animated.div style={props} key={key}>
                <li className="pt-2 flex items-center">
                  <CheckCircleOutlined className="mr-2" />
                  <span>{item}</span>
                </li>
              </animated.div>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex w-2/6 bg-32 flex-col justify-center items-center">
        <p className="text-3xl font-bold">Get Started</p>
        <div className="flex content-around pt-4">
          <Button
            type="primary"
            className="mr-3 bg-blue-600 text-white w-32 h-10 text-lg"
          >
            <a href="/api/auth/login">Login</a>
          </Button>
          <Button
            type="primary"
            className="mr-3 bg-blue-600 text-white w-32 h-10 text-xl"
          >
            <a href="/api/auth/login">Register</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
