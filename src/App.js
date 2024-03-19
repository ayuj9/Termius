import { Grid } from "@mui/material";
import "./App.css";
import { SideBar } from "./components/LeftBar";
import { MiddleBar } from "./components/MiddleBar";
import { RightBar } from "./components/RightBar";

function App() {
  return (
    <>
      <Grid container bgcolor="pink" direction="row" height="100vh">
        <Grid item lg={1.5} md={2} sm={1} xs={2}>
          <SideBar />
        </Grid>
        <Grid item lg={8} md={8} sm={8} xs={8} height="100vh">
          <MiddleBar />
        </Grid>
        <Grid item lg={2.5} md={1} sm={3} xs={2} height="100vh">
          <RightBar />
        </Grid>
      </Grid>
      {/* </Grid> */}
    </>
  );
}

export default App;
