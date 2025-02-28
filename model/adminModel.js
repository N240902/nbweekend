import pool from '../config/config.js'
 
 const getAdmins = async ()=>{
    let [data] = await pool.query('SELECT * from admins');
    return data;
}

const getSingleAdmin = async (id) => {
    let [data] = await pool.query('SELECT * from admins WHERE id = ?', [id])
    return data;
};

const addNewAdmin = async (username, email, password)=>{
    await pool.query("INSERT INTO admins(`username`,`email`,`password`)values(?,?,?)",[username, email, password])
    return await getAdmins();
}

const deleteSingleAdmin = async (id) => {
    let [data] = await pool.query('DELETE FROM admins WHERE id = ?', [id])
    return data;
}

const updateAdmin = async ( username, email, password) => {
    await pool.query(
        'UPDATE `customers_database`.`admins` SET `id` = ?, `password` = ?, `username` = ? WHERE `id` = ?',
        [username, email, password]
    );
    return await getAdmins();
 };
 export {getAdmins,getSingleAdmin,addNewAdmin,deleteSingleAdmin,updateAdmin}
//  module.exports = mongoose.model('Customers', Customers_database);