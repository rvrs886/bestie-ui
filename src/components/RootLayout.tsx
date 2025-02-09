import {Center, Container, getGradient, useMantineTheme} from "@mantine/core";
import {FunctionComponent, PropsWithChildren} from "react";


export const RootLayout: FunctionComponent<PropsWithChildren> = ({ children })=> {
    const theme = useMantineTheme()
    return (
        <Container fluid bg={getGradient({deg: 10, from: 'cyan.3', to: 'red.4'}, theme)}>
            <Center h="100vh">
                {children}
            </Center>
        </Container>
    )
}