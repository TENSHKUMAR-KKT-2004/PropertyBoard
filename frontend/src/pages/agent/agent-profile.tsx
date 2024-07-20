import { useOne } from "@refinedev/core";
import { useParams } from "react-router-dom";

import { Profile } from "../../components/index"

const AgentProfile = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useOne({
        resource: "users",
        id
    });


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
            properties={myProfile.allProperties}
        />
    );
};

export default AgentProfile;