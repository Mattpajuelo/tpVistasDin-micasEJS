const productos = require('../data/menu.json')
module.exports={
    detalle:(req,res)=>{
        let id = +req.params.id
        let producto=productos.find(producto=> producto.id===id)
        //return res.send(producto)
        return res.render('detalleMenu',{producto})
    }

}