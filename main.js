class ProductManager{

    constructor(){
        this.products = []
        this.patch = "./"
    }
 
    getProducts = () => this.products

    addProducts = (id,title,description,price,thumbnail,code,stock= 7) =>{  
    const product ={
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id
    }
    if (this.products.length === 0){
        this.products.id = 1
    } else{
        product.id = this.products[this.products.length -1 ].id +1
    }
    this.products.push(product)
    }
    getProductsById = ()=>{
        const result = this.products.find( (products) => products.code === newProduct.code);
        if(result){
           return this.products.code 
        }else{
            "Not Found"
        }
    }

}

const fs = require("fs")

const newProduct = new ProductManager()
newProduct.addProducts("Tomate" , "fruta roja y versatil al comer" , "300 el kilo" )
newProduct.getProductsById(1)
const newProduct2 = new ProductManager()
newProduct2.addProducts("Cebolla" , "verdura rica y con varias capas" , "250 el kilo" )
newProduct2.getProductsById(2)
console.log(newProduct2)
const manejoProductos = async ()=> {

    let productos = JSON.stringify(newProduct)
    let productos2 = JSON.stringify(newProduct2)
 

try {
    await fs.promises.writeFile("./productos.json" , `${productos}` , "utf-8")
    console.log("se agregaron los productos")
} catch (error) {
    console.log(error)
}
try {
    await fs.promises.appendFile("./productos.json" , `${productos2}` , "utf-8")
    console.log("se agregaron nuevos productos")
} catch (error) {
    console.log(error)
}
try {
    await fs.promises.readFile("./productos.json" , "utf-8")
    console.log("leido")
} catch (error) {
        console.log(error)
}
// try {
//     await fs.promises.unlink ("./productos.json" , "utf-8")
//     console.log("se borro")
// } catch (error) {
//     console.log(error)
// } aca cree el borrar el archivo,lo comente para que pueda ver la funcionabilidad de el resto

}
manejoProductos()