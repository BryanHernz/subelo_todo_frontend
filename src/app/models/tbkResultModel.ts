export interface TbkResultModel{
    buy_order:String;
    session_id:String;
    card_detail:{card_number:String};
    vci:String;
    amount:number;
    status:String;
    accounting_date:String
    transaction_date:Date;
    authorization_code:String;
    payment_type_code:String;
    response_code:number;
    installments_number:number;
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}