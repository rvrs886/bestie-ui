import {alpha, Box, Button, Center, Flex, Group, InputLabel, Paper, TextInput, Title} from "@mantine/core";
import {useForm} from "@mantine/form";

export function RegisterForm() {

    const registerForm = useForm({
        mode: 'uncontrolled',
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            repeatedPassword: ''
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            firstName: (value) => (value ? null : 'Field must be filled'),
            lastName: (value) => (value ? null : 'Field must be filled'),
            phoneNumber: (value) => (value ? null : 'Field must be filled'),
            password: (value) => (value ? null : 'Field must be filled'),
            repeatedPassword: (value) => (value ? null : 'Field must be filled')
        }
    })

    return (
        <Paper bg={alpha("white", 0.20)} shadow="lg" p="xl" radius="md">
            <Center>
                <Title size="25" c="white" mb="md">Registration page</Title>
            </Center>
            <form onSubmit={registerForm.onSubmit((values) => console.log(values))}>
                <Flex gap="sm" w="18vw" pb="xs" direction="column">
                    <Box>
                        <InputLabel required c="white" size="md">First name</InputLabel>
                        <TextInput
                            withAsterisk
                            size="md"
                            placeholder="First name"
                            key={registerForm.key('firstName')}
                            {...registerForm.getInputProps('firstName')}
                        />
                    </Box>
                    <Box>
                        <InputLabel required c="white" size="md">Last name</InputLabel>
                        <TextInput
                            withAsterisk
                            size="md"
                            placeholder="Last name"
                            key={registerForm.key('lastName')}
                            {...registerForm.getInputProps('lastName')}
                        />
                    </Box>
                    <Box>
                        <InputLabel required c="white" size="md">E-mail</InputLabel>
                        <TextInput
                            withAsterisk
                            size="md"
                            placeholder="your@email.com"
                            key={registerForm.key('email')}
                            {...registerForm.getInputProps('email')}
                        />
                    </Box>
                    <Box>
                        <InputLabel required c="white" size="md">Phone number</InputLabel>
                        <TextInput
                            size="md"
                            withAsterisk
                            placeholder="Phone number"
                            key={registerForm.key('phoneNumber')}
                            {...registerForm.getInputProps('phoneNumber')}
                        />
                    </Box>
                    <Box>
                        <InputLabel required c="white" size="md">Password</InputLabel>
                        <TextInput
                            size="md"
                            withAsterisk
                            placeholder="Password"
                            key={registerForm.key('password')}
                            {...registerForm.getInputProps('password')}
                        />
                    </Box>
                    <Box>
                        <InputLabel required c="white" size="md">Repeat password</InputLabel>
                        <TextInput
                            size="md"
                            withAsterisk
                            placeholder="Repeat password"
                            key={registerForm.key('repeatedPassword')}
                            {...registerForm.getInputProps('repeatedPassword')}
                        />
                    </Box>

                    <Group justify="flex-end" mt="md">
                        <Button size="md" type="submit" color="gray">Submit</Button>
                    </Group>
                </Flex>
            </form>
        </Paper>
    )
}