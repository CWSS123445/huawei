const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");
const ResultJson = require("../model/ResultJson");

router.currentService = ServiceFactory.createComputerService();



router.get('/getComputerById/:id', async (req, resp) => {
      let computer = await ServiceFactory.createComputerService().getById(req.params.id);
      resp.json(new ResultJson(true, "获取成功", computer));
})

router.get("/getListByPage", async (req, resp) => {
      let PageList = await ServiceFactory.createComputerService().getListByPage(req.query);
      resp.json(new ResultJson(true, "数据获取成功", PageList));
});



module.exports = router;