import React, { useState, useEffect } from "react";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import {
    SvgIcon,
    TextField,
    Button,
    Dialog,
    IconButton,
    styled,
    DialogTitle,
    DialogContent,
    Box,
    Typography,
    useTheme,
    Snackbar,
    Autocomplete
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { tokens } from '../../../theme';
import MuiAlert from '@mui/material/Alert';

import { Save } from "@mui/icons-material";
import "react-quill/dist/quill.snow.css";
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

export default function InvoiceEdit({ open, onClose, rowData }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const handleCloseSnackbar = () => {
        setOpenSnackBar(false);
    };

    const handleClose = (isEvent) => {
        formik.resetForm();
        onClose();
    };

    const validationSchema = Yup.object({
        invoiceName: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        promotionName: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        customerName: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        billStatus: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        tradingCode: Yup
            .string()
            .required('Vui lòng chọn thông tin vào trường này'),
        totalMoney: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
    });

    const initialValues = {
        invoiceName: "",
        promotionName: "",
        customerName: "",
        billStatus: "",
        tradingCode: "",
        totalMoney: "",
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
                tradingCode: rowData?.tradingCode || '',
                invoiceName: rowData?.invoiceName || '',
                totalMoney: rowData?.totalMoney || '',
                promotionName: rowData?.promotionName || '',
                customerName: rowData?.customerName || '',
                billStatus: rowData?.billStatus || '',
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
                Edit movie
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
                        error={!!(formik.touched.invoiceName && formik.errors.invoiceName)}
                        helperText={formik.touched.invoiceName && formik.errors.invoiceName}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.invoiceName}
                        name="invoiceName"
                        sx={{ marginTop: "12px" }}
                        size="small"
                        label="Invoice Name"
                        fullWidth
                        variant="outlined"
                    />

                    <TextField
                        color="info"
                        error={!!(formik.touched.tradingCode && formik.errors.tradingCode)}
                        helperText={formik.touched.tradingCode && formik.errors.tradingCode}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.tradingCode}
                        name="tradingCode"
                        sx={{ marginTop: "12px" }}
                        size="small"
                        label="Trading Code"
                        fullWidth
                        variant="outlined"
                    />


                    <TextField
                        color="info"
                        error={!!(formik.touched.totalMoney && formik.errors.totalMoney)}
                        helperText={formik.touched.totalMoney && formik.errors.totalMoney}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.totalMoney}
                        name="totalMoney"
                        sx={{ marginTop: "12px" }}
                        size="small"
                        label="Total Money"
                        fullWidth
                        variant="outlined"
                    />

                    <TextField
                        color="info"
                        error={!!(formik.touched.customerName && formik.errors.customerName)}
                        helperText={formik.touched.customerName && formik.errors.customerName}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.customerName}
                        name="customerName"
                        sx={{ marginTop: "12px" }}
                        size="small"
                        label="Customer Name"
                        fullWidth
                        variant="outlined"
                        disabled
                    />

                    <TextField
                        color="info"
                        error={!!(formik.touched.billStatus && formik.errors.billStatus)}
                        helperText={formik.touched.billStatus && formik.errors.billStatus}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.billStatus}
                        name="billStatus"
                        sx={{ marginTop: "12px" }}
                        size="small"
                        label="Bill Status"
                        fullWidth
                        variant="outlined"
                    />

                    <Autocomplete
                        sx={{ margin: "10px 0px 5px 0px" }}
                        color='info'
                        fullWidth
                        options={["CGV", "Lotte Cinema", "Beta Cinema"]}
                        value={formik.values.promotionName}
                        onChange={(_, newValue) => {
                            formik.setFieldValue('promotionName', newValue || null)
                        }}
                        renderInput={(params) => (
                            <TextField
                                variant="outlined"
                                color='info'
                                {...params}
                                label="Promotion Namme"
                                name="promotionName"
                                onBlur={formik.handleBlur}
                                error={formik.touched.promotionName && Boolean(formik.errors.promotionName)}
                                helperText={formik.touched.promotionName && formik.errors.promotionName}
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
                    Edit new invoice successfully!
                </MuiAlert>
            </Snackbar>
        </BootstrapDialog>
    );
}
