import express, { Request, Response } from "express";
import UserController from "../../controllers/users/createUserController";

export default class UserUseCase extends UserController {
  public static async CreateUser(): Promise<void> {}
}
