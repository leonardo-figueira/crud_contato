import db from "../config/database.js";

db.run(
    `CREATE TABLE IF NOT EXISTS contato (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        dt_nascimento DATE NOT NULL,
        genero TEXT NOT NULL
    )`
);

function createContatoRepository(novoContato) {
    return new Promise((resolve, reject) => {
        const {
            nome,
            email,
            dt_nascimento,
            genero
        } = novoContato;

        db.run(
            `INSERT INTO contato(nome, email, dt_nascimento, genero)
            VALUES (?,?,?,?)`,
            [nome, email, dt_nascimento, genero],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        msg: "Contato salvo com sucesso",
                        id: this.lastID,
                        novoContato
                    });
                }
            }
        );
    });
}

function findAllContatoRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM contato`,
            [],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

function findContatoByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT * FROM contato
            WHERE id = ?`,
            [id],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

function updateContatoRepository(id, dadosContato) {
    return new Promise((resolve, reject) => {
        const {
            nome,
            email,
            dt_nascimento,
            genero
        } = dadosContato;
    
        db.run(
            `UPDATE contato
            SET nome          = ?,      
                email         = ?,
                dt_nascimento = ?,
                genero        = ?
            WHERE id = ?`,
            [nome, email, dt_nascimento, genero, id],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        message: "Produto editado com sucesso"
                    });
                }
            }
        );
    });    
}

function deleteContatoRepository(id) {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM contato
            WHERE id = ?`,
            [id],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        message: "Produto excluído com sucesso"
                    });
                }
            }
        )
    });
}

export default {
    createContatoRepository,
    findAllContatoRepository,
    findContatoByIdRepository,
    updateContatoRepository,
    deleteContatoRepository
}