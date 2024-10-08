export interface CustomButtonProps {
    type?: string;
    title: string;
    backgroundColor: string;
    color: string;
    fullWidth?: boolean;
    icon?: ReactNode;
    disabled?: boolean;
    handleClick?: () => void;
}

export interface ProfileProps {
    type: string;
    name: string;
    avatar: string;
    email: string;
    banner: string;
    role: string;
    address: string;
    phonenumber: string;
    properties: Array | undefined;
    isDarkMode: boolean
}

export interface PropertyProps {
    _id: string;
    title: string;
    description: string;
    location: string;
    price: string;
    photo: string;
    creator: string;
}

export interface FormProps {
    type: string;
    register: any;
    onFinish: (
        values: FieldValues,
    ) => Promise<
        void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>
    >;
    formLoading: boolean;
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
    handleImageChange: (file) => void;
    onFinishHandler: (data: FieldValues) => Promise<void> | void;
    propertyImage: { name: string; url: string };
    isDarkMode:boolean
}

export interface ProfileEditFormProps {
    type: string;
    register: any;
    onFinish: (
        values: FieldValues,
    ) => Promise<
        void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>
    >;
    formLoading: boolean;
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
    handleBannerImageChange: (file) => void;
    handleAvatarImageChange: (file) => void;
    onFinishHandler: (data: FieldValues) => Promise<void> | void;
    bannerImage: { name: string; url: string };
    avatarImage: { name: string; url: string };
    isDarkMode: boolean
}