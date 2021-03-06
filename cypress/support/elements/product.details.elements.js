export default class ProductDetailsElements {

    //<H1> Title of Product
    titleProduct () { return 'h1[itemprop=name]"'}

    //<SPAN> Price of Product
    priceProduct () { return '#our_price_display[itemprop=price]'}

    //<INPUT> Quantity of Product
    quantityProduct () { return 'input#quantity_wanted'}

    //<A> Buttom for plus Quantity of Product
    plusBtnQuantityProduct () {return 'quantity_wanted_p > a.product_quantity_up'}

    //<A> Buttom for minus Quantity of Product
    minusBtnQuantityProduct () {return 'quantity_wanted_p > a.product_quantity_down'}

    //<SELECT> List of Sizes Avaible to Product
    selectSizeAvaibleProduct () {return '#uniform-group_1 select#group_1'}

    //<UL> List of Colors avaible to Product
    listColorsAvaibleProduct () { return '#color_to_pick_list > li'}

    //<H2> Success message to added shooping cart
    successMessageAddShopCartProduct () { return '#layer_cart > div > div > h2'}


}