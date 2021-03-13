const con = require('../db');
const uniq = require('uniqid');

const ins = 'INSERT INTO embarcacao set ?';
const up = 'Update embarcacao Set ? where id_emb ?'

module.exports = {
    async index(req, res) {
        console.log(uniq());
        con.query('SELECT * FROM embarcacao', (err, rows) => {
            try {
                res.json(rows);
            } catch (error) {
                console.error(err);
            }
        });
    },
    async show(req, res) {
        con.query('SELECT * FROM embarcacao where id_emb = ?', [req.params.id], (err, rows) => {
            try {
                res.json(rows);
            } catch (error) {
                console.error(err);
            }
        });
    },
    async destroy(req, res) {
        con.query('Delete from embarcacao where id_emb = ?', [req.params.id], (err, rows) => {
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