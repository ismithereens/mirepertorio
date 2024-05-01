import pool from '../config/db.js';
const agregarCancion = async (datos) => {
    const agregarDatos = {
        text: 'insert into canciones (titulo,artista,tono) values ($1,$2, $3) returning *',
        values: datos
    }
    try {
        const response = await pool.query(agregarDatos);
        console.log(response.rows);
        return response.rows;
    } catch (err) { console.log(err) }
}
const getCancion = async () => {
    try {
        const consultarCanciones = { text: "select * from canciones" };

        const response = await pool.query(consultarCanciones);
        console.log(response.rows);
        return response.rows;
    } catch (err) { console.log(err) }
}
const deleteCancion = async (id) => {
    const borrarCancion = {
        text: 'delete from canciones where id = $1 returning *',
        values: [id]
    }
    try {
        const result = await pool.query(borrarCancion);
        console.log(result.rows);
        if (result.rowCount == 0) {
            throw new Error("Cancion no encontrada");
        }
        return result.rows;
    } catch (err) { console.log(err) }
}
const updateCancion = async (titulo, artista, tono, id) => {
    const actualizarCancion = {
        text: 'update canciones set titulo = $1, artista = $2, tono = $3 where id = $4 returning *',
        values: [titulo, artista, tono, id],
    }
    try {
        const result = await pool.query(actualizarCancion);
        console.log(result.rows);
        return result.rows;
    } catch (err) { console.log(err) }
}
export { getCancion, agregarCancion, deleteCancion, updateCancion }