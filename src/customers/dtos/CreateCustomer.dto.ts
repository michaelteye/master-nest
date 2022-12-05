import { CreateAddressDto } from './CreateAddress.dto';
import {IsEmail, 
        IsNumberString, 
        IsNotEmpty, 
        ValidateNested,
        IsNotEmptyObject
        } from 'class-validator'
import { Type} from 'class-transformer'
export class CreateCustomerDto{
    @IsEmail()
    email:string;
    @IsNumberString()
    id:number;

    @IsNotEmpty()
    name:string;
// Validation for nested properties
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(()=> CreateAddressDto)
    address: CreateAddressDto;
}