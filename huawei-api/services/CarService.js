/**
 * 数据表cost_detail_info的操作
 */
const BaseService = require('./BaseService');

class CarService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.car;
    }

    // 修改购物车中的数量
    addNum(id) {
        let sql = `update ${this.currentTable} set car_count=car_count+1 where id=${id}`;
        console.log(sql,id);
        return this.executeSql(sql,id);
    }
    reduceNum(id) {
        let sql = `update ${this.currentTable} set car_count=car_count-1 where id=${id}`;
        return this.executeSql(sql,id);
    }



}

module.exports = CarService;