export interface SignUp{
    name:string,
    phone:number,
    email:string,
    password:string,
    c_password:string
}

export interface login{
    email:string,
    password:string
}

export interface product{
    name:string,
    color:string,
    description:string,
    price:number,
    category:string,
    image:string,
    id:number
}