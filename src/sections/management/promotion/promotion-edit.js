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
import { DatePicker, DateTimePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { tokens } from '../../../theme';
import MuiAlert from '@mui/material/Alert';

import { Save } from "@mui/icons-material";
import "react-quill/dist/quill.snow.css";
import { DropzoneArea } from "mui-file-dropzone";
import ReactQuill from 'react-quill';
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

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
    const [startTime, setStartTime] = useState(dayjs(rowData?.startTime));
    const [endTime, setEndTime] = useState(dayjs(rowData?.endTime));
    const handleCloseSnackbar = () => {
        setOpenSnackBar(false);
    };

    const handleClose = (isEvent) => {
        formik.resetForm();
        onClose();
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
                promotionName: rowData?.promotionName || '',
                percent: rowData?.percent || '',
                startTime: rowData?.startTime,
                endTime: rowData?.endTime || '',
                rankCustomerName: rowData?.rankCustomerName || '',
                description: rowData?.description || '',
                quantity: rowData?.quantity || '',
                type: rowData?.type || '',
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
                Edit promotion
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
                        error={ !!(formik.touched.promotionName && formik.errors.promotionName) }
                        helperText={ formik.touched.promotionName && formik.errors.promotionName }
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.promotionName }
                        name="promotionName"
                        sx={ { marginTop: "12px" } }
                        label="PromotionName"
                        fullWidth
                        variant="outlined"
                    />

                    <Grid container spacing={ 1 }>
                        <Grid item xs={ 6 }>
                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                <DemoContainer components={ ['DateTimePicker'] }>
                                    <DateTimePicker
                                        sx={ {
                                            width: "100%",
                                            marginTop: '12px'
                                        } }
                                        label="Start time"
                                        name="startTime"
                                        value={ startTime }
                                        onChange={ (value) => {
                                            if (value) {
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
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={ 6 }>
                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                <DemoContainer components={ ['DateTimePicker'] }>

                                    <DateTimePicker
                                        sx={ {
                                            width: "100%",
                                            marginTop: '12px'
                                        } }
                                        label="End time"
                                        name="endTime"
                                        value={ endTime }
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
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                    </Grid>

                    <TextField
                        color="info"
                        error={ !!(formik.touched.percent && formik.errors.percent) }
                        helperText={ formik.touched.percent && formik.errors.percent }
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.percent }
                        name="percent"
                        sx={ { marginTop: "12px" } }
                        label="Percent"
                        fullWidth
                        variant="outlined"
                        type='number'
                    />

                    <TextField
                        color="info"
                        error={ !!(formik.touched.quantity && formik.errors.quantity) }
                        helperText={ formik.touched.quantity && formik.errors.quantity }
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.quantity }
                        name="quantity"
                        sx={ { marginTop: "12px" } }
                        label="Quantity"
                        fullWidth
                        variant="outlined"
                        type='number'
                    />

                    <Autocomplete
                        sx={ { margin: "10px 0px 5px 0px" } }

                        fullWidth
                        options={ ["Đồng", "Bạc", "Vàng"] }
                        value={ formik.values.rankCustomerName }
                        onChange={ (_, newValue) => {
                            formik.setFieldValue('rankCustomerName', newValue || null)
                        } }
                        renderInput={ (params) => (
                            <TextField
                                variant="outlined"
                                color='info'
                                { ...params }
                                label="Hạng khách hàng "
                                name="rankCustomerName"
                                onBlur={ formik.handleBlur }
                                error={ formik.touched.rankCustomerName && Boolean(formik.errors.rankCustomerName) }
                                helperText={ formik.touched.rankCustomerName && formik.errors.rankCustomerName }
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
                            paddingTop: '10px'
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
                    Edit new promotion successfully!
                </MuiAlert>
            </Snackbar>
        </BootstrapDialog>
    );
}
