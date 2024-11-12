import {createTheme, MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import {RegisterForm} from "./pages/register/RegisterForm";

function App() {

    const appTheme = createTheme({
        fontFamily: 'Mona Sans, sans-serif',
        primaryColor: 'blue'
    })

  return (
      <MantineProvider theme={appTheme}>
        <RegisterForm />
      </MantineProvider>
  );
}

export default App;