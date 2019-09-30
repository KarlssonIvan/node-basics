import validator from 'validator'
import { name } from "./utils.js";
import {getNotes} from './notes';
import {Logger} from './logger';

console.log(getNotes())
console.log(name)
console.log(validator.isEmail('karlsson.ivan@gmail.com'));