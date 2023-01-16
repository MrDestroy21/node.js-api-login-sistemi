const joi = require("joi")
const APIError = require("../../utils/errors")

class authValidations {
    constructor() {}
    static register = async (req , res , next) =>{
        try {
            
            await joi.object({
                name : joi.string().trim().min(3).max(100).required().messages({
                    "string.base" : "isim alanı normal metin olmalıdır" , 
                    "string.empty" : "isim alanı boş geçilmez" , 
                    "string.min" : "isim alanı en az 3 karakter olmak zorundadır" ,
                    "string.max" : "isim alanı en fazla 100 karakter olmak zorundadır" ,
                    "string.required" : "isim alanı zorunludur "
                }) ,
                lastname : joi.string().trim().min(3).max(100).required().messages({
                    "string.base" : "soyad alanı normal metin olmalıdır" , 
                    "string.empty" : "soyad alanı boş geçilmez" , 
                    "string.min" : "soyad alanı en az 3 karakter olmak zorundadır" ,
                    "string.max" : "soyad alanı en fazla 100 karakter olmak zorundadır" ,
                    "string.required" : "soyad alanı zorunludur "
                }) ,
                email : joi.string().trim().min(3).max(100).required().messages({
                    "string.base" : "email alanı normal metin olmalıdır" , 
                    "string.empty" : "email alanı boş geçilmez" , 
                    "string.email" : "email alanı lütfen geçerli bir email girini.",
                    "string.min" : "email alanı en az 3 karakter olmak zorundadır" ,
                    "string.max" : "email alanı en fazla 100 karakter olmak zorundadır" ,
                    "string.required" : "email alanı zorunludur "
                }) ,
                password : joi.string().trim().min(6).max(30).required().messages({
                    "string.base": "şifre alanı normal metin olmalıdır" , 
                    "string.empty": "şifre alanı boş geçilmez" , 
                    "string.min": "şifre alanı en az 6 karakter olmak zorundadır" ,
                    "string.max": "şifre alanı en fazla 36 karakter olmak zorundadır" ,
                    "string.required": "şifre alanı zorunludur "
                }),
            }).validateAsync(req.body);
        }
        catch (error) {
            if (error.datail && error?.datails[0].message)
            throw new APIError(error.details[0].message, 400)
            else throw new APIError("lütfen validasyon kurallarına uyun " , 400)
        }
        next()
    }

}

module.exports = authValidations