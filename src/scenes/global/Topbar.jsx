import { Box, Typography } from "@mui/material";

function Topbar() {

  return (
    <Box display="flex" justifyContent="space-between" p={2} mb="100px">
      <Box
        display="flex"
        borderRadius="3px"
      >
        <Box >
          <Typography variant="h1" color="#004AAD" fontWeight="bold" sx={{mb:"5px"}}> Julieskul's world</Typography>
          <Typography variant="h5" color="#004AAD">Hola que cosa dici ceci est un teste de commit</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Topbar;
