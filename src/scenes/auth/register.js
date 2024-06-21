import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../contexts/auth-context';
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
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Register = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            email: '',
            username: '',
            password: '',
            submit: null
        },
        validationSchema: Yup.object({
            phoneNumber: Yup
                .string()
                .required("Phone Number is required"),
            email: Yup
                .string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
            username: Yup
                .string()
                .max(255)
                .required('Name is required'),
            password: Yup
                .string()
                .max(255)
                .required('Password is required')
        }),
        onSubmit: async (values, helpers) => {
            try {
                /*
                    await axios.post("http://localhost:8080/api/v1/users/login", {
                        name: values.name
                        email: values.email,
                        password: values.password,
                    }).then((response) => {
                        console.log(response);
                    })
                */
                alert("Registered successfully!")
                navigate('/admin/login');
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


    return (
        <>
            <Box
                sx={ {
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    backgroundColor: colors.blueAccent[500]
                } }
            >
                <Box
                    sx={ {
                        backgroundColor: colors.grey[900],
                        display: "flex",
                        borderRadius: "20px",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "80%",
                        height: "85%",
                        overflow: 'hidden'
                    } }
                >
                    <Box
                        width="50%"
                        height="100%"
                    >
                        <img
                            alt="background"
                            src={ `../../assets/background.jpg` }
                            style={ {
                                objectFit: 'cover', // Đảm bảo hình ảnh bao phủ toàn bộ Box
                                width: '100%',
                                height: '100%',
                                borderRadius: 'inherit', // Đảm bảo hình ảnh tuân theo borderRadius của Box
                            } }
                        />
                    </Box>
                    <Box
                        sx={ {
                            px: 9,
                            width: "50%",
                        } }
                    >
                        <div>
                            <Stack spacing={ 1 } sx={ { mb: 3 } }>
                                <Typography
                                    variant="h3"
                                    display={ 'flex' }
                                    alignItems={ 'center' }
                                    justifyContent={ 'center' }
                                    style={ {
                                        color: colors.blueAccent[300],
                                        fontWeight: 'bold'
                                    } }
                                >
                                    Registration
                                </Typography>
                            </Stack>
                            <form noValidate onSubmit={ formik.handleSubmit }>
                                <Stack spacing={ 2 }>
                                    <TextField
                                        error={ !!(formik.touched.phoneNumber && formik.errors.phoneNumber) }
                                        fullWidth
                                        helperText={ formik.touched.phoneNumber && formik.errors.phoneNumber }
                                        label="PhoneNumber"
                                        name="phoneNumber"
                                        onBlur={ formik.handleBlur }
                                        onChange={ formik.handleChange }
                                        type="text"
                                        value={ formik.values.phoneNumber }
                                        InputProps={ {
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        edge="end"
                                                    >
                                                        <PhoneIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        } }
                                    />
                                    <TextField
                                        error={ !!(formik.touched.email && formik.errors.email) }
                                        fullWidth
                                        helperText={ formik.touched.email && formik.errors.email }
                                        label="Email"
                                        name="email"
                                        onBlur={ formik.handleBlur }
                                        onChange={ formik.handleChange }
                                        type="text"
                                        value={ formik.values.email }
                                        InputProps={ {
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        edge="end"
                                                    >
                                                        <EmailIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        } }
                                    />
                                    <TextField
                                        error={ !!(formik.touched.username && formik.errors.username) }
                                        fullWidth
                                        helperText={ formik.touched.username && formik.errors.username }
                                        label="Username"
                                        name="username"
                                        onBlur={ formik.handleBlur }
                                        onChange={ formik.handleChange }
                                        type="text"
                                        value={ formik.values.username }
                                        InputProps={ {
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        edge="end"
                                                    >
                                                        <PersonIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        } }
                                    />
                                    <TextField
                                        error={ !!(formik.touched.password && formik.errors.password) }
                                        fullWidth
                                        helperText={ formik.touched.password && formik.errors.password }
                                        label="Password"
                                        name="password"
                                        onBlur={ formik.handleBlur }
                                        onChange={ formik.handleChange }
                                        type={ showPassword ? "text" : "password" }
                                        value={ formik.values.password }
                                        InputProps={ {
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={ handleTogglePasswordVisibility }
                                                        edge="end"
                                                    >
                                                        { showPassword ? <VisibilityOff /> : <Visibility /> }
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        } }
                                    />

                                    <Box display={ 'flex' } alignItems={ 'center' } justifyContent={ 'space-between' }>
                                        <FormControlLabel
                                            control={ <Checkbox defaultChecked size='small' /> }
                                            label="I agree to the terms & conditions"
                                        />
                                    </Box>
                                </Stack>
                                { formik.errors.submit && (
                                    <Typography color="error" sx={ { mt: 3 } } variant="body2">
                                        { formik.errors.submit }
                                    </Typography>
                                ) }
                                <Button
                                    fullWidth
                                    size="large"
                                    sx={ { mt: 3, backgroundColor: '#1C2536' } }
                                    type="submit"
                                    variant="contained"
                                    style={ {
                                        background: colors.blueAccent[300],
                                        borderRadius: 20
                                    } }
                                >
                                    Register
                                </Button>
                                <Typography
                                    mt={ 2 }
                                    color="text.secondary"
                                    variant="body2"
                                    display={ 'flex' }
                                    alignItems={ 'center' }
                                    justifyContent={ 'center' }
                                >
                                    Already have an account?
                                    <Link
                                        // component={NextLink}
                                        href="/login"
                                        underline="hover"
                                        variant="subtitle2"
                                        fontWeight={ 'bold' }
                                    >
                                        Login
                                    </Link>
                                </Typography>
                            </form>
                        </div>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Register;
