import { useLogin } from "@refinedev/core";
import { useEffect, useRef, useState } from "react";

import logo from '../assets/logo.svg'
import PropertyBoard from '../assets/PropertyBoard.svg'

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { CredentialResponse } from "../interfaces/google"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []);

    return <div ref={divRef} />;
  };

  const [selectedRole, setSelectedRole] = useState('');

    useEffect(() => {
        const storedRole = localStorage.getItem('userRole');
        if (storedRole) {
            setSelectedRole(storedRole);
        }
    }, []);

    const handleChange = (event: { target: { value: any; }; }) => {
        const newRole = event.target.value;
        setSelectedRole(newRole);
        localStorage.setItem('userRole', newRole);
    };

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        gap="36px"
        justifyContent="center"
        flexDirection="column"
      >
        <div>
          <img src={logo} alt="PropertyBoard Logo" />
          <img src={PropertyBoard} alt="PropertyBoard Logo" />
        </div>

        <Typography variant="h6" gutterBottom>
            Select Role
          </Typography>

          <FormControl fullWidth variant="outlined">
            <InputLabel id="role-select-label">Role</InputLabel>
            <Select
              labelId="role-select-label"
              id="role-select"
              value={selectedRole}
              onChange={handleChange}
              label="Role"
            >
              <MenuItem value={'customer'}>
                Customer
              </MenuItem>
              <MenuItem value={'agent'}>
                Agent
              </MenuItem>
            </Select>
          </FormControl>

        <GoogleButton />

        <Typography align="center" color={"text.secondary"} fontSize="12px">
          Contact Us ❤
        </Typography>
      </Box>
    </Container>
  );
};
