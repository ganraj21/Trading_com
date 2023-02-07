import Button from "@material-ui/core/Button";
import Table from "./components/Table";
import { useState } from "react";
// import header from "./components/header";
function App() {
  const [value, setValue] = useState("gainer");

  const font = "'Poppins', sans-serif";

  return (
    <div className="App" style={{ fontFamily: font }}>
      {/* <header /> */}
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: "30px 0 0 0",
        }}
      >
        <div className="tr_btns" style={{ gap: "20px", display: "flex" }}>
          <Button
            variant="contained"
            color="primary"
            value={"gainer"}
            onClick={(e) => setValue(e.target.value)}
          >
            Gainer
          </Button>
          <Button
            variant="outlined"
            color="primary"
            value={"losers"}
            onClick={(e) => setValue(e.target.value)}
          >
            Losers
          </Button>
        </div>
        <Table value={value} />
      </div>
    </div>
  );
}

export default App;
