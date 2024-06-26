import { Button } from "@mui/base";
import { Card, CardContent, CardMedia, Grid, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import LayoutHeaderFooter from "~/app/Layout/LayoutHeaderFooter/LayoutHeaderFooter";

const steps = [
    'Choose Seat',
    'Pay',
    'Confirm',
];

function Booking() {
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
                        <Box className="text-left p-3">
                            <span className="text-neutral-800 mr-10">Change showing slot</span>
                            <div className="inline-block">
                                <div onClick={() => handleSelecteSlot(1)} className={"border inline-block mr-3 py-2 px-5 cursor-pointer hover:bg-blue-600 hover:text-white rounded-md " + (slotSelected == 1 && " bg-blue-700 text-white")}>14:15</div>
                                <div onClick={() => handleSelecteSlot(2)} className={"border inline-block mr-3 py-2 px-5 cursor-pointer hover:bg-blue-600 hover:text-white rounded-md " + (slotSelected == 2 && " bg-blue-700 text-white")}>16:00</div>
                                <div onClick={() => handleSelecteSlot(3)} className={"border inline-block mr-3 py-2 px-5 cursor-pointer hover:bg-blue-600 hover:text-white rounded-md " + (slotSelected == 3 && " bg-blue-700 text-white")}>17:00</div>
                                <div onClick={() => handleSelecteSlot(4)} className={"border inline-block mr-3 py-2 px-5 cursor-pointer hover:bg-blue-600 hover:text-white rounded-md " + (slotSelected == 4 && " bg-blue-700 text-white")}>18:00</div>
                            </div>
                        </Box>

                        <Box className="p-3">
                            <div>
                                <div className="text-left">
                                    <span className="inline-flex items-center gap-2 mr-10">
                                        <div className="bg-neutral-300 w-[20px] h-[20px] rounded-md inline-block"></div>
                                        Seat sold
                                    </span>
                                    <span className="inline-flex items-center gap-2">
                                        <div className="bg-orange-500 w-[20px] h-[20px] rounded-md inline-block"></div>
                                        Seat selected
                                    </span>
                                </div>
                                <div className="text-neutral-400 mb-10 pt-4 border-t-4 mt-5 border-orange-500">
                                    Screen
                                </div>
                            </div>

                            <div>

                            </div>

                            {
                                seats.map((seat, indexRow) =>
                                    <div className="flex items-center justify-between mb-3">
                                        <div>{seat.row}</div>
                                        <div className="flex items-center justify-start gap-3">
                                            {seat.seats.map((item, indexSeat) =>
                                                <div className=
                                                    {
                                                        " px-2 border rounded-md " +
                                                        (item.isSold ? " bg-neutral-300 " : " hover:bg-orange-500 hover:text-white cursor-pointer ") +
                                                        (item.isSelected && " bg-orange-500 text-white ")
                                                    }
                                                    onClick={() => handleSelectSeat(indexRow, indexSeat)}
                                                >
                                                    {item.number}
                                                </div>
                                            )}
                                        </div>
                                        <div>{seat.row}</div>
                                    </div>
                                )
                            }
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

export default Booking;