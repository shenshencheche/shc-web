import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import PostDetail from "@/pages/PostDetail";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {},
  logout: () => {},
});

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div className="max-w-[800px] mx-auto p-4">关于页面 - 这里是简单的自我介绍</div>} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </AuthContext.Provider>
  );
}
