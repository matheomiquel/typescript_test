import * as Joi from 'joi'
import { PangolinResponse } from './pangolin';
import {Pangolin } from '../../../domain'
const name = 'Matheo'
const email = 'matheo@gmail.com'
const password = 'password12'
const RegisterSchemaBody = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.base': `"name" should be a type of 'text'`,
            'string.min': `"name" should have a minimum length of {#limit}`,
            'string.max': `"name" should have a maximum length of {#limit}`,
            'any.required': `"name" is a required field`
        }).example(name),
    email: Joi.string()
        .email()
        .max(256)
        .required()
        .messages({
            'string.base': `"email" should be a type of 'text'`,
            'string.max': `"email" should have a maximum length of {#limit}`,
            'string.email': 'email must be valid',
            'any.required': `"email" is a required field`
        }).example(email),
    password: Joi.string()
        .min(8)
        .max(255)
        .required()
        .messages({
            'string.base': `"password" should be a type of 'text'`,
            'string.min': `"password" should have a minimum length of {#limit}`,
            'string.max': `"password" should have a maximum length of {#limit}`,
            'any.required': `"password" is a required field`
        })
        .example(password),
    role_id: Joi.number()
        .required()
        .example(1),
});

const RegisterSchemaResponse = Joi.object({
    pangolin: PangolinResponse,
    token: Joi.string().required()
})

type RegisterTypeResponse = {pangolin:Pangolin,token:string }

export { RegisterSchemaBody, RegisterSchemaResponse,RegisterTypeResponse };