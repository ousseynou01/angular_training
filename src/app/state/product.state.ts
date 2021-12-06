export enum DataStateEnum{

 LOADING,
 LOADED,
 ERROR,
    
    
}

export enum ProductActionsTypes{
    GET_ALL_PRODUCTS="[Products] Get All products",
    GET_SELECTED_PRODUCTS="[Products] Get Selected products",
    GET_AVAILABLE_PRODUCTS="[Products] Get Available products",
    SEARCH_PRODUCTS="[Products] Search products",
    NEW_PRODUCTS="[Products] New products",
    SELECT_PRODUCT="[Products] select product ", 
    EDIT_PRODUCT= "[Products] edit product",
    DELETE_PRODUCT="[Products] delete product"

}

export interface ActionEvent{

    type: ProductActionsTypes,
    payload?:any
}

export interface AppDataState<T>{

    dataState?: DataStateEnum,
    data?: T,
    errorMessage?: string    


}