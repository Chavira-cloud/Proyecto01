//clase de los productos
class Product {
 constructor(name,price,year){
    this.name= name;
    this.price = price;
    this.year = year;
 } 
}

//clase con la que iterara el HTML  
class UI{
    addProduct(product){
      const productList= document.getElementById("product-list");
      const element=  document.createElement("div");
      element.innerHTML =`
      <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product Name</strong>: ${product.name}
                <strong>Product price</strong>: ${product.price}
                <strong>Product year</strong>: ${product.year}
                <a href="#" class="btn btn-danger" name ="delete">Delete </a>
            </div>
      </div>
      `;

      productList.appendChild(element);
    }

    resetFrom(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
        }
    }

    showMessage(messega, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} `;
        div.appendChild(document.createTextNode(messega));
        //showing in DOM
        const container = document.querySelector('.Container');
        const app= document.querySelector('#App');
    }

}       

//DOM EVENT

document.getElementById('product-form').addEventListener('submit',function (e){
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    
    const product= new Product(name,price, year);
  
    const ui = new UI(); 
    ui.addProduct(product);
    ui.resetFrom();
    
    e.preventDefault();
});


document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI(); 
    ui.deleteProduct(e.target);
});