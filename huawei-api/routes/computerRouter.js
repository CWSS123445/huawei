const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");
const ResultJson = require("../model/ResultJson");

router.currentService = ServiceFactory.createComputerService();

router.get("/getListByPage", async (req, resp) => {
      let pageList = await ServiceFactory.createComputerService().getAllList(req.query);
      resp.json(new ResultJson(true, "获取成功", pageList));

});

router.get('/getComputerById/:id', async (req, resp) => {
      let computer = await ServiceFactory.createComputerService().getById(req.params.id);
      resp.json(new ResultJson(true, "获取成功", computer));
})


module.exports = router;