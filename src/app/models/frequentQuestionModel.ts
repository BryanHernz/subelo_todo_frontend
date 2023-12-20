import { FrequentQuestionCategoryModel } from "./frequentQuestionCategoryModel";

export interface FrequentQuestionModel{
    id?:number;
    question:String;
    answer:String;
    image?:String;
    faqCategoryId?:number;
    faqCategory?:FrequentQuestionCategoryModel;
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}