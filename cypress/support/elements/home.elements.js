export default class HomeElements {

    //Search Bar at Top on Home
    inputSearch () { return '#search_query_top'}

    //Btn Submit Search Form
    btnSubmitSeacrh () { return '#searchbox > button"'}

    //Div content Results Dropdown
    divResultsSearchDropDow () { return 'div.ac_results'}

    //UL results dropdown
    listResultsSearchDropDow () { return `${this.divResultsSearchDropDow()} > ul` }
}