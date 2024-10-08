import React from 'react'
import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { propertyReferralsInfo } from '../../constants';
import propertyDetails from '../../pages/properties/property-details'

interface ProgressBarProps{
  title: string,
  percentage: number,
  color: string,
  textColor: string
}

const Progressbar = ({title, percentage, color, textColor}:ProgressBarProps)=>(
  <Box width={'100%'}>
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
      <Typography fontSize={16} fontWeight={500} color={textColor}>
        {title}
      </Typography>
      <Typography fontSize={16} fontWeight={500} color={textColor}>
        {percentage}%
      </Typography>
    </Stack>

    <Box mt={2} position={'relative'} width={'100%'} height={'8px'} borderRadius={1} bgcolor={'#e4e8ef'}> 
      <Box 
      width={`${percentage}%`}
      bgcolor={color}
      position={'absolute'}
      height={'100%'}
      borderRadius={1}
      />
    </Box>
  </Box>
)

interface Props {
  isDarkMode: boolean
}

const PropertyReferrals = ({ isDarkMode }: Props) => {
  return (
    <Box
    p={4}
    bgcolor={isDarkMode ? '#1A1D1F' : "#fcfcfc"}
    id="chart"
    minWidth={490}
    display="flex"
    flexDirection="column"
    borderRadius="15px"
    >
        <Typography fontSize={18} fontWeight={600} color={isDarkMode ? '#EFEFEF' : "#11142d"}>
        Property Referrals
            </Typography>

            <Stack my={'20px'} direction={'column'} gap={4}>
            {propertyReferralsInfo.map((bar)=><Progressbar key={bar.title} textColor={isDarkMode ? '#EFEFEF' : "#11142d"} {...bar}/>)}
            </Stack>
    </Box>
  )
}

export default PropertyReferrals