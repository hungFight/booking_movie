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
import room from '~/restfulAPI/room';
import seat from '~/restfulAPI/seat';
import { useNavigate } from 'react-router-dom';


const AddSeat = () => {
    const navigate = useNavigate()
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isEndTimeSelected, setIsEndTimeSelected] = useState(false);
    const [rows, setRows] = useState([])
    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const [files, setFiles] = useState([]);
    const [isDateSelected, setIsDateSelected] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const handleCloseSnackbar = () => {
        setOpenSnackBar(false);
    };

    const handleChange = (files) => {
        setFiles(files);
    };

    const validationSchema = Yup.object({
        number: Yup
            .number()
            .required('Vui lòng chọn thông tin vào trường này'),
        roomName: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        seat_type: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này'),
        line: Yup
            .string()
            .required('Vui lòng nhập thông tin vào trường này')
    });

    const initialValues = {
        number: null,
        seat_type: "",
        roomName: "", line: ""
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, helpers) => {

            try {
                console.log("Giá trị vừa nhập vào là:", values);
                const res = await seat.create({
                    "number": values.number,
                    "line": values.line,
                    "seat_type": values.seat_type,
                    "room_id": rows.find(r => r.name === values.roomName).id,
                    "seat_status_id": 1
                })
                if (res) {
                    navigate('/admin/management/seat')
                }
                setOpenSnackBar(true);
            } catch (err) {
                console.error("Lỗi:", err);
            }
        }
    });
    React.useEffect(() => {
        async function getAll() {
            const res = await room.getAll()
            setRows(res.map((r, index) => {
                return { ...r, stt: index + 1 }
            }))
        }
        getAll()
    }, [])
    return (
        <Box m="15px">
            <Stack>
                <Box>
                    <TextField
                        color="info"
                        error={ !!(formik.touched.number && formik.errors.number) }
                        helperText={ formik.touched.number && formik.errors.number }
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.number }
                        name="number"
                        sx={ { marginTop: "12px" } }
                        label="Number"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        color="info"
                        error={ !!(formik.touched.line && formik.errors.line) }
                        helperText={ formik.touched.line && formik.errors.line }
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.line }
                        name="line"
                        sx={ { marginTop: "12px" } }
                        label="Line"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        color="info"
                        error={ !!(formik.touched.seat_type && formik.errors.seat_type) }
                        helperText={ formik.touched.seat_type && formik.errors.seat_type }
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.seat_type }
                        name="seat_type"
                        sx={ { marginTop: "12px" } }
                        label="Seat_type"
                        fullWidth
                        variant="outlined"
                    />
                    <Autocomplete
                        sx={ { margin: "10px 0px 5px 0px" } }
                        color='info'
                        fullWidth
                        options={ rows.map(r => r.name) }
                        value={ formik.values.roomName }
                        onChange={ (_, newValue) => {
                            formik.setFieldValue('roomName', newValue || null)
                        } }
                        renderInput={ (params) => (
                            <TextField
                                variant="outlined"
                                color='info'
                                { ...params }
                                label="Room"
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
            </Stack>
            <Snackbar
                open={ openSnackBar }
                autoHideDuration={ 1500 }
                onClose={ handleCloseSnackbar }
            >
                <MuiAlert severity='success'>
                    Create new seat successfully!
                </MuiAlert>
            </Snackbar>
        </Box>
    )
}

export default AddSeat;