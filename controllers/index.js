const productos = require('../data/menu.json')

module.exports={
    home:(req,res)=>{
        
        return res.render('index',{productos})
    }

}