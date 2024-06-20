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
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
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
    const [selectedFileLogo, setSelectedFileLogo] = useState();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [files, setFiles] = useState([]);
    const [isDateSelected, setIsDateSelected] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const handleCloseSnackbar = () => {
        setOpenSnackBar(false);
    };

    const handleChange = (files) => {
        setFiles(files);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFileLogo(URL.createObjectURL(file));
        }
    };

    const handleClose = (isEvent) => {
        formik.resetForm();
        onClose();
    };

    const validationSchema = Yup.object({
        movieDuration: Yup
            .string()
            .required('Vui lòng chọn thông tin vào trường này'),
        name: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        movieType: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        director: Yup
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
        movieType: "",
        name: "",
        director: "",
        premiereDate: "",
        endTime: "",
        description: "",
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
        console.log(rowData);
        try {
            formik.setValues({
                movieDuration: rowData?.movieDuration || '',
                name: rowData?.name || '',
                movieType: rowData?.movieType || '',
                director: rowData?.director || '',
                premiereDate: rowData?.premiereDate,
                endTime: rowData?.endTime,
                description: rowData?.description || '',
            })
        } catch (error) {
            console.error("Đã xảy ra lỗi . Vui lòng kiểm tra lại !!!", error);
        }
    }, [open, rowData])

    useEffect(() => {
        if (formik.values.premiereDate >= Date.now() && isDateSelected === true) {
            formik.setFieldError('premiereDate', 'Ngày công chiếu không được lớn hơn ngày hiện tại');
            formik.setFieldTouched('premiereDate', true);
        } else {
            formik.setFieldError('premiereDate', ''); // Reset error when timeOut is valid
        }
    }, [formik.values.premiereDate, isDateSelected]);

    console.log(formik.values.premiereDate);

    return (
        <BootstrapDialog
            onClose={ () => handleClose(false) }
            open={ open }
            fullWidth
            maxWidth='md'
            scroll={ 'body' }
        >
            <DialogTitle sx={ { m: 0, p: 2, backgroundColor: colors.blueAccent[500], color: 'white' } }>
                Edit movie
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
                        size="small"
                        label="Name"
                        fullWidth
                        variant="outlined"
                    />
                    <LocalizationProvider dateAdapter={ AdapterDayjs }>
                        <DatePicker
                            sx={ {
                                width: "100%",
                                marginTop: '12px'
                            } }
                            label="Premiere Date"
                            name="premiereDate"
                            format="DD/MM/YYYY"
                            // value={ rowData?.premiereDate }
                            onChange={ (value) => {
                                if (value != null) {
                                    formik.setFieldValue('premiereDate', Date.parse(value));
                                    setIsDateSelected(true)
                                } else {
                                    formik.setFieldValue('premiereDate', '');
                                }
                            } }
                            slotProps={ {
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
                            } }
                        /> <DatePicker
                            sx={ {
                                width: "100%",
                                marginTop: '12px'
                            } }
                            label="End time"
                            name="endTime"
                            format="DD/MM/YYYY HH:mm:ss"
                            // value={ rowData?.endTime }
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

                    <TextField
                        color="info"
                        error={ !!(formik.touched.movieDuration && formik.errors.movieDuration) }
                        helperText={ formik.touched.movieDuration && formik.errors.movieDuration }
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.movieDuration }
                        name="movieDuration"
                        sx={ { marginTop: "12px" } }
                        size="small"
                        label="MovieDuration"
                        fullWidth
                        variant="outlined"
                    />


                    <TextField
                        color="info"
                        error={ !!(formik.touched.director && formik.errors.director) }
                        helperText={ formik.touched.director && formik.errors.director }
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.director }
                        name="director"
                        sx={ { marginTop: "12px" } }
                        size="small"
                        label="Director"
                        fullWidth
                        variant="outlined"
                    />

                    <Autocomplete
                        sx={ { margin: "10px 0px 5px 0px" } }
                        color='info'
                        fullWidth
                        options={ ["Kinh dị", "Hành động", "Tình cảm"] }
                        value={ formik.values.movieType }
                        onChange={ (_, newValue) => {
                            formik.setFieldValue('movieType', newValue || null)
                        } }
                        renderInput={ (params) => (
                            <TextField
                                variant="outlined"
                                color='info'
                                { ...params }
                                label="Suất chiếu"
                                name="movieType"
                                onBlur={ formik.handleBlur }
                                error={ formik.touched.movieType && Boolean(formik.errors.movieType) }
                                helperText={ formik.touched.movieType && formik.errors.movieType }
                            />
                        ) }
                    />

                    <Box style={ { width: "100%" } }>
                        <Typography variant="h6" gutterBottom sx={ { fontSize: "12.5px", color: "#6C737F", margin: "12px 12px 12px 15px" } }>
                            Description
                        </Typography>
                        <ReactQuill
                            style={ {
                                height: "100px ",
                                margin: "12px 4px 50px 4px",
                                borderRadius: "8px",
                            } }
                            onChange={ (v) => formik.setFieldValue('description', v) }
                            value={ formik.values.description }
                            name="description"
                            modules={ {
                                toolbar: [
                                    [{ header: [1, 2, false] }],
                                    ["bold", "italic", "underline"],
                                    ["image", "code-block"],
                                ],
                            } }
                            theme="snow"
                        />
                    </Box>

                    <Box>
                        <Typography variant="h6" gutterBottom sx={ { fontSize: "12.5px", color: "#6C737F", margin: "12px 12px 12px 15px" } }>
                            Add photos
                        </Typography>
                        <DropzoneArea
                            onChange={ handleChange }
                            filesLimit={ 6 }
                        />
                    </Box>
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
                    Edit new movie successfully!
                </MuiAlert>
            </Snackbar>
        </BootstrapDialog>
    );
}
