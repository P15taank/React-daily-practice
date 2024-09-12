import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({
    email: false,
    password: false,
  });

  const onemailChange = (e) => {
    const { name, value } = e.target;

    setEmail((prev) => ({ ...prev, [name]: value }));
  };

  const onpasswordChange = (e) => {
    const { name, value } = e.target;

    setPassword((prev) => ({ ...prev, [name]: value }));
  };

  //Validation
  const onsubmit = () => {
    if (err.email === "" || err.email.length < 3) {
      // "", null , undefined , NaN, false
      setErr((prev) => ({ ...prev, email: true }));
      return <p>Invalid email</p>;
    } else {
      setErr((prev) => ({ ...prev, email: false }));
    }
  };

  //UI
  return (
    <div>
      <h1>Sign in</h1>
      {/* Email input box */}
      <input
        name="Email"
        type="email"
        value={email}
        placeholder="Enter emajl here"
        onChange={onemailChange}
      />
      {/* Password input box */}
      <input
        name="title"
        type="text"
        value={password}
        placeholder="Enter Password here"
        onChange={onpasswordChange}
      />

      <button onClick={onsubmit}>Submit</button>
    </div>
  );
};

export default LoginForm;
