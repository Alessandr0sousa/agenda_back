const con = require('../db');
const uniq = require('uniqid');
const ins = 'INSERT INTO pessoa set ?';
const up = 'Update pessoa Set ? where id_ps ?'

module.exports = {
    async index(req, res) {
        // console.log(uniq());
        con.query('SELECT * FROM pessoa', (err, rows) => {
            try {
                res.json(rows);
            } catch (error) {
                console.error(err);
            }
        });
    },
    async show(req, res) {
        con.query('SELECT * FROM pessoa where id_ps = ?', [req.params.id], (err, rows) => {
            try {
                res.json(rows);
            } catch (error) {
                console.error(err);
            }
        });
    },
    async destroy(req, res) {
        con.query('Delete from pessoa where id_ps = ?', [req.params.id], (err, rows) => {
            try {
                res.send('Successfully deleted');
            } catch (error) {
                console.error(err);
            }
        });
    },
    async store(req, res) {
        con.query(ins, [req.body], (err, rows) => {
            try {
                console.log('Successfully inserted');
                res.json(rows);
            } catch (error) {
                res.json(err);
            }
        });
    },
    async update(req, res) {
        con.query(up, [req.body, req.params.id], (err, rows) => {
            try {
                console.log("Successfully changed");
                res.json([req.body]);
            } catch (error) {
                console.error("Erro: ", error);
            }
        });
    }
}