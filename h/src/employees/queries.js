const getEmployees = "SELECT * FROM employees";
const getEmployeesById = "SELECT * FROM employees WHERE id = $1";
const checkEmailExists = "SELECT s FROM employees s WHERE s.email = $1";
const addEmployee = "INSERT INTO employees (name, email, age, dob) VALUES ($1, $2, $3, $4)";

module.exports = {
    getEmployees,
    getEmployeesById,
    checkEmailExists,
    addEmployee,
};
