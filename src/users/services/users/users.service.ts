import { SerializedUser } from './../../types/index';
import { User} from '../../types/index';
import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer'

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            username:'star',
            password:'demo'
        },
        {
            username:'max',
            password:'demo'
        },
        {
            username:'fine',
            password:'demo'
        },
    ];
    getUser(){
        return this.users.map((user)=> plainToClass(SerializedUser, user))
    }
    getUserByUsername(username:string){
       return  this.users.find((user)=> user.username === username);
    }
}
