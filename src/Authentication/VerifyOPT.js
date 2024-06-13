import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as LinkD } from 'react-router-dom';

const defaultTheme = createTheme();
export default function VerifyOPT() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            phone: data.get('phone'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={ defaultTheme }>
            <Grid container component="main" sx={ { height: '100vh' } }>
                <CssBaseline />
                <Grid item xs={ 12 } sm={ 8 } md={ 4 } component={ Paper } elevation={ 6 } square>
                    <Box
                        sx={ {
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        } }
                    >
                        <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">

                        </Typography>
                        <Box component="form" noValidate onSubmit={ handleSubmit } sx={ { mt: 1 } }>
                            <TextField margin="normal" required fullWidth id="otp" label="Enter your OPT code" name="opt" autoComplete="phone" autoFocus />
                            <Button type="submit" fullWidth variant="contained" sx={ { mt: 3, mb: 2 } }>
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <LinkD to="/login" style={ { color: '#1976d2', textDecoration: 'none' } }>
                                        Turn around
                                    </LinkD>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>{ ' ' }
            </Grid>
        </ThemeProvider>
    );
}
