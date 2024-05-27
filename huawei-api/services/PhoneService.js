/**
 * 数据表cost_detail_info的操作
 */
const BaseService = require('./BaseService');

class PhoneService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.phone;
    }


    async getById(id) {
        let sql = `select * from ${this.currentTable} 
        where id = ? and  is_del = 0`;
        return this.executeSql(sql, [id]);
    }
}

module.exports = PhoneService;