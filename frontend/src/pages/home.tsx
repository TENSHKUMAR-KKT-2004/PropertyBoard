import { useList } from "@refinedev/core"
import { Typography, Box, Stack, CircularProgress, useTheme } from '@mui/material'

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard
} from "../components/index";

const Home = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
    sorters: [
      {
        field: "createdAt",
        order: "desc",
      },
    ],
  });

  const latestProperties = data?.data ?? [];

  if (isLoading) return <CircularProgress color="success" />;
  if (isError) return <Typography>Something went wrong!</Typography>;
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color={isDarkMode ? '#fcfcfc' :'#11142D'}>
        DashBoard
      </Typography>

      <Box mt={'20px'} display={'flex'} flexWrap={'wrap'} gap={4} >
        <PieChart
          title='Properties for Sale'
          value={684}
          series={[75, 25]}
          colors={['#475BE8', isDarkMode ? '#272B30' : '#E4E8EF']}
          isDarkMode={isDarkMode}
        />
        <PieChart
          title='Properties for Rent'
          value={550}
          series={[60, 40]}
          colors={['#FD8539', isDarkMode ? '#272B30' : '#E4E8EF']}
          isDarkMode={isDarkMode}
        />
        <PieChart
          title='Total Customers'
          value={5684}
          series={[75, 25]}
          colors={['#2ED480', isDarkMode ? '#272B30' : '#E4E8EF']}
          isDarkMode={isDarkMode}
        
        />
        <PieChart
          title='Properties for Cities'
          value={786}
          series={[75, 25]}
          colors={['#FE6D8E', isDarkMode ? '#272B30' : '#E4E8EF']}
          isDarkMode={isDarkMode}
        
        />
      </Box>

      <Stack mt={'25px'} width={'100%'} gap={4} direction={{ xs: 'column', lg: 'row' }}>
        <TotalRevenue isDarkMode={isDarkMode} />
        <PropertyReferrals isDarkMode={isDarkMode} />
      </Stack>

      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor={isDarkMode ? '#1A1D1F' : "#fcfcfc"}
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize="18px" fontWeight={600} color={isDarkMode ? '#fcfcfc' :'#11142D'}>
          Latest Properties
        </Typography>

        <Box
          mt={2.5}
          sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
          
        >
          {latestProperties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
              isDarkMode={isDarkMode}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Home