import express from 'express';
process.loadEnvFile();
import path from 'path';
import router from './routes/routes.js'
const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/assets')))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/', router);
p.listen(PORT, ()=> console.log(`Servidor hosteado en el puerto: ${PORT}`));

