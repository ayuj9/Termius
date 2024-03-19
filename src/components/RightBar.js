import { Grid, IconButton, TextField, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";

export function RightBar(params) {
  return (
    <>
      <Grid container item height="100vh" direction="column">
        <Grid
          item
          lg={0.8}
          sm={1}
          xs={0.5}
          bgcolor="rgba(40,43,61,255)"
          sx={{
            borderBottom: "solid 0.1vh #a5aac0",
            // display: { xs: "none", lg: "flex", s },
          }}
        >
          <Grid container item color="white" spacing="7vw" direction="row">
            <Grid item marginLeft="2vh">
              <Typography fontWeight="600" fontSize="2vh">
                New Host
              </Typography>
              <Typography fontSize="1.5vh" color="#8D91A5">
                Personal Vault <KeyboardArrowDownIcon fontSize="1.8vh" />
              </Typography>
            </Grid>
            <Grid item>
              <IconButton>
                <MoreHorizIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <KeyboardTabIcon sx={{ color: "white" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={11.2} sm={10.4} xs={8.4} bgcolor="#1d2033" padding="3vh">
          <Grid container item direction="column" sx={{ color: "white" }}>
            <Grid
              item
              lg={1.7}
              sm={2}
              sx={{ borderRadius: "2vh" }}
              bgcolor="#282B3D"
              padding="2vh"
              // spacing="2vh"
            >
              <Grid container height="7vh" direction="column">
                <Grid item lg={1.5} fontSize="2vh" marginBottom="0.1vh">
                  Address
                </Grid>

                <Grid item sm={8} lg={2}>
                  <Grid container direction="row">
                    <Grid
                      item
                      lg={2}
                      sx={{ display: { sm: "none", xs: "none", lg: "flex" } }}
                    >
                      <ViewAgendaIcon />
                    </Grid>
                    <Grid lg={9} item>
                      <TextField
                        variant="standard"
                        size="small"
                        placeholder="IP or Hostname"
                        InputProps={{
                          disableUnderline: true,
                          style: { color: "lightgrey", fontSize: "1.8vh" },
                        }}
                        sx={{
                          width: { lg: "13vw", sm: "8vw" },
                          justifyContent: "center",
                          paddingLeft: "1vh",
                          height: "4vh",
                          borderRadius: "0.5vh",
                          border: "solid 0.01vh green",
                        }}
                        display="flex"
                        alignItems="center"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>.</Grid>
            <Grid item lg={8} sm={7}>
              <Grid
                height="30vh"
                container
                item
                direction="column"
                sx={{ color: "white", borderRadius: "2vh" }}
                bgcolor="#282B3D"
                padding="1vh"
                spacing={1}
              >
                <Grid item fontSize="2vh" fontWeight={500}>
                  General
                </Grid>
                <Grid item>
                  <TextBox label="Label" />
                </Grid>
                <Grid item>
                  <TextBox label="Parent Group" />
                </Grid>
                <Grid item>
                  <TextBox label="Tags" />
                </Grid>
                <Grid item>
                  <TextBox label="Backspace" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

function TextBox(prop) {
  return (
    <TextField
      variant="standard"
      size="small"
      placeholder={prop.label}
      InputProps={{
        disableUnderline: true,
        style: { color: "lightgrey", fontSize: "1.8vh" },
      }}
      sx={{
        width: "16vw",
        justifyContent: "center",
        paddingLeft: "1vh",
        height: "4vh",
        borderRadius: "0.5vh",
        border: "solid 0.01vh #585C70",
      }}
      display="flex"
      alignItems="center"
    />
  );
}
