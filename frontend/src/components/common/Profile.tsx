import { Edit, Email, Phone, Place } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

import { ProfileProps, PropertyProps } from "../../interfaces/common";
import PropertyCard from "./PropertyCard";
import CustomButton from "./CustomButton";
import { useActiveAuthProvider, useGetIdentity } from "@refinedev/core";
import { useNavigate } from "react-router-dom";

function checkImage(url: any) {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}

const Profile = ({ type, name, avatar, email, banner, role, address, phonenumber,  properties, isDarkMode }: ProfileProps) => {
    const authProvider = useActiveAuthProvider();
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  });

  const navigator = useNavigate()
  
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color={isDarkMode ? '#EFEFEF' : '#11142d'}>
                {type} Profile
            </Typography>

            <Box mt="20px" borderRadius="15px" padding="20px" bgcolor={isDarkMode ? "#1A1D1F":"#FCFCFC"} >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 2.5,
                    }}
                >
                    <img
                        src={banner}
                        width={340}
                        height={320}
                        alt="abstract"
                        className="my_profile-bg"
                    />
                    <Box
                        flex={1}
                        sx={{
                            marginTop: { md: "58px" },
                            marginLeft: { xs: "20px", md: "0px" },
                        }}
                    >
                        <Box
                            flex={1}
                            display="flex"
                            flexDirection={{ xs: "column", md: "row" }}
                            gap="20px"
                        >
                            <img
                                src={
                                    checkImage(avatar)
                                        ? avatar
                                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                                }
                                width={78}
                                height={78}
                                alt="user_profile"
                                className="my_profile_user-img"
                            />

                            <Box
                                flex={1}
                                display="flex"
                                flexDirection="column"
                                justifyContent="space-between"
                                gap="30px"
                            >
                                <Stack direction="column">
                                    <Typography
                                        fontSize={22}
                                        fontWeight={600}
                                        color={isDarkMode ? '#EFEFEF' : '#11142d'}
                                    >
                                        {name}
                                    </Typography>
                                    <Typography fontSize={16} color={isDarkMode ? '#6F767E' : '#808191'}>
                                        {role.toUpperCase()}
                                    </Typography>
                                </Stack>

                                <Stack direction="column" gap="30px">
                                    <Stack gap="15px">
                                        <Typography
                                            fontSize={14}
                                            fontWeight={500}
                                            color={isDarkMode ? '#6F767E' : '#808191'}
                                        >
                                            Address
                                        </Typography>
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            gap="10px"
                                        >
                                            <Place sx={{ color: isDarkMode ? '#EFEFEF' : "#11142D" }} />
                                            <Typography
                                                fontSize={14}
                                                color={isDarkMode ? '#EFEFEF' : '#11142d'}
                                            >
                                                {address}
                                            </Typography>
                                        </Box>
                                    </Stack>

                                    <Stack
                                        direction="row"
                                        flexWrap="wrap"
                                        gap="20px"
                                        pb={4}
                                    >
                                        <Stack flex={1} gap="15px">
                                            <Typography
                                                fontSize={14}
                                                fontWeight={500}
                                                color={isDarkMode ? '#6F767E' : '#808191'}
                                            >
                                                Phone Number
                                            </Typography>
                                            <Box
                                                display="flex"
                                                flexDirection="row"
                                                alignItems="center"
                                                gap="10px"
                                            >
                                                <Phone sx={{ color: isDarkMode ? '#EFEFEF' : "#11142D" }} />
                                                <Typography
                                                    fontSize={14}
                                                    color={isDarkMode ? '#EFEFEF' : '#11142d'}
                                                    noWrap
                                                >
                                                    {phonenumber}
                                                </Typography>
                                            </Box>
                                        </Stack>

                                        <Stack flex={1} gap="15px">
                                            <Typography
                                                fontSize={14}
                                                fontWeight={500}
                                                color={isDarkMode ? '#6F767E' : '#808191'}
                                            >
                                                Email
                                            </Typography>
                                            <Box
                                                display="flex"
                                                flexDirection="row"
                                                alignItems="center"
                                                gap="10px"
                                            >
                                                <Email sx={{ color: isDarkMode ? '#EFEFEF' : "#11142D" }} />
                                                <Typography
                                                    fontSize={14}
                                                    color={isDarkMode ? '#EFEFEF' : '#11142d'}
                                                >
                                                    {email}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                    {type === 'My' ? <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: 2.5,
                        }}
                    >
                        <CustomButton
                                title={"Edit"}
                                backgroundColor="#475BE8"
                                color="#FCFCFC"
                                fullWidth
                                icon={<Edit />}
                                handleClick={() => {
                                        navigator(
                                            `/my-profile/edit/${user.userid}`,
                                        )
                                }}
                            />
                    </Box> : ''}
                    
                </Box>
            </Box>

            {properties.length > 0 && (
                <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor={isDarkMode ? "#1A1D1F":"#FCFCFC"}>
                    <Typography fontSize={18} fontWeight={600}  color={isDarkMode ? '#EFEFEF' : '#11142d'}>
                        {type} Properties
                    </Typography>

                    <Box
                        mt={2.5}
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 2.5,
                        }}
                    >
                        {properties?.map((property: PropertyProps) => (
                            <PropertyCard
                                key={property._id}
                                id={property._id}
                                title={property.title}
                                location={property.location}
                                price={property.price}
                                photo={property.photo}
                                isDarkMode={isDarkMode}
                            />
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default Profile;