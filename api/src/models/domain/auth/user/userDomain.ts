import bcrypt from 'bcrypt';
import { Role } from '../../../user';


export default class userDomain {
    protected id?: number;
    protected firstName: string = "";
    protected lastName: string ="";
    protected phone: string ="";
    protected email: string ="";
    protected password?: string ="";
    protected role?: string ="";
    protected city?: string;
    protected address?: string;

    // constructor(
    //     firstName: string,
    //     lastName: string,
    //     phone: string,
    //     email: string,
    //     password?: string,
    //     role?: string,
    //     city?: string,
    //     address?: string,
    //     id?: number,
    // ) {
    //     this.id = id;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.phone = phone;
    //     this.email = email;
    //     this.password = password;
    //     this.role = role;
    //     this.city = city;
    //     this.address = address;
    // }

    constructor()
    {}

    // ======== GETTERS =========
    public get getId(): number | undefined {
        return this.id;
    }

    public get getFirstName(): string {
        return this.firstName;
    }

    public get getLastName(): string {
        return this.lastName;
    }

    public get getPhone(): string {
        return this.phone;
    }

    public  get getEmail(): string {
        return this.email;
    }

    public get getPassword(): string | undefined {
        return this.password;
    }

    public get  getRole(): string | any {
        return this.role;
    }

    public get getCity(): string | undefined {
        return this.city;
    }

    public get getAddress(): string | undefined {
        return this.address;
    }

    // ======== SETTERS =========
   

    public set setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    public set setLastName(lastName: string) {
        this.lastName = lastName;
    }

    public set setPhone(phone: string) {
        this.phone = phone;
    }

    public set setEmail(email: string) {
        this.email = email;
    }

    public  static async setPasswordHashed(password: string) {

     await   userDomain.hashPassword(password)

        //this.password = password;
    }

public set setPassword(password: string) {
        const pass:any = userDomain.hashPassword(password);
        this.password = pass;
    }


    public set setRole(role: string) {
        this.role = role.toUpperCase();
    }

    public set setCity(city: string) {
        this.city = city;
    }

    public set setAddress(address: string) {
        this.address = address;
    }

    public static async hashPassword(valuePassword:string): Promise<any> {
        if (valuePassword) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(valuePassword, saltRounds);
        // = hashedPassword;
        return hashedPassword;
        }
    }
}
