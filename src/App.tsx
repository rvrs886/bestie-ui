import {createTheme, MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import {RegisterForm} from "./components/RegisterForm";
import {RootLayout} from "./components/RootLayout";
import {LoginForm} from "./components/LoginForm";
import {AuthProvider} from "./utils/AuthContext";

function App() {

    const appTheme = createTheme({
        fontFamily: 'Mona Sans, sans-serif',
        primaryColor: 'blue'
    })

    return (
        <MantineProvider theme={appTheme}>
            <AuthProvider>
                <RootLayout>
                    <LoginForm/>
                </RootLayout>
            </AuthProvider>
        </MantineProvider>
    );
}

export default App;