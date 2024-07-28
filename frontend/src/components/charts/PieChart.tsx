import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { PieChartProps } from "../../interfaces/home";

const PieChart = ({ title, value, series, colors, isDarkMode }: PieChartProps) => {

    return (
        <Box
            id="chart"
            flex={1}
            display="flex"
            bgcolor={isDarkMode ? '#1A1D1F' : "#fcfcfc"}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            pl={3.5}
            py={2}
            gap={2}
            borderRadius="15px"
            minHeight="110px"
            width="fit-content"
        >
            <Stack direction="column">
                <Typography color={isDarkMode ? '#66687B' : "#808191"} fontSize={14}>
                    {title}
                </Typography>
                <Typography
                    fontSize={24}
                    color={isDarkMode ? '#EFEFEF' : "#11142d"}
                    fontWeight={700}
                    mt={1}
                >
                    {value}
                </Typography>
            </Stack>

            <ReactApexChart
                options={{
                    chart: { type: "donut",background: 'transparent' },
                    colors,
                    legend: { show: false },
                    dataLabels: { enabled: false },

                    fill: {
                        type: 'solid',
                        opacity: 1,
                    },
                    stroke: {
                        show: false,
                    },
                }}
                series={series}
                type="donut"
                width="120px"
            />
        </Box>
    );
};

export default PieChart;