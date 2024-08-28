import { Home } from "./Home";
import { MyTheme } from '../../Components/Theme';
import { ThemeProvider } from '@mui/material';
import { Header } from "../../Components/Header/Header";


function App() {
    return (
      <div>
        <ThemeProvider theme={MyTheme}>
          <Header />
        <Home />
        </ThemeProvider>
      </div>
     
    );
  }
  
  export default App;