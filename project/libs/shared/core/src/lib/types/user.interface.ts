import {UserRoleEnum} from "./user-role.enum";
import {BaseInterface} from "./base.interface";

export interface UserInterface extends BaseInterface {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  role: UserRoleEnum;
}
