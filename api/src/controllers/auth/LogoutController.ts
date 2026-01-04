import { BaseController } from "../../infra/BaseCOntroller";


export default class LogoutController extends BaseController
{

      protected async executeImpl(): Promise<void> {
           // no need to do anything special for logout in stateless JWT auth
           return ;
      }
    
    
}