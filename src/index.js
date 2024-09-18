import express from 'express';
import morgan from'morgan';
import { engine } from 'express-handlebars';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import almacenRoutes from './routes/almacen.routes.js';

import alamacenRoutes from './routes/almacen.routes.js';
import clientesRoutes from './routes/clientes.routes.js';
//Initilizacion
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Añadir las rutas de Almacén
app.use(almacenRoutes);
app.use(almacenRoutes);

//setings
app.set('port', process.env.PORT || 3000);
                        //Configurando carpeta de las vistas
app.set('views', join(__dirname, 'views'));
                        //Configurar motor de plantillas
app.engine('hbs', engine({
    defaultLayout:'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine','.hbs');

//Middlewares   
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.render('index');
}) 

app.use(clientesRoutes,alamacenRoutes);

//Public  Files
app.use(express.static(join(__dirname, 'public')));

//Run server
app.listen(app.get('port'), () => 
    console.log('cargando el puert',app.get('port'))
);