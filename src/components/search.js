import React from "react";

const [cityName, setCityName] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  fetchData(cityName);
};

return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={cityName}
      onChange={(e) => setCityName(e.target.value)}
    />
    <button type="submit">Submit</button>
  </form>
);
