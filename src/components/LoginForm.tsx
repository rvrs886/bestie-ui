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
import {RootLayout} from "./RootLayout";
import {useAuth} from "../utils/AuthContext";
import {useState} from "react";

export function LoginForm() {
    const { login } = useAuth();

    const loginForm = useForm({
        mode: 'uncontrolled',
        initialValues: {
            username: '',
            password: ''
        },

        validate: {
            username: (value) => (value ? null : 'Field must be filled')
        }
    })

    const [error, setError] = useState<string | null>(null); // To handle login errors

    const handleSubmit = async (values: { username: string; password: string }) => {
        const { username, password } = values;
        try {
            await login(username, password); // Call login function
            setError(null); // Clear any previous error
        } catch (error) {
            setError("Login failed. Please check your credentials."); // Show error message
        }
    };

    return (
        <RootLayout>
            <Paper bg={alpha("white", 0.20)} shadow="lg" p="xl" radius="md">
                <Center>
                    <Title size="25" c="white" mb="md">Login page</Title>
                </Center>
                <form onSubmit={loginForm.onSubmit(handleSubmit)}>
                    <Flex gap="sm" w="18vw" pb="xs" direction="column">
                        <Box>
                            <InputLabel c="white" size="md">E-mail</InputLabel>
                            <TextInput
                                withAsterisk
                                size="md"
                                placeholder="username"
                                key={loginForm.key('username')}
                                {...loginForm.getInputProps('username')}
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
        </RootLayout>
    )
}