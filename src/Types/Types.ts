import * as React from "react"
export interface User {
    email:string,
    password : string,
    firstName : string,
    lastName : string,
    street : string,
    city : string,
    cart? : Cart[],
    accessToken? : string,
    providerData? : {},
    refreshToken? :  string,
    phoneNumber? : string,

}
export interface Cart{
    product : Product,
    quantity : number
}
export interface Product{
    id : number,
    name : string,
    star : number,
    image : string,
    description : string,
    price : number
}
export interface UserState{
    user : User,
    isLoggedIn : boolean,
    cartMessage  : string | undefined,
    buyNowProduct : Cart | undefined,
    cart? : Cart[]
}
export interface RouteProp {
    children : React.ReactNode
    isLoggedIn : boolean;
}
export type HeaderProp = {
    handleInputField:() =>void
}
export type ThemeContextType = {isDark : boolean, toggleMode :() => void}

export interface AddToCartProp {
    isCartOpen : boolean,
    handleCart : () =>void,
    cart : Cart[]
}
export type LogoutProp = {
    isOpen:boolean, 
    onClose : () =>void,
    onConfirm : () =>void
}
export type loginFormValues = {
    email : string,
    password  :string
}
export type SignUpForm = {
    currentPage : number,
    setCurrentPage : (num:number) =>void,
    FormTitle : string[]
}
export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}
export type ProductProp ={
    data : Product[], 
    heading? :string
}
export interface Debounce{
    value :string,
    delay  :number
}
export interface ContentProps {
    heading  :string,
    subHeading : string,
    text : string,
    buttonValue : string
}
export interface ImageProp {
    image : string | null
}
export interface SummaryProp{
    user : User,
    buyNowProduct  :Cart | undefined
}
export interface Address{
    street : string,
    city : string
}
export const userObject = {email: '', password : '', firstName :'', lastName : '', city : '', street : '', cart : []}