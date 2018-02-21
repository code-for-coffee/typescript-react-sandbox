import {validate, Contains, IsInt, Length, IsEmail, IsDate} from "class-validator";

export class AccountModel {
  @Length(10,22)
  username: string;

  @IsInt()
  age: number;

  @IsEmail()
  email: string;

  @IsDate()
  dateCreated: Date;

  static validate(account: AccountModel, onSuccess: any, onFail: any) {
    validate(account).then(errors => {
      if (errors.length > 0) {
        onFail(errors);
      } else {
        onSuccess()
      }
    })
  }
};