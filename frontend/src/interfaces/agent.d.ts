import { BaseKey } from "@refinedev/core";

export interface AgentCardProp {
    id?: BaseKey | undefined;
    name: string;
    email: string;
    avatar: string;
    address: string;
    phonenumber: string;
    noOfProperties: number;
    isDarkMode:boolean
}

export interface InfoBarProps {
    icon: ReactNode;
    name: string;
    isDarkMode:boolean
}
