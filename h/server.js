const express = require('express')
const employeesRoutes = require('./src/employees/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) =>
{
    res.send('Hello World');
});

app.post('/insert', (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const edad = req.body.edad;
    const fechaCumple = req.body.fecha_cumple;
  
    res.send('Datos recibidos');
  });

app.use('/api/v1/employees', employeesRoutes);

app.listen(port, () => console.log('app listening on port ${port}'));