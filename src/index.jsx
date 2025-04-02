import React from "react";
import ReactDOM from "react-dom/client";
import DroneQuiz from "./App"; // ✅ 우리가 만든 컴포넌트 이름
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DroneQuiz />  {/* ✅ 퀴즈 앱 출력 */}
  </React.StrictMode>
);
