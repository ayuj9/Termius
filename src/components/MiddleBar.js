import { Grid, IconButton, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OtherHousesSharpIcon from "@mui/icons-material/OtherHousesSharp";
import CleaningServicesSharpIcon from "@mui/icons-material/CleaningServicesSharp";
import ViewAgendaSharpIcon from "@mui/icons-material/ViewAgendaSharp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export function MiddleBar(params) {
  const placeholderText = "Type 'ssh user@hostname -p port'to connect.. ";
  const styles = {
    root: {
      "& input::placeholder": {
        color: "lightgrey", // Set the color of the placeholder text
      },
    },
  };

  const BoxStyle = styled("div")(({ theme }) => ({
    backgroundColor: "#3e4257",
    borderRadius: "1vh",
    fontWeight: "bold",
    fontSize: "1.7vh",
    padding: "0.2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "3vh",
  }));

  const TeamBox = styled("div")(({ theme }) => ({
    backgroundColor: "#3e4257",
    borderRadius: "0.6em",
    padding: "1vh",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    color: "white",
    height: { lg: "10vh", sm: "2vh" },
    fontWeight: "600",
  }));

  const TemHead = styled("div")(({ theme }) => ({
    width: { lg: "38vh", sm: "28vh" },

    borderBottom: "solid 0.01vh #70758f ",
    fontSize: "1.8vh",
    fontWeight: "bold",
  }));

  const TeamText = styled("div")(({ theme }) => ({
    fontSize: "1.7vh",
    fontWeight: "550",
  }));

  return (
    <>
      <Grid
        container
        item
        direction="column"
        sx={{
          color: "white",
          height: "100vh",
        }}
      >
        <Grid
          item
          lg={1.6}
          md={1}
          sm={1}
          sx={{
            backgroundColor: "#282B3D",
            borderRight: "solid 0.2vh black",
            borderLeft: "solid 0.2vh black",
          }}
        >
          <Grid container direction="column">
            <Grid item padding="0.7vh">
              <TextField
                variant="standard"
                placeholder={placeholderText}
                fullWidth
                size="small"
                InputProps={{
                  disableUnderline: true,
                  sx: styles.root,
                  style: { color: "lightgrey" },
                }}
                sx={{
                  paddingLeft: "1vh",
                  maxWidth: "99%",
                  height: "5vh",
                  borderRadius: "1vh",
                  backgroundColor: " #3e4257",
                }}
                display="flex"
                alignItems="center"
              ></TextField>
            </Grid>
            {/* <Grid item lg={0.5} color="black">
              .
            </Grid> */}
            <Grid item margin="1vh">
              <Grid container paddingLeft={1} spacing={1} direction="row">
                <Grid item lg={1.6}>
                  <BoxStyle>
                    <ViewAgendaSharpIcon
                      sx={{ fontSize: "1em", marginRight: "1vh" }}
                    />
                    NEW HOST
                    <KeyboardArrowDownIcon />
                  </BoxStyle>
                </Grid>
                <Grid item lg={1.3}>
                  <BoxStyle>
                    <OtherHousesSharpIcon
                      sx={{ fontSize: "1em", marginRight: "1vh" }}
                    />
                    TERMINAL
                  </BoxStyle>
                </Grid>
                <Grid item lg={1.2}>
                  <BoxStyle>
                    <CleaningServicesSharpIcon
                      sx={{ fontSize: "1em", marginRight: "1vh" }}
                    />
                    SERIAL
                  </BoxStyle>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          lg={10.4}
          md={10.6}
          sm={10.6}
          xs={10.63}
          sx={{ backgroundColor: "#1d2033", border: "solid 0.05vh black" }}
        >
          <Grid container item spacing={6} direction="column" padding={4}>
            <Grid item lg={5} sm={3}>
              <Typography
                fontSize="2.2vh"
                fontWeight="bold"
                paddingBottom="2vh"
              >
                Team steps - 1 of 3 done
              </Typography>
              <Grid container direction="row" spacing={5}>
                <Grid item lg={4} sm={8}>
                  <TeamBox>
                    <Typography color="#8D91A5">
                      <TemHead>Enable team vault</TemHead>
                      <TeamText>
                        Set up a team vault to share data easily and securely.
                      </TeamText>
                    </Typography>
                  </TeamBox>
                </Grid>
                <Grid item lg={4} sm={8}>
                  <TeamBox>
                    <Typography>
                      <TemHead>
                        Share data
                        <IconButton sx={{ display: "none" }}>
                          <KeyboardArrowRightIcon
                            sx={{ color: "#8D91A5", paddingLeft: "22vh" }}
                          />
                        </IconButton>
                      </TemHead>
                      <TeamText>
                        Select the information you want your team to access.
                      </TeamText>
                    </Typography>
                  </TeamBox>
                </Grid>
                <Grid item lg={4} sm={8}>
                  <TeamBox>
                    <Typography>
                      <TemHead>
                        Invite team members
                        <IconButton sx={{ display: "none" }}>
                          <KeyboardArrowRightIcon
                            sx={{
                              color: "#8D91A5",
                              paddingLeft: "13vh",
                            }}
                          />
                        </IconButton>
                      </TemHead>
                      <TeamText>
                        Grant access to the shared vault to your teammates.
                      </TeamText>
                    </Typography>
                  </TeamBox>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} sm={4}>
              <Typography
                fontSize="2.2vh"
                fontWeight="bold"
                paddingBottom="2vh"
              >
                Hosts
              </Typography>
              <Grid
                item
                lg={4}
                sm={4}
                height="7vh"
                sx={{
                  backgroundColor: "#282B3D",
                  display: "flex",
                  padding: "1vh",
                  borderRadius: "1vh",
                  color: "#8D91A5",
                  fontFamily: "inherit",
                  border: "solid 0.3vh green ",
                  fontWeight: "500",
                }}
              >
                <div>
                  <Typography fontSize="2vh">
                    Enter IP or Hostname...
                  </Typography>
                  <Typography fontSize="1.4vh">ssh</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
