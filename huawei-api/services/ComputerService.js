/**
 * 数据表cost_detail_info的操作
 */
const BaseService = require('./BaseService');
const PageList = require("../model/PageList");

class ComputerService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.computer;
    }


    async getById(id) {
        let sql = `select * from ${this.currentTable} 
        where id = ? and  is_del = 0`;
        return this.executeSql(sql, [id]);
    }

    async getListByPage({ pageIndex = 1 }) {
        let [listData, total_count] = await this.createQuery(this.currentTable)
            .setPageIndex(pageIndex)
            .getPageAndCount();
        return new PageList(pageIndex, total_count, listData);
    }
}

module.exports = ComputerService;