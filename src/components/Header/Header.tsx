import React from "react";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box } from "@mui/material";
const Header: React.FC=()=>{
    return(
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" align="right">
              
            </Typography>
            <Box>
                {/* insert setting user in futcher */}
            </Box>
          </Toolbar>
        </AppBar>
    )

}
export default Header;