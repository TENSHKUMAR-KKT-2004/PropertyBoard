import React, { useState } from 'react'
import Form from '../../components/profile/Form'
import { useForm } from '@refinedev/react-hook-form'
import { useActiveAuthProvider, useGetIdentity, useOne } from '@refinedev/core';
import { FieldValues } from "react-hook-form"
import { useTheme } from '@mui/material';

const EditProfile = () => {
  const authProvider = useActiveAuthProvider();
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  })

  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user.userid
  });

  const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

  const myProfile = data?.data ?? [];

  const [bannerImage, setBannerImage] = useState({ name: "", url: "" })
  const [avatarImage, setAvatarImage] = useState({ name: "", url: "" })

  const { refineCore: { onFinish, formLoading }, register, handleSubmit } = useForm(
    {
      refineCoreProps: {
      resource: "users",
      action: "edit",
      // @ts-ignore
      id: myProfile._id,
    }
    }
  )

  const handleBannerImageChange = (file: File) => {
    const reader = (readFile: File) =>
      new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as string);
        fileReader.readAsDataURL(readFile);
      });

    reader(file).then((result: string) =>
      setBannerImage({ name: file?.name, url: result }),
    );
  }

  const handleAvatarImageChange = (file: File) => {
    const reader = (readFile: File) =>
      new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as string);
        fileReader.readAsDataURL(readFile);
      });

    reader(file).then((result: string) =>
      setAvatarImage({ name: file?.name, url: result }),
    );
  }

  const onFinishHandler = async (data: FieldValues) => {
    try {
      if (!bannerImage.name) return alert("Please upload a banner image");
      if (!avatarImage.name) return alert("Please upload a avatar image");
      await onFinish({
        ...data,
        banner: bannerImage.url,
        avatar: avatarImage.url,
        email: user?.email,
      });
    } catch (error) {
      console.error('Form submission error:', error);
    }
  }
  return (
    <Form
      type="Edit"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleBannerImageChange={handleBannerImageChange}
      handleAvatarImageChange={handleAvatarImageChange}
      onFinishHandler={onFinishHandler}
      bannerImage={bannerImage}
      avatarImage={avatarImage}
      isDarkMode={isDarkMode}
    />
  )
}

export default EditProfile