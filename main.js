class ProductManager{

    constructor(){
        this.products = []
    }
 
    getProducts = () => this.products

    addProducts = (title,description,price,thumbnail,code,stock= 7) =>{  
    const product ={
        title,
        description,
        price,
        thumbnail,
        code,
        stock
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

const newProduct = new ProductManager()
newProduct.addProducts("Tomate" , "verdura roja y versatil al comer" , "300 el kilo" )
newProduct.getProductsById(1)
console.log(newProduct)

