import { ProductModel } from "./productModel";
import { UserModel } from "./userModel";

export interface NotificationModel{
    id?:number;
    userId:number;
    user?:UserModel;
    productId:number;
    product?:ProductModel;
    type:string;
    support:string;
    state:string;
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}