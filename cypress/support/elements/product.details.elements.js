export default class ProductDetailsElements {

    //<H1> Title of Product
    titleProduct () { return 'h1[itemprop=name]'}

    //<SPAN> Price of Product
    priceProduct () { return '#our_price_display[itemprop=price]'}

    //<INPUT> Quantity of Product
    quantityProduct () { return 'input#quantity_wanted'}

    //<A> Buttom for plus Quantity of Product
    plusBtnQuantityProduct () {return '#quantity_wanted_p > a.product_quantity_up'}

    //<A> Buttom for minus Quantity of Product
    minusBtnQuantityProduct () {return '#quantity_wanted_p > a.product_quantity_down'}

    //<SELECT> List of Sizes Avaible to Product
    selectSizeAvaibleProduct () {return '#uniform-group_1 select#group_1'}

    textSelectedSize () {return '#uniform-group_1 > span'}

    //<UL> List of Colors avaible to Product
    listColorsAvaibleProduct () { return '#color_to_pick_list'}

    //Btn add product in to shop cart
    btnAddShopCart() { return '#add_to_cart > button'}

    //<H2> Success message to added shooping cart
    successMessageAddShopCartProduct () { return '#layer_cart > div > div > h2'}

    //<SPAN> Name product in success layer
    nameProductSuccessLayer () { return '#layer_cart_product_title'}

    //<SPAN> Value of total price of product in success layer
    priceProductSuccessLayer () { return '#layer_cart_product_price'}

    //<SPAN> Value of total quantity of product in success layer
    quantityProductSuccessLayer () { return '#layer_cart_product_quantity'}

    //<SPAN> Value of total quantity of product in success layer
    attributesProductSuccessLayer () { return '#layer_cart_product_attributes'}

    //<SAPAN> Close Btn Layer
    btnCloseLayer () { return `[title="Close window"]` }


}