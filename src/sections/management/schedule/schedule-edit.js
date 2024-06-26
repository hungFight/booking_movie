import React, { useState, useEffect } from "react";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import {
    SvgIcon,
    TextField,
    Grid,
    Stack,
    Button,
    Dialog,
    IconButton,
    styled,
    DialogTitle,
    DialogContent,
    Box,
    Typography,
    Autocomplete,
    useTheme,
    Snackbar
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { tokens } from '../../../theme';
import MuiAlert from '@mui/material/Alert';

import { Save } from "@mui/icons-material";
import "react-quill/dist/quill.snow.css";
import { DropzoneArea } from "mui-file-dropzone";
import ReactQuill from 'react-quill';
import dayjs from "dayjs";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

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

export default function MovieEdit({ open, onClose, rowData }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isEndTimeSelected, setIsEndTimeSelected] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const handleCloseSnackbar = () => {
        setOpenSnackBar(false);
    };

    const handleClose = (isEvent) => {
        formik.resetForm();
        onClose();
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
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        endTime: Yup
            .string()
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
        price: "",
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
                console.log("giá trị bạn vừa nhập vào là :", values)
                formik.resetForm();
            } catch (err) {
                console.error("Lỗi")
            }
        }
    })

    useEffect(() => {
        try {
            console.log(rowData, 'rowData pre');

            formik.setValues({
                name: rowData?.name || '',
                price: rowData?.price || '',
                code: rowData?.code || '',
                startTime: rowData?.startTime,
                endTime: rowData?.endTime,
                movieName: rowData?.movieName || '',
                roomName: rowData?.roomName || '',
            })

        } catch (error) {
            console.error("Đã xảy ra lỗi . Vui lòng kiểm tra lại !!!", error);
        }
    }, [open, rowData])

    useEffect(() => {
        if (formik.values.endTime <= formik.values.timeIn && isEndTimeSelected === true) {
            formik.setFieldError('endTime', 'Thời gian kết thúc phải lớn hơn thời gian bắt đầu');
            formik.setFieldTouched('endTime', true);
        } else {
            formik.setFieldError('endTime', ''); // Reset error when endTime is valid
        }
        console.log(formik.values, 'rowData');

    }, [formik.values.endTime, formik.values.timeIn, isEndTimeSelected]);

    console.log(formik.values.premiereDate);

    return (
        <BootstrapDialog
            onClose={ () => handleClose(false) }
            open={ open }
            fullWidth
            maxWidth='sm'
            scroll={ 'body' }
        >
            <DialogTitle sx={ { m: 0, p: 2, backgroundColor: colors.blueAccent[500], color: 'white' } }>
                Edit schedule
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={ () => handleClose(false) }
                sx={ {
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    // color: (theme) => theme.palette.grey[500],
                } }
            >
                <SvgIcon fontSize="inherit">
                    <XCircleIcon />
                </SvgIcon>
            </IconButton>
            <DialogContent
                dividers
                sx={ {
                    backgroundColor: colors.primary[400],
                    color: colors.primary[100]
                } }
            >
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
                    /><TextField
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
                                    label="Start time"
                                    name="startTime"
                                    // value={ formik.values.startTime }
                                    onChange={ (value) => {
                                        if (value != null) {
                                            formik.setFieldValue('startTime', Date.parse(value));
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
                                    label="End time"
                                    name="endTime"
                                    value={ formik.values.endTime }
                                    onChange={ (value) => {
                                        if (value != null) {
                                            formik.setFieldValue('endTime', Date.parse(value));
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
            </DialogContent>
            <Snackbar
                open={ openSnackBar }
                autoHideDuration={ 1500 }
                onClose={ handleCloseSnackbar }
            >
                <MuiAlert severity='success'>
                    Edit new schedule successfully!
                </MuiAlert>
            </Snackbar>
        </BootstrapDialog>
    );
}
