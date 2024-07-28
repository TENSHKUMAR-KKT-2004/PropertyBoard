import { useList } from "@refinedev/core";
import {Box, Typography} from "@mui/material";

import { AgentCard } from "../../components/index";

const Agents = () => {
    const { data, isLoading, isError } = useList({ resource: "users" });

    const allAgents = data?.data ?? [];

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d">
                Agents List
            </Typography>

            <Box
                mt="20px"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    backgroundColor: "#fcfcfc",
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
                    /> : ''
                ))}
            </Box>
        </Box>
    );
};

export default Agents;