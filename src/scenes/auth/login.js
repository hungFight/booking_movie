import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-context';
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    InputAdornment,
    Link,
    Stack,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { tokens } from '../../theme';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';



const Login = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            submit: null,
        },
        validationSchema: Yup.object({
            username: Yup.string().max(255).required("Username is required"),
            password: Yup.string().max(255).required("password is required"),
        }),
        onSubmit: async (values, helpers) => {
            try {
                await axios.post("https://localhost:7248/Api/User/Login", {
                    username: values.username,
                    password: values.password,
                }).then((response) => {
                    if(response.status === 200) {
                        login(response.data.data.accessToken);
                        navigate('/');
                    }else {
                        alert("Username or password is incorrect");
                    }
                })

                // if (values.username === 'user' && values.password === 'pass') {
                //     login('auth-token');  // Call the login method from AuthContext
                //     navigate('/');  // Redirect to the main app
                // } else {
                //     alert("Username or password is incorrect");
                // }
            } catch (err) {
                helpers.setStatus({ success: false });
                helpers.setErrors({ submit: err.message });
                helpers.setSubmitting(false);
                alert('Invalid credentials');
            }
        },
    });

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    //   const handleQRPopupClose = () => {
    //     setShowQRPopup(false);
    //   };

    // const handleLogin = () => {
    //     // Replace with actual login logic
    //     if (username === 'user' && password === 'pass') {
    //         login('your-auth-token');  // Call the login method from AuthContext
    //         navigate('/');  // Redirect to the main app
    //     } else {
    //         alert('Invalid credentials');
    //     }
    // };

    return (
        <>
            <Stack
                sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    backgroundColor: colors.blueAccent[500]
                }}
            >
                <Box
                    sx={{
                        backgroundColor: colors.grey[900],
                        display: "flex",
                        borderRadius: "20px",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "80%",
                        height: "85%",
                        overflow: 'hidden'
                    }}
                >
                    <Box
                        width="50%"
                        height="100%"
                    >
                        <img
                            alt="background"
                            width="100%"
                            src={`../../assets/background.jpg`}
                            style={{
                                objectFit: 'cover', // Đảm bảo hình ảnh bao phủ toàn bộ Box
                                width: '100%',
                                height: '100%',
                                borderRadius: 'inherit', // Đảm bảo hình ảnh tuân theo borderRadius của Box
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            px: 9,
                            // pt: 10,
                            width: "50%",
                        }}
                    >
                        <div>
                            <Stack spacing={1} sx={{ mb: 3 }}>
                                <Typography
                                    variant="h3"
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                    style={{
                                        color: colors.blueAccent[300],
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Login
                                </Typography>
                            </Stack>
                            <form noValidate onSubmit={formik.handleSubmit}>
                                <Stack spacing={3}>
                                    <TextField
                                        error={!!(formik.touched.username && formik.errors.username)}
                                        fullWidth
                                        helperText={formik.touched.username && formik.errors.username}
                                        label="Username"
                                        name="username"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="text"
                                        value={formik.values.username}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        edge="end"
                                                    >
                                                        <PersonIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <TextField
                                        error={!!(formik.touched.password && formik.errors.password)}
                                        fullWidth
                                        helperText={formik.touched.password && formik.errors.password}
                                        label="Password"
                                        name="password"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type={showPassword ? "text" : "password"}
                                        value={formik.values.password}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={handleTogglePasswordVisibility}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                        <FormControlLabel
                                            control={<Checkbox defaultChecked size='small' />}
                                            label="Remember me"
                                            sx={{
                                                color: 'GrayText',
                                                fontSize: '15px'
                                            }}
                                        />
                                        <Link
                                            underline="hover"
                                            variant="subtitle2"
                                            fontWeight={'bold'}
                                        >
                                            Forgot password
                                        </Link>
                                    </Box>
                                </Stack>
                                {formik.errors.submit && (
                                    <Typography color="error" sx={{ mt: 3 }} variant="body2">
                                        {formik.errors.submit}
                                    </Typography>
                                )}
                                <Button
                                    fullWidth
                                    size="large"
                                    sx={{ mt: 3, backgroundColor: '#1C2536' }}
                                    type="submit"
                                    variant="contained"
                                    style={{
                                        background: colors.blueAccent[300],
                                        borderRadius: 20
                                    }}
                                >
                                    Login
                                </Button>
                                <Typography
                                    mt={2}
                                    color="text.secondary"
                                    variant="body2"
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                >
                                    Don't have an account?
                                    <Link
                                        // component={NextLink}
                                        href="/register"
                                        underline="hover"
                                        variant="subtitle2"
                                        fontWeight={'bold'}
                                    >
                                        Register
                                    </Link>
                                </Typography>
                            </form>
                        </div>
                    </Box>
                </Box>
            </Stack>
        </>
    );
};

export default Login;
