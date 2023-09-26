import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  @Get()
  async list() {
    return { users: [] };
  }

  @Get(':id')
  async show(@Param() param: any) {
    return { user: param };
  }

  @Put()
  async update(@Body() body) {
    return body;
  }

  @Post()
  async create(@Body() {email, name, password}: CreateUserDto) {
    return {email, name, password};
  }

  @Delete(':id')
  async delete(@Param() id: string) {
    return id;
  }
}
