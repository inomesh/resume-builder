import React, { Fragment } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Content from "../content.json";
import ListItem from "./ui-components/listItem";

const Projects = () => (
  <Grid item xs={12} sx={{ mb: 10 }}>
    <Box className="iconContainer" mb={2}>
      <AssignmentIcon className="filledIcon" />
      <Typography variant={"h5"} fontWeight="bold">
        COMPANY PROJECTS
      </Typography>
    </Box>

    <Grid item xs={12}>
      {Content.projects.map((project, i) => (
        <Grid item xs={12} mb={1} key={i}>
          {i === 3 && (
            <Fragment>
              {new Array(10).fill("").map((_, i) => (
                <br key={i} />
              ))}
            </Fragment>
          )}
          <Box sx={{ position: "relative", mb: 2, width: "fit-content" }}>
            <span className="projectTitleUnderline"></span>
            <Typography variant="h6" mb={0}>
              {project.name}
            </Typography>
          </Box>

          {project.achievements.map((_, i) => {
            if (typeof _ === "object") {
              return <ListItem {...{ link: { href: _.uri, text: _.label } }} />;
            }
            return <ListItem {...{ text: _ }} />;
          })}

          {project.link && <ListItem {...{ link: project.link }} />}
        </Grid>
      ))}
    </Grid>
  </Grid>
);

export default Projects;
