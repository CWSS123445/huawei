/**
 * 数据表cost_detail_info的操作
 */
const BaseService = require('./BaseService');

class MateService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.mate;
    }
 
   
    async  getById(id){
        let sql=`select * from ${this.currentTable} 
        where id = ? and  is_del = 0`;
         return this.executeSql(sql,[id]);
     }

     async getListByPrice({minPrice,maxPrice}){
        let sql=`select * from ${this.currentTable} 
        where mate_price between ? and ? and  is_del = 0`;
         return this.executeSql(sql,[minPrice,maxPrice]);
     }
     async getListByComment(){
        // 根据评论数排序
        let sql=`select * from ${this.currentTable} 
        where is_del = 0 order by mate_comment`;


        return this.executeSql(sql,[]);
     }
}

module.exports = MateService;