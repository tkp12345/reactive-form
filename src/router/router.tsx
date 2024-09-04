import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { MainPage } from "@/page/main-page.tsx";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<>'Not Found'</>} />
      </Routes>
    </BrowserRouter>
  );
};