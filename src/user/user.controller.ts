import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, VerifyUserDto } from "./dto";
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  public async getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Post()
  public async postUser(@Body() user: CreateUserDto) {
    return this.userService.postUser(user);
  }
@Post('authenticate')
public async verifyUser(@Body() verifyUser: VerifyUserDto){
    return this.userService
}

  @Patch(':id')
  public patchUser(
    @Param('id')
    id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.patchUser(id, updateUserDto);
  }

  @Delete(':id')
  public async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
