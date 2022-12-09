import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from './dto';
import { IUser } from './interface';

const userProjection = {
  __v: false,
  createdAt: false,
  updatedAt: false,
};

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}
  public async getUsers() {
    const user = this.userModel.find({}, userProjection);
    if (!user) {
      throw new HttpException('User not found', 404);
    }
    return user;
  }
  public async postUser(newUser: CreateUserDto) {
    const user = await this.userModel.create(newUser);
    return user;
  }
  public async getUserById(id: string) {
    const user = this.userModel.findOne({ _id: id }, userProjection);
    if (!user) {
      throw new HttpException('User not found', 404);
    }
    return user;
  }

  public async patchUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<any> {
    const user = await this.userModel.findOneAndUpdate(
      { _id: id },
      updateUserDto,
    );
    if (!user) {
      throw new HttpException('Not Found', 404);
    }
    return user;
  }

  public async deleteUser(id: string): Promise<any> {
    const user = await this.userModel.deleteOne({ _id: id });
    if (user.deletedCount === 0) {
      throw new HttpException('Not found', 404);
    }
    return user;
  }
}
