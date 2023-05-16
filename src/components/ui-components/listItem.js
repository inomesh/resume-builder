import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
import LinkIcon from "@mui/icons-material/Link";

export default function ListItem({
  icon,
  text,
  containerProps,
  iconProps,
  typographyProps,
  link = false,
}) {
  if (link) {
    return (
      <Box className="listContainer" {...containerProps}>
        {icon || <SquareIcon className="listIcon" {...iconProps} />}

        <Typography href={link.href} component="a">
          <Chip
            label={link.text}
            clickable
            size="small"
            avatar={<LinkIcon style={{ background: "#eee" }} />}
          />
        </Typography>
      </Box>
    );
  }
  return (
    <Box className="listContainer" {...containerProps}>
      {icon || <SquareIcon className="listIcon" {...iconProps} />}

      <Typography paragraph mb={1} {...typographyProps}>
        {text}
      </Typography>
    </Box>
  );
}

/**
 *         <a href={link.href}>
          <Typography paragraph mb={1} color="secondary">
            Click here to see: {link.text}
          </Typography>
        </a>
 */
