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


const AddPromotion = () => {
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
        promotionName: Yup
            .string()
            .required('Vui lòng chọn thông tin vào trường này'),
        percent: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        quantity: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        type: Yup
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
        rankCustomerName: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        description: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),

    });

    const initialValues = {
        promotionName: "",
        percent: "",
        quantity: "",
        type: "",
        startTime: "",
        endTime: "",
        rankCustomerName: "",
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
                        error={!!(formik.touched.promotionName && formik.errors.promotionName)}
                        helperText={formik.touched.promotionName && formik.errors.promotionName}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.promotionName}
                        name="promotionName"
                        sx={{ marginTop: "12px" }}
                        label="PromotionName"
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
                                    label="Thời gian kết thúc"
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
                        error={!!(formik.touched.percent && formik.errors.percent)}
                        helperText={formik.touched.percent && formik.errors.percent}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.percent}
                        name="percent"
                        sx={{ marginTop: "12px" }}
                        label="Percent"
                        fullWidth
                        variant="outlined"
                        type='number'
                    />

                    <TextField
                        color="info"
                        error={!!(formik.touched.quantity && formik.errors.quantity)}
                        helperText={formik.touched.quantity && formik.errors.quantity}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.quantity}
                        name="quantity"
                        sx={{ marginTop: "12px" }}
                        label="Quantity"
                        fullWidth
                        variant="outlined"
                        type='number'
                    />

                    <Autocomplete
                        sx={{ margin: "10px 0px 5px 0px" }}

                        fullWidth
                        options={["Đồng", "Bạc", "Vàng"]}
                        value={formik.values.rankCustomerName}
                        onChange={(_, newValue) => {
                            formik.setFieldValue('rankCustomerName', newValue || null)
                        }}
                        renderInput={(params) => (
                            <TextField
                                variant="outlined"
                                color='info'
                                {...params}
                                label="Hạng khách hàng "
                                name="rankCustomerName"
                                onBlur={formik.handleBlur}
                                error={formik.touched.rankCustomerName && Boolean(formik.errors.rankCustomerName)}
                                helperText={formik.touched.rankCustomerName && formik.errors.rankCustomerName}
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

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'end',
                            width: '100%',
                            marginTop: '20px',
                            paddingTop: '10px'
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
                    Create new promotion successfully!
                </MuiAlert>
            </Snackbar>
        </Box>
    )
}

export default AddPromotion;