import { Router } from 'express';

const router = Router();

// LISTADO
router.get('/list', async (req, res) => {
    try {
        // Aquí iría la lógica para obtener la lista de clientes
        res.render('clientes/list');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// AÑADIR
router.get('/add', (req, res) => {
    res.render('clientes/add');
});

router.post('/add', async (req, res) => {
    try {
        // Aquí iría la lógica para añadir un nuevo cliente
        res.redirect('/list');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ACTUALIZAR
router.get('/edit/:id', async (req, res) => {
    try {
        // Aquí iría la lógica para obtener los datos del cliente para editar
        res.render('clientes/edit');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/edit/:id', async (req, res) => {
    try {
        // Aquí iría la lógica para actualizar el cliente
        res.redirect('/list');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
