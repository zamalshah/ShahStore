const mainDiv = document.getElementById('main');
function fetchData()
{
        fetch('https://fakestoreapi.com/products')  //it return a promise
        .then((res)=>res.json())
        .then((data)=> displayData(data))
        .catch((err)=>console.log(err))

}
fetchData()
function displayData(products)
{
        // console.log(products); // print the data in console
        //print the each element
        products.forEach((p)=>{   
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');   // give class name to product div for css

                const productTitle = document.createElement('h2');
                productTitle.textContent = p.title;  

                const productPrice = document.createElement('p');
                productPrice.textContent = "Price: ₹"+p.price;     // ₹ cntr+shift+$

                const productImage = document.createElement('img');
                productImage.src = p.image;
                productImage.alt  =p.title;

                const productButton = document.createElement('button');
                productButton.textContent = "Add to Cart"
                productDiv.append(productImage,productTitle,productPrice,productButton);
                mainDiv.appendChild(productDiv);






        })

}