import{getAdmins,getSingleAdmin,addNewAdmin,deleteSingleAdmin,updateAdmin} from '../model/adminModel.js'

const getAdminCon = async (req,res) => {
    res.json({admins: await getAdmins()})
}
const getSingleAdminCon= async(req,res)=>{
    res.json({admins:await getSingleAdmin(req.params.id)})
}
const addNewAdminCon = async (req, res) => {
    
    let { username, email, password } = req.body
    console.log (req.body);
    res.json({admins: await addNewAdmin(username, email, password)})
}
const deleteSingleAdminCon = async(req,res)=>{
    res.json({admins:await deleteSingleAdmin(req.params.id)})
}
const updateAdminCon = async (req, res) =>{
    
    let {id,username, email, password} = req.body;
    console.log(req.body);
    res.json({ admins: await updateAdmin(req.params.id,username, email, password) });
}
export {getAdminCon,getSingleAdminCon,addNewAdminCon,deleteSingleAdminCon,updateAdminCon} ;


