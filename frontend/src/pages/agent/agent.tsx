import { useList } from "@refinedev/core";
import {Box, Typography, useTheme} from "@mui/material";

import { AgentCard } from "../../components/index";

const Agents = () => {
    const { data, isLoading, isError } = useList({ resource: "users" });

    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    
    const allAgents = data?.data ?? [];

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color={isDarkMode ? '#EFEFEF' : '#11142d'}>
                Agents List
            </Typography>

            <Box
                mt="20px"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    backgroundColor: isDarkMode? "#1A1D1F" : "#fcfcfc",
                }}
            >
                {allAgents.map((agent) => (
                    agent.role === 'agent' ? 
                    <AgentCard
                        key={agent._id}
                        id={agent._id}
                        name={agent.name}
                        email={agent.email}
                        avatar={agent.avatar}
                        address={agent.address}
                        phonenumber={agent.phonenumber}
                        noOfProperties={agent.allProperties.length}
                        isDarkMode={isDarkMode}
                    /> : ''
                ))}
            </Box>
        </Box>
    );
};

export default Agents;