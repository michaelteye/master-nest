import { SerializedUser } from './../../types/index';
import { UsersService } from './../../services/users/users.service';

import { Controller, Get, Inject, Param, HttpException, HttpStatus, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(
        @Inject('USER_SERVICE') private readonly userService:UsersService,){}
    @Get()
    getUser(){
        return this.userService.getUser();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/:username')
    getByUsername(@Param('username') username:string){
        const user = this.userService.getUserByUsername(username);
        if(user) return new SerializedUser(user);
        else throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
    }
}
