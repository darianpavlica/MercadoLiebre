// Requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar
const express = require("express");
const app = express();

// Modulo nativo para manejar las rutas de los archivos
const path = require("path");

// Usando recursos estáticos.
app.use(express.static("public"));

// Ponemos a escuchar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:" + port)
});

// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});


app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});