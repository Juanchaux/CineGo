import express from "express";
import cors from 'cors';
import db from "./database/db.js";
const app = express();

app.use(cors());
app.use(express.json());

try {
    db.authenticate()
    console.log("Conexión a la base de datos establecida");
} catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
}

app.listen(3000, () => {
    console.log("Servidor encendido en el puerto 3000");
});
