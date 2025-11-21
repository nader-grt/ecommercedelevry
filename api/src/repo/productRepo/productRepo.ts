import productRepoInterface from "./productRepoInterface";

export default class productRepo extends productRepoInterface {
  public async FindAllProducts() {}

  public async FindProductById(id: number): Promise<void> {}
}
