import Formulario from './components/formulario'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
function App() {

  const handleSubmit = (data) => {
    console.log("los datos pasaron: ", data)
  }
  

  return (
    <>
      <Container component="section" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulario de registro</Typography>
        <Formulario handleSubmit={handleSubmit}/>
      </Container >
    </>
  )
}

export default App
