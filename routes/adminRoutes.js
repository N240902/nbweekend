// adminRouter.js
import express from 'express';
const router = express.Router();

import {getAdminCon,getSingleAdminCon,addNewAdminCon,deleteSingleAdminCon,updateAdminCon}  from "../controller/adminController.js";

router.get('/:', getAdminCon)
router.get('/:', getSingleAdminCon);
router.delete('/:id', deleteSingleAdminCon);
router.post('/:',addNewAdminCon );
router.patch('/:id', updateAdminCon);


export default router;