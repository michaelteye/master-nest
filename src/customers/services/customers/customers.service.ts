import { Customer } from './../../types/Customer';
import { CreateCustomerDto } from './../../dtos/CreateCustomer.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    private customers:Customer[] = [
        {
        id:1,
        email:'demo@gmail.com',
        name:'Mike'
       },
       {
        id:2,
        email:'sip@gmail.com',
        name:'smith'
       },
]

findCustomerById(id: number){
    return this.customers.find((user)=>user.id === id)
}
createCustomer(customerDto:CreateCustomerDto){
    this.customers.push(customerDto);
}

getCustomers(){
    return this.customers;
}
    
}
