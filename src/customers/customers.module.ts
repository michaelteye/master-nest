import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(ValidateCustomerMiddleware)
    .exclude(
      {path:'/create', method: RequestMethod.POST}
    )
    .forRoutes(CustomersController);
    
  }
}
