import { OrderModel } from "./orderModel";

export interface OrderStateModel{
    id?:number;
    orders:OrderModel[];
    stateOrder:String;
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}