import { useActiveAuthProvider, useGetIdentity, useOne } from "@refinedev/core";

import { Profile } from "../components";

const MyProfile = () => {
  const authProvider = useActiveAuthProvider();
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  });
    const { data, isLoading, isError } = useOne({
        resource: "users",
        id: user.userid,
    });

    const myProfile = data?.data ?? [];

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Profile
            type="My"
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

export default MyProfile;