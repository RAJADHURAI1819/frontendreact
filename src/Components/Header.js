import React from "react";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
function Header(props) {
  const [a, b] = React.useState("");
  const handleChange = (e) => {
    b(e.target.value);
  };
  function onPress() {
    props.equalItem(a);
    b("");
  }
  return (
    <div className="plainBox">
      <div className="split">
        <h1 style={{ color: "whitesmoke", marginLeft: 10 }}>MPR COMPANY</h1>
        <Avatar src="mpr.png" sx={{ marginRight: 1 }} alt="Raju" />
      </div>
      <div className="search">
        <div>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Enter the movie name"
            style={{ width: 500, height: 50, marginRight: 10 }}
            onChange={handleChange}
            value={a}
          />
        </div>
        <>
          <button className="chan" onClick={onPress}>
            Submit
          </button>
        </>
      </div>
    </div>
  );
}
export default Header;
