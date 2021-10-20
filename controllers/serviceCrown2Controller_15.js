const Category_15 = require('../models/Category_15');

exports.getCategories = async (req, res) => {
    try {
        return await Category_15.fetchAll();
    } catch (err){
        console.log('getCategories', err);
    }
}