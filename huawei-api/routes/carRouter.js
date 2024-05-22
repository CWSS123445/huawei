const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");
const ResultJson = require("../model/ResultJson");
router.currentService = ServiceFactory.createCarService();

router.get("/getAllList", async (req, resp) => {
    let pageList = await ServiceFactory.createCarService().getAllList();
    resp.json(new ResultJson(true, "获取成功", pageList));
});

router.post("/addNum", async (req, resp) => {
    let result = await ServiceFactory.createCarService().addNum(req.body.id);
    resp.json(new ResultJson(true, "更新成功",result.affectedRows));
})
router.post("/reduceNum", async (req, resp) => {
    let result = await ServiceFactory.createCarService().reduceNum(req.body.id);
    resp.json(new ResultJson(true, "更新成功",result.affectedRows));
})


module.exports = router;