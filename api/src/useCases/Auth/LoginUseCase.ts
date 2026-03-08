import generateAccessToken from "../../middleware/generateAccessToken";
import { generateRefreshToken } from "../../middleware/generateRefreshToken";
import userDomain from "../../models/domain/auth/user/userDomain";

import { userRepo } from "../../repo/auth/userRepo/userRepo";

interface ILoginDTO
{
  email:string;
  password:string;
}


export default class LoginUseCase 
{
        private    _loginUserRepo!: userRepo;
        private     _userDomain: userDomain = new userDomain()
        constructor(loginUserRepo: userRepo)
        {
            this._loginUserRepo = loginUserRepo

        }

        async execute(dto: ILoginDTO): Promise<any> 
        {

        
             
            try {

         
                console.log("dtoooooooo login ",dto )
             
                    const user = await this._loginUserRepo.FindUserByEmailLogin(dto.email);
           console.log("uuuuuuuuuuuu  ",user)

     if (!user) 
        {
                return  {success:false,message:"user not found  "};
        } 
  
   console.log("this._userDomain  ",this._userDomain)


    const isMatch = await this._userDomain.comparePassword(dto.password, user.password);
    

    console.log("  isMatch  ",isMatch)
 if (!isMatch) 
     {
        return  {success:false,message:"Invalid credentials "};
     }
//      const oldRefreshToken = req.cookies.refreshToken;
//      if (oldRefreshToken) {
//        try {
//          // Decode old token (no error means valid, expired will throw)
//          const payload: any = jwt.verify(oldRefreshToken, process.env.REFRESH_TOKEN_SECRET!);
//          console.log("Old refresh token valid, user:", payload.email);
//          // هنا يمكن اختيار حذف القديم أو تسجيل أي شيء (audit log)
//        } catch (err) {
//          // إذا انتهت صلاحية التوكن أو غير صالح
//          console.log("Old refresh token expired or invalid, will ignore");
//        }
//      }


 const accessToken = await generateAccessToken(user.email, user.role, user.id);
 const refreshToken = await generateRefreshToken(user.email, user.role, user.id);


                
const resultLogin = { accessToken, refreshToken, user: { id: user.id, email: user.email, role: user.role } }

         return {success:true ,data:resultLogin}
            } catch (error:any) {
                console.log("eee ",error)
            }

        }
}