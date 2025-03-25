// src/App.jsx
import React, { useState, useEffect } from "react";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  // 初始化时读取 localStorage 中的主题设置
  useEffect(() => {
    const savedTheme = localStorage.getItem("data-theme") || "light";
    setTheme(savedTheme);
  }, []);

  // 应用主题并保存到 localStorage
  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme);
    setCurrentTheme(theme);
  };
  return (
    <div className="min-h-[calc(100vh+192px)] bg-base-300">
      <header className="navbar bg-base-300 p-4 h-24">
        <div className="flex-1">
          <a href="/" className="text-xl font-bold">
            Vite Website Template
          </a>
        </div>
        <div className="flex-none">
          <button className="btn btn-primary">Connect</button>
        </div>
      </header>
      <div className="mx-24 shadow-2xl z-30 min-h-screen bg-base-100"></div>
      <div className="flex justify-center items-center h-24">
        <div className=""></div>
        Copyright © 2025 - All right reserved
      </div>
    </div>
  );
}

export default App;
