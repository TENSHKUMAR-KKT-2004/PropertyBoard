import { useState } from 'react'
import { useActiveAuthProvider, useGetIdentity } from '@refinedev/core'
import { useForm } from '@refinedev/react-hook-form'
import { FieldValues } from "react-hook-form"

import Form from '../../components/common/Form'
import { useTheme } from '@mui/material'

const CreateProperty = () => {
  const authProvider = useActiveAuthProvider();
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  })

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  const [propertyImage, setPropertyImage] = useState({ name: "", url: "" })
  const { refineCore: { onFinish, formLoading }, register, handleSubmit } = useForm()

  const handleImageChange = (file: File) => {
    const reader = (readFile: File) =>
      new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as string);
        fileReader.readAsDataURL(readFile);
      });

    reader(file).then((result: string) =>
      setPropertyImage({ name: file?.name, url: result }),
    );
  }

  const onFinishHandler = async (data: FieldValues) => {
    if (!propertyImage.name) return alert("Please select an image");
    await onFinish({
      ...data,
      photo: propertyImage.url,
      email: user.email,
    });
  }

  return (
    <Form
      type="Create"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      propertyImage={propertyImage}
      isDarkMode={isDarkMode}
    />
  )
}

export default CreateProperty