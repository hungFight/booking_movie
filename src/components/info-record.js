import { Box, Typography } from "@mui/material";
import { AuthContext } from "../contexts/auth-context";

// hàm này sẽ hiển thị người chỉnh sửa cuối cùng của bản ghi
const InfoRecord = () => {
    const auth = AuthContext();
    const currentDateTime = new Date().toLocaleString()

    return (
        <Box>
            <Typography
                variant="subtitle2"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '16px',
                }}
            >
                Tạo bởi:&nbsp;<Typography variant="body1">{auth.user?.name} {currentDateTime}</Typography>
            </Typography>
            <Typography
                variant="subtitle2"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '16px',
                }}
            >
                Chỉnh sửa lần cuối:&nbsp;<Typography variant="body1">{auth.user?.name} {currentDateTime}</Typography>
            </Typography>
        </Box>
    );
};

export default InfoRecord;