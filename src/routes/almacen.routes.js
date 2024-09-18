import { Router } from 'express';

const router = Router();

// AÑADIR CATEGORÍA
router.get('/almacen/add-categoria', (req, res) => {
    res.render('almacen/add-categoria');
});

router.post('/almacen/add-categoria', async (req, res) => {
    const { nombreCategoria } = req.body;
    if (!nombreCategoria) {
        res.render('almacen/add-categoria', { error: 'El nombre de la categoría es requerido' });
    } else {
        // Lógica para guardar la categoría en la base de datos
        res.render('almacen/add-categoria', { success: 'Categoría añadida correctamente' });
    }
});

// LISTADO
router.get('/list-categoria', async(req, res)=>{
    try{
        res.render('almacen/list-categoria');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

// AÑADIR PRODUCTO
router.get('/almacen/add-producto', (req, res) => {
    res.render('almacen/add-producto');
});

router.post('/almacen/add-producto', async (req, res) => {
    const { nombreProducto, categoriaProducto, precioProducto } = req.body;
    if (!nombreProducto || !categoriaProducto || !precioProducto) {
        res.render('almacen/add-producto', { error: 'Todos los campos son obligatorios' });
    } else {
        // Lógica para guardar el producto en la base de datos
        res.render('almacen/add-producto', { success: 'Producto añadido correctamente' });
    }
});

// AÑADIR PROVEEDOR
router.get('/almacen/add-proveedor', (req, res) => {
    res.render('almacen/add-proveedor');
});

router.post('/almacen/add-proveedor', async (req, res) => {
    const { nombreProveedor, direccionProveedor, telefonoProveedor } = req.body;
    if (!nombreProveedor || !direccionProveedor || !telefonoProveedor) {
        res.render('almacen/add-proveedor', { error: 'Todos los campos son obligatorios' });
    } else {
        // Lógica para guardar el proveedor en la base de datos
        res.render('almacen/add-proveedor', { success: 'Proveedor añadido correctamente' });
    }
});

// AÑADIR MARCA
router.get('/almacen/add-marca', (req, res) => {
    res.render('almacen/add-marca');
});

router.post('/almacen/add-marca', async (req, res) => {
    const { nombreMarca } = req.body;
    if (!nombreMarca) {
        res.render('almacen/add-marca', { error: 'El nombre de la marca es requerido' });
    } else {
        // Lógica para guardar la marca en la base de datos
        res.render('almacen/add-marca', { success: 'Marca añadida correctamente' });
    }
});

export default router;
