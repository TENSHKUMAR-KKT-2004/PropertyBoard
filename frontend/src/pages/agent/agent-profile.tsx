import { useOne } from "@refinedev/core";
import { useParams } from "react-router-dom";

import { Profile } from "../../components/index"
import { useTheme } from "@mui/material";

const AgentProfile = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useOne({
        resource: "users",
        id
    });

    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const myProfile = data?.data ?? [];
    
    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Profile
            type="Agent"
            // @ts-ignore
            name={myProfile.name}
            // @ts-ignore
            email={myProfile.email}
            // @ts-ignore
            avatar={myProfile.avatar}
            // @ts-ignore
            banner={myProfile.banner}
            // @ts-ignore
            role={myProfile.role}
            // @ts-ignore
            address={myProfile.address}
            // @ts-ignore
            phonenumber={myProfile.phonenumber}
            // @ts-ignore
            properties={myProfile.allProperties}
            isDarkMode={isDarkMode}
        />
    );
};

export default AgentProfile;