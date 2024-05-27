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
router.post("/addCar",async (req, resp) => {
    let result = await ServiceFactory.createCarService().add(req.body);
    resp.json(new ResultJson(true, "添加成功",result.affectedRows));
})
router.post("/deleteById",async(req,resp)=>{
    let result = await ServiceFactory.createCarService().deleteById(req.body.id);
    resp.json(new ResultJson(true, "删除成功",result.affectedRows));
})
router.post("/deleteAll",async(req,resp)=>{
    let result = await ServiceFactory.createCarService().deleteAll(req.body);
    resp.json(new ResultJson(true, "删除成功",result.affectedRows));
})


module.exports = router;