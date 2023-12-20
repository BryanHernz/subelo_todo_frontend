import { ProductModel } from "./productModel";
import { SubcategoryModel } from "./subcategoryModel";

export interface CategoryModel{
    id?:number;
    name:String;
    subcategories?:SubcategoryModel[];
    logo?:String;
    banner?:String;
    products?:ProductModel[];
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}