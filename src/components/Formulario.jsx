import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from 'react';


const Formulario = ({ handleSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [promociones, setPromociones] = useState(true)
  const [noticias, setNoticias] = useState(false)

  const [errores, setErrores] = useState({
    nombre: "",
    apellido: "",
    correo: ""
  })

  const validar = () => {
    const erroresTemp = { }

    if(!nombre.trim()){
      erroresTemp.nombre = 'falta el nombre'
    }
    if(!apellido.trim()){
      erroresTemp.apellido = 'falta el apellido'
    }
    if(!correo.trim()){
      erroresTemp.correo = "falta el correo"
    }else if (!/\S+@\S+\.\S+/.test(correo)) {
      erroresTemp.correo = "El correo no tiene un formato válido.";
    }

    setErrores(erroresTemp)
    return Object.keys(erroresTemp).length === 0;
  }

  return <>
    <form onSubmit={(e) => {
      e.preventDefault()
      if(validar()){
        handleSubmit({ nombre, apellido, correo, promociones, noticias })
      }else{
        console.log('la validacion no paso')
      }
      
    }}>
      <TextField
        id="nombre"
        label="Nombre"
        variant="outlined"
        fullWidth margin="normal"
        onChange={(e) => setNombre(e.target.value)}
        error={Boolean(errores.nombre)}
        helperText={errores.nombre}
      />

      <TextField 
      id="apellido" 
      label="Apellido" 
      variant="outlined" 
      fullWidth 
      margin="normal" 
      onChange={(e) => setApellido(e.target.value)} 
      error={Boolean(errores.apellido)}
      helperText={errores.apellido}
      />

      <TextField 
      id="correo" 
      label="Correo" 
      variant="outlined" 
      fullWidth 
      margin="normal" 
      onChange={(e) => setCorreo(e.target.value)} 
      error={Boolean(errores.correo)}
      helperText={errores.correo}
      />

      <FormGroup>
        <FormControlLabel control={<Switch checked={promociones} onChange={(e) => setPromociones(e.target.checked)} />} label="Promociones" />
        <FormControlLabel control={<Switch checked={noticias} onChange={(e) => setNoticias(e.target.checked)} />} label="Noticias" />
      </FormGroup>
      <Button type="submit" variant="contained" color="primary" >
        Enviar
      </Button>
    </form>
  </>
}

export default Formulario