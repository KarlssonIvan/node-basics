import validator from 'validator'
import { name } from "./utils.js";
import {getNotes} from './notes';
import {Logger} from './logger';

Logger.log(getNotes());
Logger.success(name);
Logger.warrning(validator.isEmail("karlsson.ivan@gmail.com"));