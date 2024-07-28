import {EmailOutlined, LocationCity, Phone, Place} from "@mui/icons-material";
import { useActiveAuthProvider, useGetIdentity } from "@refinedev/core";
import {Box, Stack, Typography} from "@mui/material";
import { Link } from "react-router-dom";

import { AgentCardProp, InfoBarProps } from "../../interfaces/agent";

function checkImage(url: any) {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}

const InfoBar = ({ icon, name, isDarkMode }: InfoBarProps) => (
    <Stack
        flex={1}
        minWidth={{ xs: "100%", sm: 300 }}
        gap={1.5}
        direction="row"
    >
        {icon}
        <Typography fontSize={14} color={isDarkMode ? '#6F767E' : "#808191"}>
            {name}
        </Typography>
    </Stack>
);

const AgentCard = ({
    id,
    name,
    email,
    avatar,
    address,
    phonenumber,
    noOfProperties,
    isDarkMode
}: AgentCardProp) => {
  const authProvider = useActiveAuthProvider();
  const { data: currentUser } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  });

    const generateLink = () => {
        if (currentUser.email === email) return "/my-profile";

        return `/agents/show/${id}`;
    };

    return (
        <Box
            component={Link}
            to={generateLink()}
            width="100%"
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: "20px",
                padding: "20px",
                "&:hover": {
                    boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1)",
                },
            }}
        >
            <img
                src={
                    checkImage(avatar)
                        ? avatar
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                }
                alt="user"
                width={90}
                height={90}
                style={{ borderRadius: 8, objectFit: "cover" }}
            />
            <Stack
                direction="column"
                justifyContent="space-between"
                flex={1}
                gap={{ xs: 4, sm: 2 }}
            >
                <Stack
                    gap={2}
                    direction="row"
                    flexWrap="wrap"
                    alignItems="center"
                >
                    <Typography fontSize={22} fontWeight={600} color={isDarkMode ? '#EFEFEF' : '#11142d'}>
                        {name}
                    </Typography>
                    <Typography fontSize={14} color={isDarkMode ? '#6F767E' : '#808191'}>
                        Real-Estate Agent
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={2}
                >
                    <InfoBar
                        icon={<EmailOutlined sx={{ color: isDarkMode ? '#6F767E' : "#808191" }} />}
                        name={email}
                        isDarkMode={isDarkMode}
                    />
                    <InfoBar
                        icon={<Place sx={{ color: isDarkMode ? '#6F767E' : "#808191" }} />}
                        isDarkMode={isDarkMode}
                        name={address}
                    />
                    <InfoBar
                        icon={<Phone sx={{ color: isDarkMode ? '#6F767E' : "#808191" }} />}
                        isDarkMode={isDarkMode}
                        name={phonenumber}
                    />
                    <InfoBar
                        icon={<LocationCity sx={{ color: isDarkMode ? '#6F767E' : "#808191" }} />}
                        isDarkMode={isDarkMode}
                        name={`${noOfProperties} Properties`}
                    />
                </Stack>
            </Stack>
        </Box>
    );
};

export default AgentCard;