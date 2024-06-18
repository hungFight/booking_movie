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


const AddTicket = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const [openSnackBar, setOpenSnackBar] = useState(false);
    const handleCloseSnackbar = () => {
        setOpenSnackBar(false);
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
                console.log("Giá trị vừa nhập vào là:", values);
                setOpenSnackBar(true);
            } catch (err) {
                console.error("Lỗi:", err);
            }
        }
    });

    return (
        <Box m="15px">
            <Stack>
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
            </Stack>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={1500}
                onClose={handleCloseSnackbar}
            >
                <MuiAlert severity='success'>
                    Create new ticket successfully!
                </MuiAlert>
            </Snackbar>
        </Box>
    )
}

export default AddTicket;