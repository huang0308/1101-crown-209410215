const db = require('../utils/database');

const category_15 = class Category_15 {
    constructor(id, name, size, remote_url, local_url, link_url){
        this.id = is;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
        this.link_url = link_url;
    }

    //get all categories
    static async fetchAll(){
        try{
            let results = await db.query(`SELECT * from category_15`);
            console.log('results', JSON.stringify(results.row));
            return results.rows;
        } catch (e) {
            console.log('error', e);
        }
    }
};


//const test = async () => {
//    let results = await category_15.fetchAll;
//            console.log('results', JSON.stringify(results.row));
// }

//test();
module.exports = Category_15;
