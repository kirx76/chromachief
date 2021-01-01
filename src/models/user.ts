import {IAddress} from "../entities/address";
import {User} from "../entities/user";
import {AddressModel} from "./address";

export class UserModel {
  id?: number;
  fullName?: string;
  email?: string;
  address: IAddress;

  constructor(user: User) {
    this.id = user?.id;
    this.fullName = user?.fullName;
    this.email = user?.email;
    this.address = new AddressModel(user?.address);
  }

}