import React, { useState } from "react";
import "../../stylesheets/login.css";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { error, login, logout, currentuser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    const res = await login(formData.email, formData.pass);
    setLoading(false);
  };

  const logoutHandler = async () => {
    await logout();
  };

  return (
    <div className="login--container">
      <div className="login--card">
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        {currentuser && <p className="success">{currentuser.email}</p>}

        <form onSubmit={submitHandler}>
          <div>
            <p>Email</p>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
            />
          </div>
          <div>
            <p>Password</p>
            <input
              value={formData.pass}
              onChange={(e) =>
                setFormData({ ...formData, pass: e.target.value })
              }
              type="password"
            />
          </div>
          <button disabled={loading}>Login</button>
        </form>
        {currentuser && (
          <button style={{ marginTop: "2rem" }} onClick={logoutHandler}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}