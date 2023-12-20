import { CategoryModel } from "./categoryModel";
import { CityModel } from "./cityModel";
import { ProductImageModel } from "./productImage";
import { QuestionModel } from "./questionModel";
import { StateModel } from "./stateModel";
import { SubcategoryModel } from "./subcategoryModel";
import { UserModel } from "./userModel";

export interface ProductModel{
    id?:number;
    title:string;
    subcategoryId:number;
    subcategory?:SubcategoryModel;
    categoryId:number;
    category?:CategoryModel;
    userId?:number;
    height:number;
    weight:number;
    width:number;
    length:number;
    cityId:number;
    city?:CityModel;
    stateId:number;
    state?:StateModel;
    discount:number;
    user?:UserModel;
    approved:boolean;
    stock:number;
    ProductImages?:ProductImageModel[];
    questions?:QuestionModel[];
    description:string;
    condition:string;
    price:number;
    referencialPrice?:number;
    saleState:string; 
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}