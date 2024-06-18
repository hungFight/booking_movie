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
        scheduleName: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        seatNumber: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        priceTicket: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),

    });

    const initialValues = {
        code: "",
        scheduleName: "",
        seatNumber: "",
        priceTicket: "",
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
                scheduleName: rowData?.scheduleName || '',
                code: rowData?.code || '',
                seatNumber: rowData?.seatNumber,
                priceTicket: rowData?.priceTicket || '',
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
                Edit ticket
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
                        error={!!(formik.touched.priceTicket && formik.errors.priceTicket)}
                        helperText={formik.touched.priceTicket && formik.errors.priceTicket}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.priceTicket}
                        name="priceTicket"
                        sx={{ marginTop: "12px" }}
                        label="Price Ticket"
                        fullWidth
                        variant="outlined"
                        type='number'
                    />

                    <Autocomplete
                        sx={{ margin: "10px 0px 5px 0px" }}
                        color='info'
                        fullWidth
                        options={["Suất chiếu 1", "Suất chiếu 2", "Suất chiếu 3"]}
                        value={formik.values.scheduleName}
                        onChange={(_, newValue) => {
                            formik.setFieldValue('scheduleName', newValue || null)
                        }}
                        renderInput={(params) => (
                            <TextField
                                variant="outlined"
                                color='info'
                                {...params}
                                label="Suất chiếu"
                                name="scheduleName"
                                onBlur={formik.handleBlur}
                                error={formik.touched.scheduleName && Boolean(formik.errors.scheduleName)}
                                helperText={formik.touched.scheduleName && formik.errors.scheduleName}
                            />
                        )}
                    />

                    <Autocomplete
                        sx={{ margin: "10px 0px 5px 0px" }}

                        fullWidth
                        options={["Ghế số 1", "Ghế số 2", "Ghế số 3"]}
                        value={formik.values.seatNumber}
                        onChange={(_, newValue) => {
                            formik.setFieldValue('seatNumber', newValue || null)
                        }}
                        renderInput={(params) => (
                            <TextField
                                variant="outlined"
                                color='info'
                                {...params}
                                label="Số ghế ngồi"
                                name="seatNumber"
                                onBlur={formik.handleBlur}
                                error={formik.touched.seatNumber && Boolean(formik.errors.seatNumber)}
                                helperText={formik.touched.seatNumber && formik.errors.seatNumber}
                            />
                        )}
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
            </DialogContent>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={1500}
                onClose={handleCloseSnackbar}
            >
                <MuiAlert severity='success'>
                    Edit new ticket successfully!
                </MuiAlert>
            </Snackbar>
        </BootstrapDialog>
    );
}
