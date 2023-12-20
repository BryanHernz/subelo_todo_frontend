import { ProductModel } from "./productModel";
import { UserModel } from "./userModel";

export interface QuestionModel{
    id?:number;
    userId:number;
    user?:UserModel;
    productId:number;
    product?:ProductModel;
    question:String;
    answer?:String;
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}