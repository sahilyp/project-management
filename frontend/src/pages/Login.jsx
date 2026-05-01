import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ochvfcngorxflezcxpnn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jaHZmY25nb3J4ZmxlemN4cG5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1NDY0NDAsImV4cCI6MjA5MzEyMjQ0MH0.H8qH7Ui5vqN8hsKTgmjchoUIb4_T34Mr1rH2lxZOk3o"
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      alert(error.message);
    } else {
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/dashboard";
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />

      <button onClick={login}>Login</button>
    </div>
  );
}