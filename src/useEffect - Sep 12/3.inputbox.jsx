function NameComponent() {
  // Initialize state with an empty string
  const [name, setName] = useState("");

  // Handle input change
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <p>Your name is: {name}</p>
    </div>
  );
}

export default NameComponent;
