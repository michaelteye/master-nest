import { CreateCustomerDto } from './../../dtos/CreateCustomer.dto';
import { CustomersService } from './../../services/customers/customers.service';
import { Body, Controller, Get, 
         HttpException, Param, ParseIntPipe, 
         Post, Req, Res, UsePipes,
         ValidationPipe } from '@nestjs/common';
import { Response } from 'express';

@Controller('customers')
export class CustomersController {
    constructor(private customersService:CustomersService){}

    @Get('/search/:id')
    searchCustomerById(@Param('id',ParseIntPipe) id:number){
        const customer = this.customersService.findCustomerById(id);
        if(customer) return customer;
        else throw new HttpException('Customer Not Found',400)
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomerDto:CreateCustomerDto){
        return this.customersService.createCustomer(createCustomerDto)
    }

    @Get('')
    getAllCustomer(){
        return this.customersService.getCustomers()
    }
}
