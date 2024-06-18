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
    Snackbar,
    Avatar
} from "@mui/material";
import { useFormik } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import * as Yup from "yup";
import { tokens } from '../../../theme';
import MuiAlert from '@mui/material/Alert';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Save } from "@mui/icons-material";
import "react-quill/dist/quill.snow.css";

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

export default function UserEdit({ open, onClose, rowData }) {
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
        userName: Yup
            .string()
            .required('Vui lòng chọn thông tin vào trường này'),
        contactPersonName: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        email: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này '),
        phoneNumber: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này '),
        dateOfBirth: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này')
            .test(
                'is-ngayCongChieu-less-than-ngayHienTai',
                'Ngày sinh không được lớn hơn ngày hiện tại.',
                function (dateOfBirth) {
                    const currentDate = new Date();
                    return dateOfBirth <= currentDate;
                }
            ),
    });

    const formik = useFormik({
        initialValues: {
            userName: "",
            contactPersonName: "",
            email: "",
            phoneNumber: "",
            dateOfBirth: "",
            submit: null
        },
        validationSchema,
        onSubmit: async (values, helpers) => {
            try {
                console.log("check values", values)
            } catch (err) {
                console.log("Error");
            }
        }
    })

    useEffect(() => {
        try {
            formik.setValues({
                userName: rowData?.userName || '',
                contactPersonName: rowData?.contactPersonName || '',
                email: rowData?.email || '',
                phoneNumber: rowData?.phoneNumber || '',
                dateOfBirth: rowData?.dateOfBirth || ''
            })
        } catch (error) {
            console.error("Đã xảy ra lỗi . Vui lòng kiểm tra lại !!!", error);
        }
    }, [open, rowData])

    useEffect(() => {
        if (formik.values.dateOfBirth >= Date.now() && isDateSelected === true) {
            formik.setFieldError('dateOfBirth', 'Ngày sinh không được lớn hơn ngày hiện tại');
            formik.setFieldTouched('dateOfBirth', true);
        } else {
            formik.setFieldError('dateOfBirth', ''); // Reset error when timeOut is valid
        }
    }, [formik.values.dateOfBirth, isDateSelected]);

    return (
        <BootstrapDialog
            onClose={() => handleClose(false)}
            open={open}
            fullWidth
            maxWidth='md'
            scroll={'body'}
        >
            <DialogTitle sx={{ m: 0, p: 2, backgroundColor: colors.blueAccent[500], color: 'white' }}>
                Edit user
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
                    <Grid container>
                        <TextField
                            error={!!(formik.touched.userName && formik.errors.userName)}
                            helperText={formik.touched.userName && formik.errors.userName}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.userName}
                            name="userName"
                            sx={{ marginTop: "12px" }}
                            size="small"
                            label="Username"
                            fullWidth
                            variant="outlined"
                        />

                        <TextField
                            error={!!(formik.touched.contactPersonName && formik.errors.contactPersonName)}
                            helperText={formik.touched.contactPersonName && formik.errors.contactPersonName}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.contactPersonName}
                            name="contactPersonName"
                            sx={{ marginTop: "12px" }}
                            size="small"
                            label="ContactPersonName"
                            fullWidth
                            variant="outlined"
                        />

                        <TextField
                            error={!!(formik.touched.email && formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            name="email"
                            sx={{ marginTop: "12px" }}
                            size="small"
                            label="Email"
                            fullWidth
                            variant="outlined"
                        />

                        <TextField
                            error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                            name="phoneNumber"
                            sx={{ marginTop: "12px" }}
                            size="small"
                            label="PhoneNumber"
                            fullWidth
                            variant="outlined"
                        />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                sx={{
                                    width: "100%",
                                    marginTop: '12px'
                                }}
                                label="Date Of Birth"
                                name="dateOfBirth"
                                format="DD/MM/YYYY"
                                // value={formik.values.dateOfBirth}
                                onChange={(value) => {
                                    if (value != null) {
                                        formik.setFieldValue('dateOfBirth', Date.parse(value));
                                        setIsDateSelected(true)
                                    } else {
                                        formik.setFieldValue('dateOfBirth', '');
                                    }
                                }}

                                slotProps={{
                                    textField: {
                                        color: 'info',
                                        variant: "outlined",
                                        size: "small",
                                        onBlur: () => {
                                            formik.setFieldTouched('dateOfBirth', true);
                                        },
                                        helperText: formik.touched.dateOfBirth && formik.errors.dateOfBirth, // Sử dụng formik.touched và formik.errors
                                        error: !!(formik.touched.dateOfBirth && formik.errors.dateOfBirth) // Hiển thị error khi trường bị chạm và có lỗi
                                    },
                                }}
                            />
                        </LocalizationProvider>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "start",
                            }}
                        >
                            <Typography variant="b" component="b" sx={{ margin: "12px 14px 8px 12px" }}>
                                Ảnh đại diện
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Avatar
                                    sx={{
                                        width: "120px",
                                        height: "160px",
                                    }}
                                    variant="rounded"
                                    src={selectedFileLogo}
                                ></Avatar>
                            </Stack>
                            <Button
                                component="label"
                                variant="contained"
                                role={undefined}
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                                size='small'
                                color="info"
                                sx={{
                                    mt: 1,
                                    marginLeft: "6px"
                                }}
                            >
                                Upload file
                                <VisuallyHiddenInput
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </Button>
                        </Box>

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
                    </Grid>
                </Box>
            </DialogContent>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={1500}
                onClose={handleCloseSnackbar}
            >
                <MuiAlert severity='success'>
                    Edit new user successfully!
                </MuiAlert>
            </Snackbar>
        </BootstrapDialog>
    );
}
