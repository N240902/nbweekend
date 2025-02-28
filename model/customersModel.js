import pool from '../config/config.js'


// const getCustomers = async ()=>{
//     let [data] = await pool.query('SELECT * from customer_info');
//     return data;
// }

// const getSingleCustomer = async (id) => {
//     let [data] = await pool.query('SELECT * from customer_info WHERE id = ?', [id])
//     return data;
// };

const addNewCustomer = async (username, email, password)=>{
    await pool.query("INSERT INTO customer_info(`username`,`email`,`password`)values(?,?,?)",[username, email, password])
    return await getCustomers();
}

const deleteSingleCustomer = async (id) => {
    let [data] = await pool.query('DELETE FROM customer_info WHERE id = ?', [id])
    return data;
}

const updateCustomer = async ( username, email, password) => {
    await pool.query(
        'UPDATE `customers_database`.`customer_info` SET `id` = ?, `password` = ?, `username` = ? WHERE `id` = ?',
        [username, email, password]
    );
    return await getCustomers();
 };
 export{addNewCustomer,deleteSingleCustomer,updateCustomer}
//  module.exports = mongoose.model('Customers', Customers_database);