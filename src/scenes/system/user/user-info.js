import { Avatar, Box, Button, Container, Grid, Stack, TextField, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tokens } from '../../../theme';
import React from 'react';
import Header from '../../../components/Header';
import { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckIcon from '@mui/icons-material/Check';
import * as Yup from "yup";
import { useFormik } from 'formik';

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

const UserInfo = () => {
    const [selectedFile, setSelectedFile] = useState();
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(URL.createObjectURL(file));
        }
    };
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const validationSchema = Yup.object({
        name: Yup
            .string()
            .required('Please enter information in this field'),
        userName: Yup
            .string()
            .required('Please enter information in this field'),
        email: Yup
            .string()
            .required('Please enter information in this field '),
        phoneNumber: Yup
            .string()
            .required('Please enter information in this field'),
        dateOfBirth: Yup
            .string()
            .required('Please enter information in this field'),
        address: Yup
            .string()
            .required('Please enter information in this field'),
    });

    const initialValues = {
        name: "",
        userName: "",
        email: "",
        phoneNumber: "",
        address: "",
        dateOfBirth: "",
        submit: null
    };

    // const updateUser = async (formData) => {
    //     try {
    //         const response = await axios.post('http://a.csoftlife.com/api/v1/LandingPageApi/LandingPageApi/insert?isForListInlineOrListCrud=false', formData);
    //         console.log("check data", response);
    //         return response;
    //     } catch (error) {
    //         console.error("Lỗi:", error);
    //         return { error };
    //     }
    // };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, helpers) => {
            try {
                console.log(values);
                // const response = await addLandingPage(formData);
                // if (response && response.data) {
                //     console.log("Thành công:", response.data);
                // } else {
                //     console.error("Lỗi:", response && response.error);
                // }
            } catch (err) {
                console.error("Lỗi:", err);
            }
        }
    });

    return (
        <Stack mt={5}>
            <Container>
                <Header title="My Profile" />
                <Grid container mt={2} spacing={4}>
                    <Grid item sm={3}>
                        <Typography variant='h3' mb={2} ml={8}>Profile</Typography>
                        {/* <img
                            src="../../assets/user.jpg"
                            alt="user-profile"
                            className="w-52 h-52 rounded-full"
                        /> */}

                        <Avatar
                            sx={{
                                width: "200px",
                                height: "200px"
                            }}
                            src="../../assets/user.jpg"
                            alt='user-profile'
                        ></Avatar>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'start',
                                width: '100%',
                                marginLeft: "40px",
                                marginTop: "10px"
                            }}

                        >
                            <Button
                                component="label"
                                variant="contained"
                                role={undefined}
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                                size='medium'
                                color="info"

                            >
                                Upload file
                                <VisuallyHiddenInput
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item sm={9}>
                        <Grid container spacing={5}>
                            <Grid item sm={6}>
                                <Typography variant='h5' mb={1}>Name</Typography>
                                {/* <TextField label="Name" variant="outlined" fullWidth /> */}
                                <TextField
                                    error={!!(formik.touched.name && formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    name="name"
                                    placeholder="Name"
                                    fullWidth
                                    variant="outlined"
                                    color="secondary"
                                />
                                <Typography variant='h5' mb={1} mt={2}>Phone Number</Typography>
                                <TextField
                                    error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.phoneNumber}
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    fullWidth
                                    variant="outlined"
                                    color="secondary"
                                />
                                <Typography variant='h5' mb={1} mt={2}>Date Of Birth</Typography>
                                <TextField
                                    error={!!(formik.touched.dateOfBirth && formik.errors.dateOfBirth)}
                                    helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.dateOfBirth}
                                    name="dateOfBirth"
                                    placeholder="Date of Birth"
                                    fullWidth
                                    variant="outlined"
                                    color="secondary"
                                />

                            </Grid>
                            <Grid item sm={6}>
                                <Typography variant='h5' mb={1}>UserName</Typography>
                                <TextField
                                    error={!!(formik.touched.userName && formik.errors.userName)}
                                    helperText={formik.touched.userName && formik.errors.userName}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.userName}
                                    name="userName"
                                    placeholder="UserName"
                                    fullWidth
                                    variant="outlined"
                                    color="secondary"
                                />
                                <Typography variant='h5' mb={1} mt={2}>Email</Typography>
                                <TextField
                                    error={!!(formik.touched.email && formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    name="email"
                                    placeholder="Email"
                                    fullWidth
                                    variant="outlined"
                                    color="secondary"
                                />
                                <Typography variant='h5' mb={1} mt={2}>Address</Typography>
                                <TextField
                                    error={!!(formik.touched.address && formik.errors.address)}
                                    helperText={formik.touched.address && formik.errors.address}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                    name="address"
                                    placeholder="Address"
                                    fullWidth
                                    variant="outlined"
                                    color="secondary"
                                />
                            </Grid>
                        </Grid>

                        <Box
                            mt={5}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Button
                                // color='success'
                                variant="contained"
                                sx={{
                                    color: colors.grey[100],
                                    backgroundColor: colors.greenAccent[700],
                                    '&:hover': {
                                        backgroundColor: colors.greenAccent[800], // Màu khi hover vào
                                    },
                                }}
                                startIcon={<CheckIcon />}
                                size='large'
                                onClick={formik.handleSubmit}
                            >
                                Save
                            </Button>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </Stack>

    )
}

export default UserInfo;