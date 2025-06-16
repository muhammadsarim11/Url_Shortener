import express from 'express';
import { short_url_controller } from '../conrolllers/short_url.controller.js';
const router =  express.Router()

router.post("/",short_url_controller)



export default router;
