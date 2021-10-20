const serviceCrown2Controller_15 = require('./serviceCrown2Controller_15');

exports.getCategories = async (req, res) => {
    try{
    let results = await serviceCrown2Controller_15.getCategories();
    console.log('results',JSON.stringify(results));
    res.render('crown2_15',{
      data: results,  
      title: 'crown2_15',
      name:'Tzujia Huang',
      id:`209410215`
    })

    }catch(err){
        console.log('crown2Controller getCategories',err);
    }
}