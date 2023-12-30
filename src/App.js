import gif from './assets/Cute.gif'
import Topbar from "./scenes/global/Topbar";
import {Box, CssBaseline,ThemeProvider} from "@mui/material";
import {ColorModeContext,useMode} from "./theme";
import {Routes,Route} from "react-router-dom";


function App() {
  const[theme,colorMode]=useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="app">
      <main className="content">
        <Topbar/>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
          <img src={gif} alt="gif"/>
        </Box>
        

        <Routes>
          {/*<Route path="/" element={<Dashboard/>}/>
           <Route path="/team" element={<Team/>}/>
          <Route path="/invoices" element={<Invoices/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/bar" element={<Bar/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/line" element={<Line/>}/>
          <Route path="/pie" element={<Pie/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/geography" element={<Geography/>}/>
          <Route path="/calendar" element={<Calendar/>}/> */}

        </Routes>
      
      
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
