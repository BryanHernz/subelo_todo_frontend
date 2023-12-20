import { OrderModel } from "./orderModel";
import { UserModel } from "./userModel";

export interface ShipmentModel{
    id?:number;
    userId:number;
    user?:UserModel;
    amount:number;
    token:String;
    vci:String ;
    status:String;
    buyOrder:String;
    sessionId:String;
    cardNumber:String;
    accountingDate:String;
    transactionDate:Date;
    autorizationCode:String;
    paymentTypeCode:String;
    responseCode:number;
    installmentsNumber:number;
    orders?:OrderModel[]
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}