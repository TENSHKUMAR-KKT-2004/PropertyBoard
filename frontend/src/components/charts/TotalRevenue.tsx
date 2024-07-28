import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ArrowCircleUpRounded from "@mui/icons-material/ArrowCircleUpRounded";

import { TotalRevenueSeries } from "./chart.config";

interface Props {
    isDarkMode: boolean
}

const TotalRevenue = ({ isDarkMode }: Props) => {
    return (
        <Box
            p={4}
            flex={1}
            bgcolor={isDarkMode ? '#1A1D1F' : "#fcfcfc"}
            id="chart"
            display="flex"
            flexDirection="column"
            borderRadius="15px"
        >
            <Typography fontSize={18} fontWeight={600} color={isDarkMode ? '#EFEFEF' : "#11142d"}>
                Total Revenue
            </Typography>

            <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
                <Typography fontSize={28} fontWeight={700} color={isDarkMode ? '#EFEFEF' : "#11142d"}>
                    ₹236,535
                </Typography>
                <Stack direction="row" alignItems="center" gap={1}>
                    <ArrowCircleUpRounded
                        sx={{ fontSize: 25, color: "#475be8" }}
                    />
                    <Stack>
                        <Typography fontSize={15} color="#475be8">
                            0.8%
                        </Typography>
                        <Typography fontSize={12} color={isDarkMode ? '#6F767E' : "#808191"}>
                            Than Last Month
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <ReactApexChart
                series={TotalRevenueSeries}
                type="bar"
                height={310}
                options={
                    {
                        chart: {
                            type: "bar",
                            background: 'transparent',
                            toolbar: {
                                show: false,
                            },
                        },
                        colors: ["#475BE8", "#CFC8FF"],
                        plotOptions: {
                            bar: {
                                borderRadius: 4,
                                horizontal: false,
                                columnWidth: "55%",
                            },
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        grid: {
                            show: false,
                        },
                        stroke: {
                            colors: ["transparent"],
                            width: 4,
                        },
                        xaxis: {
                            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                            labels: {
                                style: {
                                    colors: isDarkMode ? '#6F767E' : '#808191',
                                },
                            },
                        },
                        yaxis: {
                            title: {
                                text: "₹ (thousands)",
                                style: {
                                    color: isDarkMode ? '#6F767E' : '#808191',
                                },
                            },
                            labels: {
                                style: {
                                    colors: isDarkMode ? '#6F767E' : '#808191',
                                },
                            },
                        },
                        fill: {
                            opacity: 1,
                        },
                        legend: {
                            position: "top",
                            horizontalAlign: "right",
                            labels: {
                                colors: isDarkMode ? '#6F767E' : '#808191',
                              },
                        },
                        tooltip: {
                            theme: isDarkMode ? 'dark' : 'light',
                            y: {
                                formatter(val: number) {
                                    return `₹ ${val} thousands`;
                                },
                            },
                        },
                    }
                }
            />
        </Box>
    );
};

export default TotalRevenue;