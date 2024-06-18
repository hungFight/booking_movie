import React, { useEffect } from 'react';
import { Box, Button, Grid, Stack, Container, TextField, Typography, Autocomplete, FormLabel, RadioGroup, FormControlLabel, Radio, FormControl, useTheme, Snackbar } from '@mui/material';
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { useState } from 'react';
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { tokens } from '../../../theme';
import MuiAlert from '@mui/material/Alert';

import { Save } from "@mui/icons-material";
import "react-quill/dist/quill.snow.css";
import { DropzoneArea } from "mui-file-dropzone";
import ReactQuill from 'react-quill';


const AddMovie = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const [files, setFiles] = useState([]);
    const [isDateSelected, setIsDateSelected] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const handleCloseSnackbar = () => {
        setOpenSnackBar(false);
    };

    const handleChange = (files) => {
        setFiles(files);
    };

    const validationSchema = Yup.object({
        movieDuration: Yup
            .string()
            .required('Vui lòng chọn thông tin vào trường này'),
        name: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        director: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        movieType: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        premiereDate: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này')
            .test(
                'is-ngayCongChieu-less-than-ngayHienTai',
                'Ngày công chiếu không được lớn hơn ngày hiện tại.',
                function (premiereDate) {
                    const currentDate = new Date();
                    return premiereDate <= currentDate;
                }
            ),
        description: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),

    });

    const initialValues = {
        movieDuration: "",
        name: "",
        director: "",
        movieType: "",
        premiereDate: "",
        description: "",
        submit: null
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, helpers) => {

            try {
                console.log("Giá trị vừa nhập vào là:", values);
                setOpenSnackBar(true);
            } catch (err) {
                console.error("Lỗi:", err);
            }
        }
    });

    useEffect(() => {
        if (formik.values.premiereDate >= Date.now() && isDateSelected === true) {
            formik.setFieldError('premiereDate', 'Ngày công chiếu không được lớn hơn ngày hiện tại');
            formik.setFieldTouched('premiereDate', true);
        } else {
            formik.setFieldError('premiereDate', ''); // Reset error when timeOut is valid
        }
    }, [formik.values.premiereDate, isDateSelected]);

    return (
        <Box m="15px">
            <Stack>
                <Box>
                    <TextField
                        color="info"
                        error={!!(formik.touched.name && formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        name="name"
                        sx={{ marginTop: "12px" }}
                        size="small"
                        label="Name"
                        fullWidth
                        variant="outlined"
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            sx={{
                                width: "100%",
                                marginTop: '12px'
                            }}
                            label="Premiere Date"
                            name="premiereDate"
                            format="DD/MM/YYYY"
                            // value={formik.values.premiereDate}
                            onChange={(value) => {
                                if (value != null) {
                                    formik.setFieldValue('premiereDate', Date.parse(value));
                                    setIsDateSelected(true)
                                } else {
                                    formik.setFieldValue('premiereDate', '');
                                }
                            }}

                            slotProps={{
                                textField: {
                                    color: 'info',
                                    variant: "outlined",
                                    size: "small",
                                    onBlur: () => {
                                        formik.setFieldTouched('premiereDate', true);
                                    },
                                    helperText: formik.touched.premiereDate && formik.errors.premiereDate, // Sử dụng formik.touched và formik.errors
                                    error: !!(formik.touched.premiereDate && formik.errors.premiereDate) // Hiển thị error khi trường bị chạm và có lỗi
                                },
                            }}
                        />
                    </LocalizationProvider>

                    <TextField
                        color="info"
                        error={!!(formik.touched.movieDuration && formik.errors.movieDuration)}
                        helperText={formik.touched.movieDuration && formik.errors.movieDuration}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.movieDuration}
                        name="movieDuration"
                        sx={{ marginTop: "12px" }}
                        size="small"
                        label="MovieDuration"
                        fullWidth
                        variant="outlined"
                    />


                    <TextField
                        color="info"
                        error={!!(formik.touched.director && formik.errors.director)}
                        helperText={formik.touched.director && formik.errors.director}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.director}
                        name="director"
                        sx={{ marginTop: "12px" }}
                        size="small"
                        label="Director"
                        fullWidth
                        variant="outlined"
                    />

                    <Autocomplete
                        sx={{ margin: "10px 0px 5px 0px" }}
                        color='info'
                        fullWidth
                        options={["Kinh dị", "Hành động", "Tình cảm"]}
                        value={formik.values.movieType}
                        onChange={(_, newValue) => {
                            formik.setFieldValue('movieType', newValue || null)
                        }}
                        renderInput={(params) => (
                            <TextField
                                variant="outlined"
                                color='info'
                                {...params}
                                label="Suất chiếu"
                                name="movieType"
                                onBlur={formik.handleBlur}
                                error={formik.touched.movieType && Boolean(formik.errors.movieType)}
                                helperText={formik.touched.movieType && formik.errors.movieType}
                            />
                        )}
                    />

                    <Box style={{ width: "100%" }}>
                        <Typography variant="h6" gutterBottom sx={{ fontSize: "12.5px", color: "#6C737F", margin: "12px 12px 12px 15px" }}>
                            Description
                        </Typography>
                        <ReactQuill
                            style={{
                                height: "100px ",
                                margin: "12px 4px 50px 4px",
                                borderRadius: "8px",
                            }}
                            onChange={(v) => formik.setFieldValue('description', v)}
                            value={formik.values.description}
                            name="description"
                            modules={{
                                toolbar: [
                                    [{ header: [1, 2, false] }],
                                    ["bold", "italic", "underline"],
                                    ["image", "code-block"],
                                ],
                            }}
                            theme="snow"
                        />
                    </Box>

                    <Box>
                        <Typography variant="h6" gutterBottom sx={{ fontSize: "12.5px", color: "#6C737F", margin: "12px 12px 12px 15px" }}>
                            Add photos
                        </Typography>
                        <DropzoneArea
                            onChange={handleChange}
                            filesLimit={6}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'end',
                            width: '100%',
                            marginTop: '20px'
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                background: "#228B22",
                                color: "white",
                                "&: hover": {
                                    background: "#008000"
                                },
                            }}
                            startIcon={<Save />}
                            onClick={formik.handleSubmit}
                        >
                            Lưu
                        </Button>
                    </Box>
                </Box>
            </Stack>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={1500}
                onClose={handleCloseSnackbar}
            >
                <MuiAlert severity='success'>
                    Create new movie successfully!
                </MuiAlert>
            </Snackbar>
        </Box>
    )
}

export default AddMovie;