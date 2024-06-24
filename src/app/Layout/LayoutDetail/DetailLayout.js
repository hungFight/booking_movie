import { Autocomplete, Avatar, Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const DetailLayout = ({ children }) => {
  const top10Films = [
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
  ];
  return (
    <>
      <Box className="px-28 mt-5 ">
        <Grid container spacing={4}>
          <Grid item xs={8}>
            {children}
          </Grid>
          <Grid item xs={4}>
            <Box className="border rounded-t-md border-gray-400 border-t-0">
              <Box className="bg-blue-800 rounded-t-md py-5">
                <Typography variant="h4" className="text-center text-white font-semibold">Mua Vé Nhanh</Typography>
              </Box>
              <Box className="px-4 pb-8 pt-1 bg-gray-100">
                <Autocomplete
                  disablePortal
                  id="combo-box"
                  options={top10Films}
                  sx={{
                    mt: 2
                  }}
                  renderInput={(params) => <TextField {...params} label="Chọn Phim" size="small" color="info" />}
                />
                <Autocomplete
                  disabled={true}
                  id="combo-box"
                  options={top10Films}
                  sx={{
                    mt: 2
                  }}
                  renderInput={(params) => <TextField {...params} label="Chọn Rạp" size="small" color="info" />}
                />
                <Autocomplete
                  disabled={true}
                  id="combo-box"
                  options={top10Films}
                  sx={{
                    mt: 2
                  }}
                  renderInput={(params) => <TextField {...params} label="Chọn Ngày" size="small" color="info" />}
                />
              </Box>
            </Box>
            <Box mt={3}>
              <Box>
                <div style={{ fontSize: '20px' }} className="mr-4 uppercase font-semibold border-l-4 border-l-blue-700 pl-2 text-left">
                  <Typography variant="h3" className=" inline-block text-[20px] uppercase text-gray-700">Phim đang chiếu</Typography>
                </div>
              </Box>
            </Box>

            <Box>
              <Box mt={3}>
                <Box className="cursor-pointer rounded overflow-hidden">
                  <Box className="object-cover relative">
                    <Box className="absolute hidden md:block w-full h-full z-10 cursor-pointer bg-[#00000080] transition-all duration-300 ease-in-out opacity-0 hover:opacity-100">
                      <Box className="flex justify-center items-center w-full h-full">
                        <Button
                          size="large"
                          variant="contained"
                          color="warning"
                          className="text-white rounded text-center"
                          startIcon={<ShoppingCartIcon />}
                        >Mua vé</Button>
                      </Box>
                    </Box>
                    <Link>
                      <img alt="despicable-me-4" loading="lazy" width="100%" height="250" decoding="async" data-nimg="1" className="undefined object-cover duration-500 ease-in-out group-hover:opacity-100&quot; scale-100 blur-0 grayscale-0)" src="https://cdn.galaxycine.vn/media/2024/6/20/despicable-me-4-750_1718865150064.jpg" style={{ color: "transparent" }} />
                    </Link>
                  </Box>
                </Box>
                <Box mt={1} textAlign="left">
                  <Link className="text-left">Kẻ Trộm Mặt Trăng 4</Link>
                </Box>
              </Box>

              <Box mt={3}>
                <Box className="cursor-pointer rounded overflow-hidden">
                  <Box className="object-cover relative">
                    <Box className="absolute hidden md:block w-full h-full z-10 cursor-pointer bg-[#00000080] transition-all duration-300 ease-in-out opacity-0 hover:opacity-100">
                      <Box className="flex justify-center items-center w-full h-full">
                        <Button
                          size="large"
                          variant="contained"
                          color="warning"
                          className="text-white rounded text-center"
                          startIcon={<ShoppingCartIcon />}
                        >Mua vé</Button>
                      </Box>
                    </Box>
                    <Link>
                      <img alt="inside-out-2" loading="lazy" width="100%" height="250" decoding="async" data-nimg="1" className="undefined object-cover duration-500 ease-in-out group-hover:opacity-100&quot; scale-100 blur-0 grayscale-0)" src="https://cdn.galaxycine.vn/media/2024/5/6/inside-out-2-1_1714970465678.jpg" />
                    </Link>
                  </Box>
                </Box>
                <Box mt={1} textAlign="left">
                  <Link className=" text-left">Những Mảnh Ghép Cảm Xúc 2</Link>
                </Box>
              </Box>

              <Box mt={3}>
                <Box className="cursor-pointer rounded overflow-hidden">
                  <Box className="object-cover relative">
                    <Box className="absolute hidden md:block w-full h-full z-10 cursor-pointer bg-[#00000080] transition-all duration-300 ease-in-out opacity-0 hover:opacity-100">
                      <Box className="flex justify-center items-center w-full h-full">
                        <Button
                          size="large"
                          variant="contained"
                          color="warning"
                          className="text-white rounded text-center"
                          startIcon={<ShoppingCartIcon />}
                        >Mua vé</Button>
                      </Box>
                    </Box>
                    <Link>
                      <img alt="the-exorcism" loading="lazy" width="100%" height="250" decoding="async" data-nimg="1" className="undefined object-cover duration-500 ease-in-out group-hover:opacity-100&quot; scale-100 blur-0 grayscale-0)" src="https://cdn.galaxycine.vn/media/2024/6/5/exorcism-750_1717573379907.jpg" style={{ color: "transparent" }} />
                    </Link>
                  </Box>
                </Box>
                <Box mt={1} textAlign="left">
                  <Link className=" text-left">Thầy Trừ Tà</Link>
                </Box>
              </Box>
            </Box>

            <Box className="flex justify-end  " my={3}>
              <Box sx={{
                transition: "background-color .1s linear"
              }}
                className="border border-orange-500 px-5 rounded-md text-orange-500 hover:text-white hover:bg-orange-500">
                <Button
                  endIcon={<ArrowForwardIosIcon className="text-sm" sx={{ color: "currentcolor" }} />}
                  size="large"
                  sx={{
                    textTransform: "unset",
                    color: "currentcolor"
                  }}
                  className="shadow-none text-sm bg-transparent"
                >
                  Xem thêm</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DetailLayout;