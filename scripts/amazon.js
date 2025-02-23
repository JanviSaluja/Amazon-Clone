// Combine HTML together
let productsHTML = '';

// Generate HTML
products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image" src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                    ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                $${(product.priceCents / 100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
                Add to Cart
            </button>
        </div>
    `;
});

// Put the HTML on the page using DOM
document.querySelector(".js-products-grid").innerHTML = productsHTML;

// Event listener on add to cart button to make it interactive
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
        //get the name from the data attributes and save it in a variable
        const productId=button.dataset.productId; 

        //declare a variable for matching items.
        let matchingItem;
        //design a forEach loop to check if the product is already present in cart
        cart.forEach((item) =>{
            if(productId === item.productId){
                matchingItem=item;
            }
        })

        //if-else block to add a product or increase the quantity of a product
        if(matchingItem){
            matchingItem.quantity +=1;
        }else{
            cart.push({
                productId: productId,
                quantity:1
            });
        }

        //declare a variable to save the cart quantity
        let cartQuantity =0;
        //calculate total quantity to display on the screen
        cart.forEach((item)=>{
            cartQuantity += item.quantity;
        });

        document.querySelector(".js-cart-quantity").innerHTML=cartQsuantity;
    });
});