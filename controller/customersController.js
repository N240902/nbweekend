import{addNewCustomer,deleteSingleCustomer,updateCustomer} from '../model/customersModel.js'
// const getCustomersCon = async (req,res) => {
//     res.json({customers: await getCustomers()})
// }
// const getSingleCustomerCon= async(req,res)=>{
//     res.json({customers:await getSingleCustomer(req.params.id)})
// 
const addNewCustomerCon = async (req, res) => {
    
    let { username, email, password } = req.body
    console.log (req.body);
    res.json({customers: await addNewCustomer(username, email, password)})
}
const deleteSingleCustomerCon = async(req,res)=>{
    res.json({customers:await deleteSingleCustomer(req.params.id)})
}
const updateCustomerCon = async (req, res) =>{
    
    let {id,username, email, password} = req.body;
    console.log(req.body);
    res.json({ customers: await updateCustomer(req.params.id,username, email, password) });
}
export {addNewCustomerCon,deleteSingleCustomerCon,updateCustomerCon} ;


