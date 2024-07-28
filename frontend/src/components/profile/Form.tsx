import { Box, Button, FormControl, FormHelperText, MenuItem, Select, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'

import CustomButton from '../common/CustomButton'

import { ProfileEditFormProps } from '../../interfaces/common'

const Form = ({ type, register, onFinish, formLoading, handleSubmit, handleBannerImageChange, handleAvatarImageChange, onFinishHandler, bannerImage, avatarImage, isDarkMode }: ProfileEditFormProps) => {
    return (
        <Box>
            <Typography
                fontSize={25} fontWeight={700}  color={isDarkMode ? '#EFEFEF' : '#11142d'}
            >
                {type} Profile
            </Typography>

            <Box
                mt={2.5} borderRadius={'15px'} padding={'20px'} bgcolor={isDarkMode ? "#1A1D1F":"#FCFCFC"}
            >
                <form style={{
                    marginTop: "20px", width: '100%', display: 'flex', flexDirection: 'column',
                    gap: '20px'
                }}
                    onSubmit={handleSubmit(onFinishHandler)}
                >
                    <FormControl>
                        <FormHelperText sx={{
                            fontSize: '16px', margin: '10px 0px', fontWeight: 500, color: isDarkMode ? '#EFEFEF' : '#11142d'
                        }}>
                            Edit Name</FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id='outline-basic'
                            color='info'
                            variant='outlined'
                            {...register('name', { required: true })}
                        />
                    </FormControl>
                    
                    <Stack direction={'row'} gap={4}>
                        <FormControl
                            sx={{
                                flex: 1
                            }}
                        >
                            <FormHelperText sx={{
                                fontSize: '16px', margin: '10px 0px', fontWeight: 500, color: isDarkMode ? '#EFEFEF' : '#11142d'
                            }}>
                                Email</FormHelperText>
                            <TextField
                                fullWidth
                                disabled
                                id='outline-basic'
                                color='info'
                                variant='outlined'
                                {...register('email', { required: true })}
                            />
                        </FormControl>

                        <FormControl>
                            <FormHelperText sx={{
                                fontSize: '16px', margin: '10px 0px', fontWeight: 500, color: isDarkMode ? '#EFEFEF' : '#11142d'
                            }}>
                                Role</FormHelperText>
                            <TextField
                                fullWidth
                                disabled
                                id='outline-basic'
                                color='info'
                                variant='outlined'
                                {...register('role', { required: true })}
                            />
                        </FormControl>
                    </Stack>

                    <FormControl>
                        <FormHelperText sx={{
                            fontSize: '16px', margin: '10px 0px', fontWeight: 500, color: isDarkMode ? '#EFEFEF' : '#11142d'
                        }}>
                            Edit Address</FormHelperText>
                        <TextareaAutosize
                            minRows={5}
                            required
                            placeholder='Write about the property...'
                            color='info'
                            style={{
                                width: '100%',
                                background: 'transparent',
                                fontSize: '16px',
                                borderColor: 'rgb(0,0,0,0.23)',
                                borderRadius: 6,
                                padding: 10,
                                color: '#919191'
                            }}
                            {...register('address', {
                                required: true
                            })}
                        />
                    </FormControl>

                    <FormControl>
                        <FormHelperText sx={{
                            fontSize: '16px', margin: '10px 0px', fontWeight: 500, color: isDarkMode ? '#EFEFEF' : '#11142d'
                        }}>
                            Edit Contact Number</FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id='outline-basic'
                            color='info'
                            variant='outlined'
                            {...register('phonenumber', { required: true })}
                        />
                    </FormControl>

                    <Stack direction={'row'} gap={4}>
                        <Stack direction={'column'} gap={1}
                            justifyContent={'center'} mb={2}
                        >
                            <Stack
                                direction={'row'} gap={2}
                            >
                                <Typography
                                    color={isDarkMode ? '#EFEFEF' : '#11142d'}
                                    fontSize={16}
                                    fontWeight={500}
                                    my={'10px'}
                                >
                                    Banner Picture
                                </Typography>

                                <Button
                                    component={'label'}
                                    sx={{
                                        width: 'fit-content',
                                        color: '#2ed480',
                                        textTransform: 'capitalize',
                                        fontSize: 16
                                    }}
                                >
                                    Upload *
                                    <input
                                        hidden
                                        accept='image/*'
                                        type='file'
                                        onChange={(e) => {
                                            // @ts-ignore
                                            handleBannerImageChange(e.target.files[0])
                                        }}
                                    />
                                </Button>
                            </Stack>

                            <Typography
                                fontSize={14} color={'#808191'}
                                sx={{
                                    wordBreak: 'break-all'
                                }}
                            >
                                {bannerImage?.name}
                            </Typography>
                        </Stack>

                        <Stack direction={'column'} gap={1}
                            justifyContent={'center'} mb={2}
                        >
                            <Stack
                                direction={'row'} gap={2}
                            >
                                <Typography
                                    color={isDarkMode ? '#EFEFEF' : '#11142d'}
                                    fontSize={16}
                                    fontWeight={500}
                                    my={'10px'}
                                >
                                    Avatar Picture
                                </Typography>

                                <Button
                                    component={'label'}
                                    sx={{
                                        width: 'fit-content',
                                        color: '#2ed480',
                                        textTransform: 'capitalize',
                                        fontSize: 16
                                    }}
                                >
                                    Upload *
                                    <input
                                        hidden
                                        accept='image/*'
                                        type='file'
                                        onChange={(e) => {
                                            // @ts-ignore
                                            handleAvatarImageChange(e.target.files[0])
                                        }}
                                    />
                                </Button>
                            </Stack>

                            <Typography
                                fontSize={14} color={'#808191'}
                                sx={{
                                    wordBreak: 'break-all'
                                }}
                            >
                                {avatarImage?.name}
                            </Typography>
                        </Stack>
                    </Stack>

                    <CustomButton
                        type="submit"
                        title={formLoading ? "Submitting..." : "Submit"}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                    />
                </form>

            </Box>
        </Box>
    )
}

export default Form