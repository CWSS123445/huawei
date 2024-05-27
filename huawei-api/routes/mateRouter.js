const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");
const ResultJson = require("../model/ResultJson");
const fs = require("fs");

router.currentService = ServiceFactory.createMateService();

router.get("/getListByPage", async (req, resp) => {
      let pageList = await ServiceFactory.createMateService().getAllList(req.params);
      resp.json(new ResultJson(true, "获取成功", pageList));
});

router.get("/getListByPrice/:minPrice/:maxPrice", async (req, resp) => {
      let pageList = await ServiceFactory.createMateService().getListByPrice(req.params);
      resp.json(new ResultJson(true, "获取成功", pageList));
});

router.get("/getListByComment", async (req, resp) => {
      let pageList = await ServiceFactory.createMateService().getListByComment();
      resp.json(new ResultJson(true, "获取成功", pageList));
});



module.exports = router;