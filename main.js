

import  express  from "express"
import fs from "fs"


class ProductManager{
    
    constructor(){
       
        this.products = []
        this.path= "./products.json"
    }
 
    
    getProducts = () => this.products
    
    addProducts = (id,title,description,price,thumbnail,code,stock= 7 , ) =>{  
        const product ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id,
            
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
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// const fs = require("fs")

const newProduct = new ProductManager()
newProduct.addProducts(1,"Tomate" , "fruta roja y versatil al comer" , "300 el kilo" )
newProduct.getProductsById(1)
const newProduct2 = new ProductManager()
newProduct2.addProducts(2,"Cebolla" , "verdura rica y con varias capas" , "250 el kilo" )
newProduct2.getProductsById(2)

let productos = JSON.stringify(newProduct)
let productos2 = JSON.stringify(newProduct2)
let losProductos = productos + productos2


  
const manejoProductos = async ()=> {
    
    let productos = JSON.stringify(newProduct)
    let productos2 = JSON.stringify(newProduct2)
    
    
    try {
        await fs.promises.writeFile("./products.json" , ` [ ${productos} ,` , "utf-8")
        console.log("se agregaron los productos")
    } catch (error) {
        console.log(error)
    }
    try {
        await fs.promises.appendFile("./products.json" , `${productos2} ]` , "utf-8")
        console.log("se agregaron nuevos productos")
    } catch (error) {
        console.log(error)
    }  
         getProductos = async () => {
        try {
        if (fs.existsSync(this.path)) {
        const data = await fs.promises.readFile(this.path, 'utf-8')
        const products = JSON.parse(data)
        console.log(products)
        return products
        }
        await fs.promises.writeFile(this.path, '[]', 'utf-8')
        return []
        } catch (err) {
        console.error(err)
        }
        }
      
               
    // try {
        //     await fs.promises.unlink ("./products.json" , "utf-8")
        //     console.log("se borro")
        // } catch (error) {
            //     console.log(error)
            // } aca cree el borrar el archivo,lo comente para que pueda ver la funcionabilidad de el resto
            
        }
       
        manejoProductos()
     
      
        app.get("/products" , (req,res )=>{
            res.send(getProductos())
        })
    
    
        app.listen( PORT, err=>{
            if (err) console.log(err)
            console.log(`Escuchando en el puerto ${PORT}`)
    
        })
