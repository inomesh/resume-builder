import { Grid, Avatar, Box, Typography, Card } from "@mui/material";
import React, { Fragment } from "react";
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Skills from "./components/skills";
import Projects from './components/projects'
import WorkExperience from "./components/workExperience";
import Certificates from "./components/certificates";
import Languages from "./components/languages";
import Interests from "./components/interests";
import Education from "./components/education";

class App extends React.Component {
  render() {
    return (
      <Grid container spacing={2} m={2}>

        {/* intro section */}
        <Grid item xs={12}>

          <Grid container spacing={4}>

            <Grid item xs={7}>
              <Grid container style={{ display: "flex", justifyContent: 'space-between' }}>

                <Grid item xs={2}>
                  <Box className='profileImgContainer'>
                    <Avatar alt="Nomesh Sehgal" size='large' src="/static/me.jpeg" sx={{ width: '146px', height: '146px', borderRadius: '50%' }} />
                  </Box>
                </Grid>

                <Grid item xs={9}>
                  <Typography variant="h3">
                    Nomesh Sehgal
                  </Typography>
                  <Typography variant="h5">
                    MERN Stack Developer
                  </Typography>
                  <Typography paragraph>
                    I enjoy learning a lot and want to work with a company where I can apply new things, ideas, have the flexibility to play with them, and learn more.
                  </Typography>
                </Grid>

              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Card elevation={0}>

                {[
                  {
                    label: 'nomesh.sehgal@gmail.com',
                    link: 'mailto:nomesh.sehgal@gmail.com',
                    icon: <EmailIcon />
                  },
                  {
                    label: '8376960433',
                    link: "tel:8376960433",
                    icon: <PhoneAndroidIcon />
                  },
                  {
                    label: 'New Delhi, India',
                    link: false,
                    icon: <LocationOnIcon />
                  },
                  {
                    label: 'https://www.linkedin.com/in/inomesh',
                    link: "https://www.linkedin.com/in/inomesh",
                    icon: <LinkedInIcon />
                  },
                  {
                    label: 'https://github.com/inomesh',
                    link: "https://github.com/inomesh",
                    icon: <GitHubIcon />
                  },
                ].map((obj, i) => (
                  <Grid item key={i} xs={12}>
                    <Box className='iconContainer'>
                      {obj.link ? (
                        <Fragment>
                          {obj.icon}
                          <a href={obj.link}>
                            <Typography paragraph ml={2} mb={0}>
                              {obj.label}
                            </Typography>
                          </a>
                        </Fragment>
                      ) : (
                        <Fragment>
                          {obj.icon}
                          <Typography paragraph ml={2} mb={0}>
                            {obj.label}
                          </Typography>
                        </Fragment>
                      )}
                    </Box>
                  </Grid>
                ))}

              </Card>
            </Grid>

          </Grid>

        </Grid>

        {/* second section */}
        <Grid item xs={12}>

          <Grid container spacing={4}>

            <Grid item xs={7}>

              <Grid item xs={12}>
                <Skills />
              </Grid>

              <Grid item xs={12}>
                <Projects />
              </Grid>

              <Grid item xs={12}>
                <Education />
              </Grid>

            </Grid>

            <Grid item xs={4}>
              <Card elevation={0} style={{ height: '100%' }}>

                <WorkExperience />

                <Certificates />

                <Languages />

                <Interests />
              </Card>
            </Grid>

          </Grid>

        </Grid>

      </Grid>
    )
  }
}

export default App;
