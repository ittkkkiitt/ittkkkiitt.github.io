class Products {

    constructor() {
        this.classNameActive = `shop-item--active`;
        this.labelAdd = ' ';
        this.labelRemove = ' ';
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id); 
      
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;

        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
    
        }
        headerPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        Items.forEach(({ id, name, price, img, gender, sale }) => {
            let activeClass = '';
            let activeText = '';
            let actualSale = +sale;
            let actualPrice = +price;
            if (productsStore.indexOf(String(id)) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' '+this.classNameActive+' ';
                activeText = this.labelRemove;
            }
           
            if (actualSale !== 0 ) {
                actualPrice = Math.floor(+actualPrice - ((+actualPrice * +actualSale)/100)) ;
                htmlCatalog += `
                <div class = 'shop-item' data-sort = '${actualPrice}' data-gender = '${gender}' data-sale = '${actualSale}'>
                <div class = 'shop-inner-text ${activeClass}' onclick="productsPage.handleSetLocationStorage(this, '${id}');">${activeText}</div>
                <div class = 'shop-item__img' style = "background-image: url('${img}');" ></div>
              
                <span class = 'shop-item__name'>${name}</span>
                <span class = 'shop-item__price shop-item__sale' ><span class = 'shop-item__old-price'>€ ${price}</span><span class = 'shop-item__new-price'>€ ${actualPrice}</span></span>`;
            } else {
                htmlCatalog += 
                ` <div class = 'shop-item' data-sort = '${price}' data-gender = '${gender}' data-sale = '${actualSale}'>
                <div class = 'shop-inner-text  ${activeClass} ' onclick="productsPage.handleSetLocationStorage(this, '${id}');">${activeText}</div>
                <div class = 'shop-item__img' style = "background-image: url('${img}');"></div>
                <span class = 'shop-item__name'>${name}</span>
                <span class = 'shop-item__price' >€ ${price}</span>`;
            }
             htmlCatalog += `
            </div>
            `;
 
        });

        const html = htmlCatalog;
        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();