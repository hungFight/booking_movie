import React, { useEffect } from 'react';
import { Box, Button, Grid, Stack, Container, TextField, Typography, Autocomplete, FormLabel, RadioGroup, FormControlLabel, Radio, FormControl, useTheme, Snackbar } from '@mui/material';
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { useState } from 'react';
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { tokens } from '../../../theme';
import MuiAlert from '@mui/material/Alert';

import { Save } from "@mui/icons-material";
import "react-quill/dist/quill.snow.css";
import { DropzoneArea } from "mui-file-dropzone";
import ReactQuill from 'react-quill';


const AddSeat = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isEndTimeSelected, setIsEndTimeSelected] = useState(false);
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
        code: Yup
            .string()
            .required('Vui lòng chọn thông tin vào trường này'),
        name: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        startTime: Yup
            .number()
            .required('Vui lòng nhập thông tin vào trường này'),
        endTime: Yup
            .number()
            .required('Vui lòng nhập thông tin vào trường này')
            .test(
                'is-gioRa-greater-than-gioVao',
                'Thời gian kết thúc phải lớn hơn thời gian bắt đầu.',
                function (endTime) {
                    const { startTime } = this.parent;
                    return endTime > startTime;
                }
            ),

    });

    const initialValues = {
        code: "",
        name: "",
        startTime: "",
        endTime: "",
        premiereDate: "",
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
        if (formik.values.endTime <= formik.values.timeIn && isEndTimeSelected === true) {
            formik.setFieldError('endTime', 'Thời gian kết thúc phải lớn hơn thời gian bắt đầu');
            formik.setFieldTouched('endTime', true);
        } else {
            formik.setFieldError('endTime', ''); // Reset error when endTime is valid
        }
    }, [formik.values.endTime, formik.values.timeIn, isEndTimeSelected]);

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
                        label="Name"
                        fullWidth
                        variant="outlined"
                    />
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <TimePicker
                                    sx={{
                                        width: "100%",
                                        marginTop: '12px'
                                    }}
                                    label="Thời gian bắt đầu"
                                    name="startTime"
                                    // value={formik.values.startTime}
                                    onChange={(value) => {
                                        formik.setFieldValue('startTime', Date.parse(value));
                                    }}

                                    slotProps={{
                                        textField: {
                                            variant: "outlined",
                                            color: "info",
                                            onBlur: () => {
                                                formik.setFieldTouched('startTime', true);
                                                // formik.handleBlur();
                                            },
                                            helperText: formik.touched.startTime && formik.errors.startTime, // Sử dụng formik.touched và formik.errors
                                            error: !!(formik.touched.startTime && formik.errors.startTime) // Hiển thị error khi trường bị chạm và có lỗi
                                        },
                                    }}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <TimePicker
                                    sx={{
                                        width: "100%",
                                        marginTop: '12px'
                                    }}
                                    label="Giờ ra"
                                    name="endTime"
                                    // value={formik.values.endTime}
                                    onChange={(value) => {
                                        formik.setFieldValue('endTime', Date.parse(value));
                                        setIsEndTimeSelected(true);
                                    }}
                                    slotProps={{
                                        textField: {
                                            variant: "outlined",
                                            color: "info",
                                            onBlur: () => {
                                                formik.setFieldTouched('endTime', true);
                                                // formik.handleBlur();
                                            },
                                            helperText: formik.touched.endTime && formik.errors.endTime, // Sử dụng formik.touched và formik.errors
                                            error: !!(formik.touched.endTime && formik.errors.endTime) // Hiển thị error khi trường bị chạm và có lỗi
                                        },
                                    }}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>

                    <TextField
                        color="info"
                        error={!!(formik.touched.code && formik.errors.code)}
                        helperText={formik.touched.code && formik.errors.code}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.code}
                        name="code"
                        sx={{ marginTop: "12px" }}                     
                        label="Code"
                        fullWidth
                        variant="outlined"
                    />

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
                    Create new seat successfully!
                </MuiAlert>
            </Snackbar>
        </Box>
    )
}

export default AddSeat;