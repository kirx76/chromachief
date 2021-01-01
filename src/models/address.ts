// export interface IAddress {
//   id?: number;
//   city?: string;
//   country?: string;
//   street?: string;
// }

import {IAddress} from "../entities/address";

export class AddressModel {
  id?: number;
  city?: string;
  country?: string;
  street?: string;

  constructor(address: IAddress) {
    this.id = address?.id;
    this.city = address?.city;
    this.country = address?.country;
    this.street = address?.street;
  }
}