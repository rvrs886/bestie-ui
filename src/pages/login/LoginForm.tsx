import {
    Button,
    Center,
    Group,
    Paper,
    TextInput,
    alpha,
    InputLabel,
    Flex,
    Box,
    Title
} from "@mantine/core";
import {useForm} from "@mantine/form";
import {AuthPage} from "../auth/AuthPage";

export function LoginForm() {

    const loginForm = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            password: ''
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
        }
    })

    return (
        <AuthPage>
            <Paper bg={alpha("white", 0.20)} shadow="lg" p="xl" radius="md">
                <Center>
                    <Title size="25" c="white" mb="md">Login page</Title>
                </Center>
                <form onSubmit={loginForm.onSubmit((values) => console.log(values))}>
                    <Flex gap="sm" w="18vw" pb="xs" direction="column">
                        <Box>
                            <InputLabel c="white" size="md">E-mail</InputLabel>
                            <TextInput
                                withAsterisk
                                size="md"
                                placeholder="your@email.com"
                                key={loginForm.key('email')}
                                {...loginForm.getInputProps('email')}
                            />
                        </Box>
                        <Box>
                            <InputLabel c="white" size="md">Password</InputLabel>
                            <TextInput
                                size="md"
                                withAsterisk
                                placeholder="password"
                                key={loginForm.key('password')}
                                {...loginForm.getInputProps('password')}
                            />
                        </Box>

                        <Group justify="flex-end" mt="md">
                            <Button size="md" type="submit" color="gray">Submit</Button>
                        </Group>
                    </Flex>
                </form>
            </Paper>
        </AuthPage>
    )
}