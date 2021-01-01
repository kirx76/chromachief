import {IAddress} from "./address";

export interface User {
  id?: number;
  fullName?: string;
  email?: string;
  address: IAddress;
}