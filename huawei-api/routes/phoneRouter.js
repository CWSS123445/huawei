const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");
const ResultJson = require("../model/ResultJson");

router.currentService = ServiceFactory.createPhoneService();

router.get("/getListByPage", async (req, resp) => {
      let pageList = await ServiceFactory.createPhoneService().getAllList(req.params);
      
      resp.json(new ResultJson(true, "获取成功", pageList));

});

router.get('/getPhoneById/:id', async (req, resp) => {
      let phone = await ServiceFactory.createPhoneService().getById(req.params.id);
      resp.json(new ResultJson(true, "获取成功", phone));
})

module.exports = router;