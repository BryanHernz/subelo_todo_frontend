import { FrequentQuestionModel } from "./frequentQuestionModel";

export interface FrequentQuestionCategoryModel{
    id?:number;
    name:String;
    faqs?:FrequentQuestionModel[];
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}