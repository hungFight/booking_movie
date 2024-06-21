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
import schedule from '~/restfulAPI/schedule';
import moment from 'moment';


const AddSchedule = () => {
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
        movieName: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        roomName: Yup
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
        movieName: "",
        roomName: "",
        submit: null
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, helpers) => {

            try {
                // Prepare the data for the request
                const data = {
                    price: 45,
                    start_at: moment(values.startTime).toISOString(),
                    end_at: moment(values.endTime).toISOString(),
                    code: values.code,
                    name: values.name,
                    movie_id: "2",
                    seat_id: "2"
                };
                // Make the request to create a new schedule
                const response = await schedule.create(data);

                console.log('Schedule created:', response.data);
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
                        error={ !!(formik.touched.name && formik.errors.name) }
                        helperText={ formik.touched.name && formik.errors.name }
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.name }
                        name="name"
                        sx={ { marginTop: "12px" } }
                        label="Name"
                        fullWidth
                        variant="outlined"
                    />
                    <Grid container spacing={ 1 }>
                        <Grid item xs={ 6 }>
                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                <TimePicker
                                    sx={ {
                                        width: "100%",
                                        marginTop: '12px'
                                    } }
                                    label="Thời gian bắt đầu"
                                    format="DD/MM/YYYY HH:mm:ss"
                                    name="startTime"
                                    // value={formik.values.startTime}
                                    onChange={ (value) => {
                                        formik.setFieldValue('startTime', Date.parse(value));
                                    } }

                                    slotProps={ {
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
                                    } }
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={ 6 }>
                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                <TimePicker
                                    sx={ {
                                        width: "100%",
                                        marginTop: '12px'
                                    } }
                                    label="Thời gian kết thúc"
                                    name="endTime"
                                    format="DD/MM/YYYY HH:mm:ss"


                                    // value={formik.values.endTime}
                                    onChange={ (value) => {
                                        formik.setFieldValue('endTime', Date.parse(value));
                                        setIsEndTimeSelected(true);
                                    } }
                                    slotProps={ {
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
                                    } }
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>

                    <TextField
                        color="info"
                        error={ !!(formik.touched.code && formik.errors.code) }
                        helperText={ formik.touched.code && formik.errors.code }
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.code }
                        name="code"
                        sx={ { marginTop: "12px" } }
                        label="Code"
                        fullWidth
                        variant="outlined"
                    />

                    <Autocomplete
                        sx={ { margin: "10px 0px 5px 0px" } }
                        color='info'
                        fullWidth
                        options={ ["Kinh dị", "Hành động", "Tình cảm"] }
                        value={ formik.values.movieName }
                        onChange={ (_, newValue) => {
                            formik.setFieldValue('movieName', newValue || null)
                        } }
                        renderInput={ (params) => (
                            <TextField
                                variant="outlined"
                                color='info'
                                { ...params }
                                label="Tên phim"
                                name="movieName"
                                onBlur={ formik.handleBlur }
                                error={ formik.touched.movieName && Boolean(formik.errors.movieName) }
                                helperText={ formik.touched.movieName && formik.errors.movieName }
                            />
                        ) }
                    />

                    <Autocomplete
                        sx={ { margin: "10px 0px 5px 0px" } }
                        color='info'
                        fullWidth
                        options={ ["Phòng 1", "Phòng 2", "Phòng 3"] }
                        value={ formik.values.roomName }
                        onChange={ (_, newValue) => {
                            formik.setFieldValue('roomName', newValue || null)
                        } }
                        renderInput={ (params) => (
                            <TextField
                                variant="outlined"
                                color='info'
                                { ...params }
                                label="Tên phòng"
                                name="roomName"
                                onBlur={ formik.handleBlur }
                                error={ formik.touched.roomName && Boolean(formik.errors.roomName) }
                                helperText={ formik.touched.roomName && formik.errors.roomName }
                            />
                        ) }
                    />

                    <Box
                        sx={ {
                            display: 'flex',
                            justifyContent: 'end',
                            width: '100%',
                            marginTop: '20px'
                        } }
                    >
                        <Button
                            variant="contained"
                            sx={ {
                                background: "#228B22",
                                color: "white",
                                "&: hover": {
                                    background: "#008000"
                                },
                            } }
                            startIcon={ <Save /> }
                            onClick={ formik.handleSubmit }
                        >
                            Lưu
                        </Button>
                    </Box>
                </Box>
            </Stack>
            <Snackbar
                open={ openSnackBar }
                autoHideDuration={ 1500 }
                onClose={ handleCloseSnackbar }
            >
                <MuiAlert severity='success'>
                    Create new schedule successfully!
                </MuiAlert>
            </Snackbar>
        </Box>
    )
}

export default AddSchedule;