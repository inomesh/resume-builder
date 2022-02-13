import React from 'react'
import { Box, Typography } from '@mui/material'
import SquareIcon from '@mui/icons-material/Square';
import { theme } from '../../theme';

export default function ListItem({ icon, text, containerProps, iconProps, typographyProps }) {
    return (
        <Box className='listContainer' {...containerProps}>
            {icon || (
                <SquareIcon className='listIcon' {...iconProps} />
            )}
            <Typography paragraph mb={1} {...typographyProps}>
                {text}
            </Typography>
        </Box>
    )
}