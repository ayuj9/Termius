import { Box, Grid, IconButton, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FolderIcon from "@mui/icons-material/Folder";
import DataObjectIcon from "@mui/icons-material/DataObject";
import HistoryIcon from "@mui/icons-material/History";
import ReplyIcon from "@mui/icons-material/Reply";
import ViewListTwoToneIcon from "@mui/icons-material/ViewListTwoTone";
import TerminalIcon from "@mui/icons-material/Terminal";
import TerminalSharpIcon from "@mui/icons-material/TerminalSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import "./LeftBar.css";

export function SideBar(params) {
  return (
    <Grid
      container
      bgcolor="rgba(40,43,61,255)"
      direction="column"
      sx={{ color: "white" }}
      height="100vh"
    >
      <Grid item lg={1} sm={1} md={1}>
        <Grid
          container
          paddingTop="20px"
          spacing="14vh"
          direction="row"
          sx={{
            paddingBottom: { lg: "12px", sm: "0px" },
            borderBottom: "solid 0.1vh #3e4257",
            paddingLeft: { lg: "14px", sm: "14px" },
          }}
        >
          <Grid item>
            <SettingsIcon sx={{ color: "white", fontSize: "20px" }} />
          </Grid>
          <Grid item sx={{ display: { sm: "none", xs: "none" } }}>
            <TerminalSharpIcon sx={{ color: "white", fontSize: "20px" }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={1} sm={1}>
        <Grid
          container
          spacing="2vh"
          paddingTop={"5px"}
          sx={{
            paddingLeft: { lg: "26px", sm: "16px" },
            borderBottom: { lg: "solid 0.1vh #3e4257", sm: "none", xs: "none" },
          }}
        >
          <Grid item>
            <CameraAltIcon />
          </Grid>
          <Grid item paddingRight={3}>
            <Typography
              sx={{ fontSize: { lg: "2.2vh", sm: "1.8vh" } }}
              fontWeight="bold"
              fontFamily="inherit"
            >
              All Vaults
            </Typography>
          </Grid>
          <Grid item sx={{ display: { md: "none" } }}>
            <KeyboardArrowDownIcon />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        sm={4}
        sx={{ display: { sm: "none", lg: "flex", xs: "none" } }}
      >
        <Grid
          container
          direction="column"
          spacing={0.1}
          sx={{
            fontWeight: "500",
            fontSize: "14px",
            display: "flex",
            paddingLeft: "3vh",
            borderBottom: "solid 0.1vh #3e4257",
          }}
        >
          <Grid item padding={1} lg={2} md={1} sm={1}>
            <Box
              sx={{
                marginRight: "17px",
                height: "34px",
                borderRadius: "10px",
                backgroundColor: " #3e4257",
                display: "flex",
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <IconButton>
                <ViewListTwoToneIcon sx={{ color: "white" }} />
              </IconButton>
              Hosts
            </Box>
          </Grid>
          <Grid item padding={1} lg={2} md={1} sm={1}>
            <div id="my-button">
              <IconButton>
                <FolderIcon sx={{ color: "white" }} />
              </IconButton>
              SFTP
            </div>
          </Grid>
          <Grid item padding={1}>
            <div id="my-button">
              <IconButton>
                <ReplyIcon sx={{ color: "white" }} />
              </IconButton>
              Port Forwarding
            </div>
          </Grid>
          <Grid item padding={1} sm={1}>
            <div id="my-button">
              <IconButton>
                <DataObjectIcon sx={{ color: "white" }} />
              </IconButton>
              Snippets
            </div>
          </Grid>
          <Grid item padding={1}>
            <div id="my-button">
              <IconButton>
                <TerminalIcon sx={{ color: "green" }} />
              </IconButton>
              Local Terminal
            </div>
          </Grid>
          <Grid item padding={1}>
            <div id="my-button">
              <IconButton>
                <HistoryIcon sx={{ color: "white" }} />
              </IconButton>
              History
              <IconButton sx={{ paddingLeft: { lg: "40px", md: "10px" } }}>
                <SearchSharpIcon sx={{ color: "white" }} />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
