export default class ShopCartElements {

    //<A> Shop Cart
    shopCart () { return `[title="View my shopping cart"]`}

    //<tbody> Rows of Products in the shop cart
    tableProductsShopCart() { return `#cart_summary > tbody`}

    //<tr> Rows of Products in the shop cart
    rowProductShopCart() { return `#cart_summary > tbody > tr`}
}