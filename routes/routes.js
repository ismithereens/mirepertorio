import express from 'express';
import {getCancion, agregarCancion, deleteCancion, updateCancion} from '../queries/consultas.js';

const router = express.Router();

router.get('/', (req,res)=>{
    res.sendFile('../views/index.html')
})

router.post('/cancion', async(req,res)=>{
    const {titulo,artista,tono} = req.body;
    const datos = [titulo,artista,tono]
    const result = await agregarCancion(datos);

    res.json(result);
})

router.get('/canciones', async (req,res)=>{
    const canciones = await getCancion();
    console.log(canciones.rows);
    res.json(canciones);
})

router.put('/cancion/:id', async(req,res)=>{
    const {id} = req.params;
    const {titulo,artista,tono} = req.body;
    const result = await updateCancion(titulo,artista,tono,id);

    res.send(result)
    
})

router.delete('/cancion', async (req,res)=>{
    const {id} = req.query
    const result = await deleteCancion(id);

    res.send(result)
})



export default router;