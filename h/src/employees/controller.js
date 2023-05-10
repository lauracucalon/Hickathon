const pool = require('../../db');
const queries = require('./queries');

const getEmployees = (req, res) => {
    pool.query(queries.getEmployees, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getEmployeesById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getEmployeesById, [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const addEmployee = (req, res) => {
    const { name, email, age, dob } = req.body;

    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists.");
        }
        pool.query(
            queries.addEmployee,
            [name, email, age, dob],
            (error, results) => {
                if (error) throw error;
                res.status(201).send("Employee Created Successfully.");
            }
        );
    });
};

module.exports = {
    getEmployees,
    getEmployeesById,
    addEmployee,
};