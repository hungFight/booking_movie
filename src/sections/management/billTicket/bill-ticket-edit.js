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

export default function BillTicketEdit({ open, onClose, rowData }) {
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
        quantity: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        billName: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        ticketCode: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này')
    });

    const initialValues = {
        quantity: "",
        billName: "",
        ticketCode: "",
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
                quantity: rowData?.quantity || '',
                billName: rowData?.billName || '',
                ticketCode: rowData?.ticketCode,
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
                Edit bill ticket
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
                        error={!!(formik.touched.quantity && formik.errors.quantity)}
                        helperText={formik.touched.quantity && formik.errors.quantity}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.quantity}
                        name="quantity"
                        sx={{ marginTop: "12px" }}
                        label="Quantity"
                        fullWidth
                        type="number"
                        variant="outlined"
                    />

                    <Autocomplete
                        sx={{ margin: "10px 0px 5px 0px" }}

                        fullWidth
                        options={["Hóa đơn 1", "Hóa đơn 2", "Hóa đơn 3"]}
                        value={formik.values.billName}
                        onChange={(_, newValue) => {
                            formik.setFieldValue('billName', newValue || null)
                        }}
                        renderInput={(params) => (
                            <TextField
                                variant="outlined"
                                color='info'
                                {...params}
                                label="Tên hóa đơn"
                                name="billName"
                                onBlur={formik.handleBlur}
                                error={formik.touched.billName && Boolean(formik.errors.billName)}
                                helperText={formik.touched.billName && formik.errors.billName}
                            />
                        )}
                    />

                    <Autocomplete
                        sx={{ margin: "10px 0px 5px 0px" }}

                        fullWidth
                        options={["12345", "23456", "34567"]}
                        value={formik.values.ticketCode}
                        onChange={(_, newValue) => {
                            formik.setFieldValue('ticketCode', newValue || null)
                        }}
                        renderInput={(params) => (
                            <TextField
                                variant="outlined"
                                color='info'
                                {...params}
                                label="Số ghế ngồi"
                                name="ticketCode"
                                onBlur={formik.handleBlur}
                                error={formik.touched.ticketCode && Boolean(formik.errors.ticketCode)}
                                helperText={formik.touched.ticketCode && formik.errors.ticketCode}
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
                    Edit new bill ticket successfully!
                </MuiAlert>
            </Snackbar>
        </BootstrapDialog>
    );
}
