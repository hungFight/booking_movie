import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link as LinkD } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Images from '../assets/images/image';
import { FormControlLabel, FormGroup, Paper } from '@mui/material';
import authentication from '~/restfulAPI/authentication';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    const [error, setError] = React.useState({ userName: false, name: false, phone: false, email: false, pass: false, rePass: false });
    const [showPass, setShowPass] = React.useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const phone = data.get('phone');
        const userName = data.get('userName');
        const name = data.get('name');
        const password = data.get('password');
        const rePass = data.get('rePass');

        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        if (!email) setError((pre) => ({ ...pre, email: true }));
        if (!phone) setError((pre) => ({ ...pre, phone: true }));
        if (!userName) setError((pre) => ({ ...pre, userName: true }));
        if (!password) setError((pre) => ({ ...pre, pass: true }));
        if (!rePass) setError((pre) => ({ ...pre, rePass: true }));
        if (!name) setError((pre) => ({ ...pre, name: true }));
        if (password !== rePass) setError((pre) => ({ ...pre, name: true }));
        if (email && phone && password === rePass && userName && password && name && rePass) {
            const res = await authentication.register({
                email,
                phone_number: phone,
                user_name: userName,
                password,
                name,
            });
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={1}
                    md={4}
                    sx={{
                        backgroundImage: `url(${Images.register})`,
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
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        error={error.userName}
                                        required
                                        onChange={(e) => setError((pre) => ({ ...pre, userName: false }))}
                                        fullWidth
                                        id="userName"
                                        label="User Name"
                                        name="userName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        onChange={(e) => setError((pre) => ({ ...pre, name: false }))}
                                        error={error.name}
                                        fullWidth
                                        id="Name"
                                        label="Name"
                                        name="name"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        onChange={(e) => setError((pre) => ({ ...pre, phone: false }))}
                                        error={error.phone}
                                        fullWidth
                                        id="phone"
                                        label="Phone Number"
                                        name="phone"
                                        autoComplete="phone"
                                        type="number"
                                    />
                                </Grid>{' '}
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        onChange={(e) => setError((pre) => ({ ...pre, email: false }))}
                                        error={error.email}
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        onChange={(e) => setError((pre) => ({ ...pre, pass: false }))}
                                        error={error.pass}
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type={`${showPass ? 'text' : 'password'}`}
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>{' '}
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        onChange={(e) => setError((pre) => ({ ...pre, rePass: false }))}
                                        error={error.rePass}
                                        fullWidth
                                        name="rePass"
                                        label="Enter your password again"
                                        type={`${showPass ? 'text' : 'password'}`}
                                        id="rePass"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <div className="w-full flex justify-end">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Show password" labelPlacement="start" onChange={(e) => setShowPass(e.target.checked)} />
                                    </FormGroup>
                                </div>
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <LinkD to="/login" style={{ color: '#1976d2', textDecoration: 'none' }}>
                                        Already have an account? Sign in
                                    </LinkD>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={false}
                    sm={1}
                    md={4}
                    sx={{
                        backgroundImage: `url(${Images.registerTwo})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </Grid>
            {/* <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <LinkD to="/login" style={{ color: '#1976d2', textDecoration: 'none' }}>
                                    Already have an account? Sign in
                                </LinkD>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container> */}
        </ThemeProvider>
    );
}
