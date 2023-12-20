import { OrderStateModel } from "./orderStateModel";
import { ProductModel } from "./productModel";
import { ShipmentModel } from "./shipmentModel";
import { UserModel } from "./userModel";

export interface OrderModel{
    id?:number;
    userId:number;
    user?:UserModel;
    productId:number;
    product?:ProductModel;
    shipmentId:number;
    shipment?:ShipmentModel;
    orderStateId:number;
    orderState?:OrderStateModel;
    rejectedTitle:String;
    rejectedDescription:String;
    price:number;
    sellerPaid:boolean;
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}