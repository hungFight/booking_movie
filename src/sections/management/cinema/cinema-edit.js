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

export default function CinemaEdit({ open, onClose, rowData }) {
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
        nameOfCinema: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        address: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        description: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),

    });

    const initialValues = {
        code: "",
        nameOfCinema: "",
        address: "",
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
        try {
            formik.setValues({
                nameOfCinema: rowData?.nameOfCinema || '',
                code: rowData?.code || '',
                address: rowData?.address,
                description: rowData?.description || '',
            })
        } catch (error) {
            console.error("Đã xảy ra lỗi . Vui lòng kiểm tra lại !!!", error);
        }
    }, [open, rowData])


    return (
        <BootstrapDialog
            onClose={() => handleClose(false)}
            open={open}
            fullWidth
            maxWidth='sm'
            scroll={'body'}
        >
            <DialogTitle sx={{ m: 0, p: 2, backgroundColor: colors.blueAccent[500], color: 'white' }}>
                Edit cinema
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={() => handleClose(false)}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    // color: (theme) => theme.palette.grey[500],
                }}
            >
                <SvgIcon fontSize="inherit">
                    <XCircleIcon />
                </SvgIcon>
            </IconButton>
            <DialogContent
                dividers
                sx={{
                    backgroundColor: colors.primary[400],
                    color: colors.primary[100]
                }}
            >
                <Box>
                    <TextField
                        color="info"
                        error={!!(formik.touched.nameOfCinema && formik.errors.nameOfCinema)}
                        helperText={formik.touched.nameOfCinema && formik.errors.nameOfCinema}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.nameOfCinema}
                        name="nameOfCinema"
                        sx={{ marginTop: "12px" }}
                        label="NameOfCinema"
                        fullWidth
                        variant="outlined"
                    />

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

                    <TextField
                        color="info"
                        error={!!(formik.touched.address && formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        name="address"
                        sx={{ marginTop: "12px" }}
                        label="Address"
                        fullWidth
                        variant="outlined"
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
            </DialogContent>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={1500}
                onClose={handleCloseSnackbar}
            >
                <MuiAlert severity='success'>
                    Edit new cinema successfully!
                </MuiAlert>
            </Snackbar>
        </BootstrapDialog>
    );
}
