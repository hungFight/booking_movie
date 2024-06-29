import { Button } from "@mui/base";
import {
  Card, CardContent, CardMedia, Grid, Step, StepLabel, Stepper, Typography, FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Container, ListItem, TextField
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import LayoutHeaderFooter from "~/app/Layout/LayoutHeaderFooter/LayoutHeaderFooter";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const steps = [
  'Choose Seat',
  'Pay',
  'Confirm',
];

function PaymentGateway() {
  const [slotSelected, setSlotSelected] = useState(1)
  const [seats, setSeats] = useState(
    [
      {
        row: "A",
        seats: [
          {
            number: 1,
            isSold: true,
            isSelected: false
          },
          {
            number: 2,
            isSold: false,
            isSelected: false
          },
          {
            number: 3,
            isSold: true,
            isSelected: false
          },
          {
            number: 4,
            isSold: false,
            isSelected: false
          },
          {
            number: 5,
            isSold: false,
            isSelected: false
          },
          {
            number: 6,
            isSold: false,
            isSelected: true
          },
          {
            number: 7,
            isSold: true,
            isSelected: false
          },
        ]
      },
    ]
  )
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const [open2, setOpen2] = useState(true);
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const [selectedValue, setSelectedValue] = useState('hsbc');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  const handleSelectSeat = (row, seat) => {
    console.log(seats[row].seats[seat].isSold);
    if (!seats[row].seats[seat].isSold) {
      seats[row].seats[seat].isSelected = true
      setSeats(seats)
    }
    console.log(seats);
  }

  const handleSelecteSlot = (index) => {
    setSlotSelected(index)
  }

  return (
    <LayoutHeaderFooter>
      <Box>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box className="px-28 mt-10">
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Box className="ml-5 items-start">
              <Box>
                <Typography className='flex mb-4' variant='h6'>Khuyến mãi</Typography>
                <Box className="flex">
                  <TextField size='small' label="Khuyến mãi" variant="outlined" />
                  <Button
                    className='ml-4'
                    color='warning'
                    size='large'
                    variant='contained'
                  >
                    Áp Dụng
                  </Button>
                </Box>
              </Box>
              <Box className='flex mt-1'>
                <Typography variant='caption'>Lưu ý: Có thể có nhiều vourchers vào 1 lần thanh toán</Typography>
              </Box>

              <Box>
                <List
                  // className='flex'
                  sx={{ width: '100%', maxWidth: 190 }}
                  component="nav"
                >
                  <ListItem className="pl-0" onClick={handleClick}>
                    <ListItemText primary="Khuyến mãi của bạn" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    Hello
                  </Collapse>
                </List>
              </Box>

              <Box>
                <List
                  sx={{ width: '100%', maxWidth: 400 }}
                  component="nav"
                >
                  <ListItem className="pl-0" onClick={handleClick2}>
                    <ListItemText primary="Áp dụng điểm stars" />
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={open2} timeout="auto" unmountOnExit>
                    <Box className="flex">
                      <TextField size='small' label="Khuyến mãi" variant="outlined" />
                      <Button
                        className='ml-4'
                        color='warning'
                        size='large'
                        variant='contained'
                      >
                        Áp Dụng
                      </Button>
                    </Box>
                    <Box className='flex mt-1'>
                      <Typography variant='caption'>Bạn đang có 0 điểm Stars</Typography>
                    </Box>
                  </Collapse>
                </List>
              </Box>
            </Box>

            <Box>
              <Box className="bg-white p-4 mt-8 text-left">
                <Typography variant="h6" className="mb-4 font-semibold">
                  Phương thức thanh toán
                </Typography>
                <FormControl component="fieldset" className="my-4">
                  <RadioGroup
                    aria-label="payment-methods"
                    name="payment-methods"
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    <Stack spacing={2}>
                      <FormControlLabel
                        value="hsbc"
                        control={<Radio />}
                        label={
                          <Box display="flex" alignItems="center">
                            <img
                              alt=""
                              loading="lazy"
                              width="50"
                              height="50"
                              decoding="async"
                              src="https://cdn.galaxycine.vn/media/2020/10/20/hsbc-icon_1603203578522.png"
                              style={{ color: 'transparent' }}
                              className="inline-block mx-2 object-cover duration-500 ease-in-out group-hover:opacity-100 scale-100 blur-0 grayscale-0"
                            />
                            <Typography variant="body1">
                              HSBC/Payoo - ATM/VISA/MASTER/JCB/QRCODE
                            </Typography>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        value="shopeepay"
                        control={<Radio />}
                        label={
                          <Box display="flex" alignItems="center">
                            <img
                              alt=""
                              loading="lazy"
                              width="50"
                              height="50"
                              decoding="async"
                              src="https://cdn.galaxycine.vn/media/2022/4/29/shopee-pay_1651229746140.png"
                              style={{ color: 'transparent' }}
                              className="inline-block mx-2 object-cover duration-500 ease-in-out group-hover:opacity-100 scale-100 blur-0 grayscale-0"
                            />
                            <Typography variant="body1">
                              Ví ShopeePay - Nhập mã: SPPCINE06 Giảm 20K cho đơn từ 100K
                            </Typography>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        value="momo"
                        control={<Radio />}
                        label={
                          <Box display="flex" alignItems="center">
                            <img
                              alt=""
                              loading="lazy"
                              width="50"
                              height="50"
                              decoding="async"
                              src="https://cdn.galaxycine.vn/media/2020/10/20/momo-icon_1603203874499.png"
                              style={{ color: 'transparent' }}
                              className="inline-block mx-2 object-cover duration-500 ease-in-out group-hover:opacity-100 scale-100 blur-0 grayscale-0"
                            />
                            <Typography variant="body1">Ví Điện Tử MoMo</Typography>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        value="zalopay"
                        control={<Radio />}
                        label={
                          <Box display="flex" alignItems="center">
                            <img
                              alt=""
                              loading="lazy"
                              width="50"
                              height="50"
                              decoding="async"
                              src="https://cdn.galaxycine.vn/media/2022/12/2/icon-96x96_1669977824597.png"
                              style={{ color: 'transparent' }}
                              className="inline-block mx-2 object-cover duration-500 ease-in-out group-hover:opacity-100 scale-100 blur-0 grayscale-0"
                            />
                            <Typography variant="body1">
                              ZaloPay - Bạn mới Zalopay nhập mã GLX50 - Giảm 50k cho đơn từ 200k
                            </Typography>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        value="vnpay"
                        control={<Radio />}
                        label={
                          <Box display="flex" alignItems="center">
                            <img
                              alt=""
                              loading="lazy"
                              width="50"
                              height="50"
                              decoding="async"
                              src="https://cdn.galaxycine.vn/media/2021/12/2/download_1638460623615.png"
                              style={{ color: 'transparent' }}
                              className="inline-block mx-2 object-cover duration-500 ease-in-out group-hover:opacity-100 scale-100 blur-0 grayscale-0"
                            />
                            <Typography variant="body1">VNPAY</Typography>
                          </Box>
                        }
                      />
                    </Stack>
                  </RadioGroup>
                </FormControl>
                <Box className="text-sm flex">
                  <Typography className="text-red-500 font-bold">
                    (*)
                  </Typography>
                  <Typography variant='body2'>
                    Bằng việc click/chạm vào THANH TOÁN bên phải, bạn đã xác nhận hiểu rõ các Quy Định Giao Dịch Trực Tuyến của Galaxy Cinema.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box className="border-t-[6px] border-orange-500 rounded-md p-3">
              <Card className="w-full shadow-none mb-5 mt-3" >
                <Grid container >
                  <Grid item xs={4}>
                    <CardMedia
                      className="rounded-md"
                      component="img"
                      height="170"
                      image="https://cdn.galaxycine.vn/media/2024/5/6/inside-out-2-3_1714970461256.jpg"
                      alt="Những Mảnh Ghép Cảm Xúc 2"
                    />
                  </Grid>

                  <Grid item xs={8}>
                    <CardContent className="py-0 text-left">
                      <Typography className="capitalize font-semibold">những mảnh ghép cảm xúc 2</Typography>
                      <p>2D Phụ Đề -</p>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>

              <Box className="pb-3 border-b-[1px] border-dotted text-left mb-5">
                <p>
                  <span className="font-semibold">Galaxy Nguyễn Du - </span>
                  <span> Theater 3</span>
                </p>
                <p>
                  <span>Slot: <span className="font-semibold">11:00 - </span></span>
                  <span>Monday, <span className="font-semibold">24/06/2024</span></span>
                </p>
              </Box>

              <Box className="">
                <div className="text-left mb-10">
                  <span className="text-[20px] font-semibold">Total</span>
                  <span className="float-right text-lg text-orange-500">0đ</span>
                </div>

                <div className="flex items-center">
                  <Button className="text-orange-500 w-[50%] p-2">Back</Button>
                  <Button className="bg-orange-500 hover:bg-orange-400 w-[50%] p-2 rounded-md text-white">Next</Button>
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </LayoutHeaderFooter>
  );
}

export default PaymentGateway;