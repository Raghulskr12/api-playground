import mongoose from "mongoose";

const subscriptionSchema= new mongoose.Schema(
    {
        name:
        {type:String,
        required:[true,'subscription name is required'],
        trim:true,
        minLength:2,
        maxLength:100,
        },
         price :
         {
            type:Number,
            required:[true,'price is required'],
            min:[0,'Prize must be greater than zero'],
            max:[1000,'Prize must be less than 1000'],

         },
         currency:
         {
            type:String,
            enum:['USD','EUR','GBP','INR'],
            default:'USD',  
         },
         frequency:
         {
            type:String,
            enum:['monthly','yearly','daily','weekly'],

         },
         category:
         {
            type:String,
            enum:['entertainment','education','productivity','health','other'],
         },
         paymentMethod:
         {
            type:String,
            required:[true,'payment method is required'],
            trim:true,

         },
         status:
         {
            type:String,
            enum:['active','inactive','canceled','paused'],
            default:'active',   
         },
         startDate:
         {
            type:Date,
            required:[true,'start date is required'],   
            validate:
            {
                validator:(value) => value <= new Date(),
                message:'start date cannot be in the future',
            }
         },
         renewalDate:
         {
            type:Date,
            required:[true,'renewal date is required'],
            validate:   
            {
                validator:function(value) {
                    return value > this.startDate;
                },
                message:'renewal date must be after start date',
            }
         },
         user:
         {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:[true,'user id is required'],
            index:true,
         }
    },
{ timestamps: true });


subscriptionSchema.pre('save',function(next) {
    if(!this.renewalDate)
    {
        const renewalPeriods ={
            daily:1,
            weekly:7,           
            monthly:30,
            yearly:365,
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);


    }

});
