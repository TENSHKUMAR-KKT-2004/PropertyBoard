import { useActiveAuthProvider, useGetIdentity, useOne } from "@refinedev/core";

import { Profile } from "../../components";
import { useTheme } from "@mui/material";

const MyProfile = () => {
  const authProvider = useActiveAuthProvider();
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  });
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
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

export default MyProfile;