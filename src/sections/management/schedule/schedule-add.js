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
import movie from '~/restfulAPI/movie';
import room from '~/restfulAPI/room';
import { useNavigate } from 'react-router-dom';


const AddSchedule = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isEndTimeSelected, setIsEndTimeSelected] = useState(false);
    const [rows, setRows] = useState([]);
    const [roomData, setRoomData] = useState([]);
    const handleFormSubmit = (values) => {
        console.log(values);
    };
    const navigate = useNavigate();

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
        price: Yup
            .number()
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
        price: null,
        movieName: "",
        roomName: "",
        submit: null
    };
    async function getAll() {
        const res = await movie.getAll()
        setRows(res)
        const resRoom = await room.getAll()
        setRoomData(resRoom)
    }
    React.useEffect(() => {
        getAll()
    }, [])
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, helpers) => {

            try {
                // Prepare the data for the request
                const datas = {
                    price: values.price,
                    start_at: values.startTime,
                    end_at: values.endTime,
                    code: values.code,
                    name: values.name,
                    "room_id": roomData.find(r => r.name === values.roomName).id,
                    "movie_id": rows.find(r => r.name === values.movieName).id
                };
                const response = await schedule.create(datas);

                // {
                //     "price": 45,
                //         "start_at": "2018-02-05T11:59:11.332Z",
                //             "end_at": "2018-02-05T11:59:11.332Z",
                //                 "code": "dfsavgfs123",
                //                     "name": "i don't know",
                //                         "movie_id": "2",
                //                             "seat_id": "2"

                // }
                // Make the request to create a new schedule
                navigate('/admin/management/schedule')
                console.log('Schedule created:', datas);
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
                    /> <TextField
                        color="info"
                        error={ !!(formik.touched.price && formik.errors.price) }
                        helperText={ formik.touched.price && formik.errors.price }
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.price }
                        name="price"
                        sx={ { marginTop: "12px" } }
                        label="Price"
                        fullWidth
                        variant="outlined"
                    />
                    <Grid container spacing={ 1 }>
                        <Grid item xs={ 6 }>
                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                <DatePicker
                                    sx={ {
                                        width: "100%",
                                        marginTop: '12px'
                                    } }
                                    label="Premiere Date"
                                    name="startTime"
                                    format="DD/MM/YYYY HH:mm:ss"
                                    // value={ formik.values.premiereDate }
                                    onChange={ (value) => {
                                        if (value != null) {
                                            formik.setFieldValue('startTime', Date.parse(value));
                                            setIsDateSelected(true)
                                        } else {
                                            formik.setFieldValue('startTime', '');
                                        }
                                    } }

                                    slotProps={ {
                                        textField: {
                                            color: 'info',
                                            variant: "outlined",
                                            size: "small",
                                            onBlur: () => {
                                                formik.setFieldTouched('startTime', true);
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
                                <DatePicker
                                    sx={ {
                                        width: "100%",
                                        marginTop: '12px'
                                    } }
                                    label="Premiere Date"
                                    name="endTime"
                                    format="DD/MM/YYYY HH:mm:ss"
                                    // value={ formik.values.premiereDate }
                                    onChange={ (value) => {
                                        if (value != null) {
                                            formik.setFieldValue('endTime', Date.parse(value));
                                            setIsDateSelected(true)
                                        } else {
                                            formik.setFieldValue('endTime', '');
                                        }
                                    } }

                                    slotProps={ {
                                        textField: {
                                            color: 'info',
                                            variant: "outlined",
                                            size: "small",
                                            onBlur: () => {
                                                formik.setFieldTouched('endTime', true);
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
                        options={ rows.map(r => r.name) }
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
                        options={ roomData.map(r => r.name) }
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