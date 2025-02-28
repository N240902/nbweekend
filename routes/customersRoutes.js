// customersRouter.js
import express from 'express';
const router = express.Router();

import {addNewCustomerCon,deleteSingleCustomerCon,updateCustomerCon} from "../controller/customersController.js";

router.delete('/:id', deleteSingleCustomerCon);
router.post('/:',addNewCustomerCon );
router.patch('/:id', updateCustomerCon);


export default router;






