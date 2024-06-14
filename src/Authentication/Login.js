import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Images from '~/assets/images/image';
import { Link as LinkD } from 'react-router-dom';
import authentication from '~/restfulAPI/authentication';

const defaultTheme = createTheme();
const SignInSide = ({ setCookies }) => {
    const [error, setError] = React.useState({ phone: false, pass: false });
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState('false');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading('true');
        const data = new FormData(event.currentTarget);
        const phone = data?.get('phone');
        const password = data?.get('password');
        if (!phone) setError((pre) => ({ ...pre, phone: true }));
        if (!password) setError((pre) => ({ ...pre, pass: true }));
        if (phone && password) {
            const res = await authentication.login({ phone_number: phone, password: password });
            if (res?.status) {
                setMessage(res.message);
            } else {
                setCookies('tks', res, { path: '/', secure: false, expire: 40 * 60 * 60 });
                window.location.href = '/';
            }
        }
        setLoading('false');
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={4}
                    sx={{
                        backgroundImage: `url(${Images.logoLogin})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                error={error.phone}
                                margin="normal"
                                required
                                fullWidth
                                id="phone"
                                label="Phone number"
                                type="number"
                                name="phone"
                                autoComplete="phone"
                                autoFocus
                                onChange={() => setError((pre) => ({ ...pre, phone: false }))}
                            />
                            <TextField
                                error={error.pass}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={() => setError((pre) => ({ ...pre, pass: false }))}
                            />
                            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                            <p className="text-red-500 text-sm">{message}</p>
                            <Button loading={loading} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/resetPassword" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <LinkD to="/register" style={{ color: '#1976d2', textDecoration: 'none' }}>
                                        Don't have an account? Sign Up
                                    </LinkD>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>{' '}
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={4}
                    sx={{
                        backgroundImage: `url(${Images.loginTwo})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </Grid>
        </ThemeProvider>
    );
};
export default SignInSide;
