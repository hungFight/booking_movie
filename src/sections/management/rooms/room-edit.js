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
import room from "~/restfulAPI/room";
import cinema from "~/restfulAPI/cinema";
import { useNavigate } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function RoomEdit({ getAll, open, onClose, rowData }) {
    const theme = useTheme();
    const navigate = useNavigate()
    const colors = tokens(theme.palette.mode);
    const [isEndTimeSelected, setIsEndTimeSelected] = useState(false);
    const [rows, setRows] = useState([])
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
        type: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        capacity: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        cinemaName: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        description: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),

    });

    const initialValues = {
        code: "",
        name: "",
        type: "",
        capacity: "",
        cinemaName: "",
        description: "",
        submit: null
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, helpers) => {
            try {
                const res = await room.update(rowData.id, {
                    "capacity": values.capacity,
                    "type": values.type,
                    "description": values.description,
                    "name": values.name,
                    "cinema_id": rows.find(r => r.nameOfCinema === values.cinemaName).id
                })
                if (res) {
                    getAll()
                    handleClose()
                } else {

                }
                console.log("giá trị bạn vừa nhập vào là :", values)
            } catch (err) {
                console.error("Lỗi")
            }
        }
    })
    async function getAllCinema() {
        const res = await cinema.getAll()
        setRows(res.map((r, index) => {
            return { ...r, stt: index + 1 }
        }))
    }
    React.useEffect(() => {
        getAllCinema()
    }, [])
    useEffect(() => {
        try {
            formik.setValues({
                name: rowData?.name || '',
                code: rowData?.code || '',
                type: rowData?.type,
                capacity: rowData?.capacity || '',
                cinemaName: rowData?.cinemaName || '',
                description: rowData?.description || '',
            })
        } catch (error) {
            console.error("Đã xảy ra lỗi . Vui lòng kiểm tra lại !!!", error);
        }
    }, [open, rowData])

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
                Edit room
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
                    />

                    <TextField
                        color="info"
                        error={ !!(formik.touched.type && formik.errors.type) }
                        helperText={ formik.touched.type && formik.errors.type }
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.type }
                        name="type"
                        sx={ { marginTop: "12px" } }
                        label="Type"
                        fullWidth
                        variant="outlined"
                    />

                    <TextField
                        color="info"
                        error={ !!(formik.touched.capacity && formik.errors.capacity) }
                        helperText={ formik.touched.capacity && formik.errors.capacity }
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.capacity }
                        name="capacity"
                        sx={ { marginTop: "12px" } }
                        label="Capacity"
                        fullWidth
                        variant="outlined"
                        type="number"
                    />


                    <Autocomplete
                        sx={ { margin: "10px 0px 5px 0px" } }
                        color='info'
                        fullWidth
                        options={ rows.map(r => r.nameOfCinema) }
                        value={ formik.values.cinemaName }
                        onChange={ (_, newValue) => {
                            formik.setFieldValue('cinemaName', newValue || null)
                        } }
                        renderInput={ (params) => (
                            <TextField
                                variant="outlined"
                                color='info'
                                { ...params }
                                label="Cinema Name"
                                name="cinemaName"
                                onBlur={ formik.handleBlur }
                                error={ formik.touched.cinemaName && Boolean(formik.errors.cinemaName) }
                                helperText={ formik.touched.cinemaName && formik.errors.cinemaName }
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

                    <Box
                        sx={ {
                            display: 'flex',
                            justifyContent: 'end',
                            width: '100%',
                            marginTop: '20px',
                            paddingBottom: '10px'
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
                    Edit new room successfully!
                </MuiAlert>
            </Snackbar>
        </BootstrapDialog>
    );
}
