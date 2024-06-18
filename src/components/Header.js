import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useStateContext } from "../contexts/theme-context";

const Header = ({ title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { currentColor } = useStateContext(); 
    return (
        <Box>
            <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                // sx={{ mb: "5px"}}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={currentColor}>{subtitle}</Typography>
        </Box>
    )
}

export default Header;