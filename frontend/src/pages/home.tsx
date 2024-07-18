import React from 'react'
import { useList } from "@refinedev/core"
import { Typography, Box, Stack } from '@mui/material'

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from "../components/index";

const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color={'#11142D'}>
        DashBoard
      </Typography>

      <Box mt={'20px'} display={'flex'} flexWrap={'wrap'} gap={4}>
        <PieChart 
        title='Properties for Sale' 
        value={684}
        series={[75,25]}
        colors={['#475BE8','#E4E8EF']}
        />
        <PieChart 
        title='Properties for Rent' 
        value={550}
        series={[60,40]}
        colors={['#FD8539','#E4E8EF']}
        />
        <PieChart 
        title='Total Customers' 
        value={5684}
        series={[75,25]}
        colors={['#2ED480','#E4E8EF']}
        />
        <PieChart 
        title='Properties for Cities' 
        value={786}
        series={[75,25]}
        colors={['#FE6D8E','#E4E8EF']}
        />
      </Box>

      <Stack mt={'25px'} width={'100%'} gap={4} direction={{ xs: 'column', lg: 'row'}}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  )
}

export default Home