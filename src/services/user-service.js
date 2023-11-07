import { UserRepository } from "../repository/index.js";

class UserService{
    constructor(){
        this.userRepository=new UserRepository();
        console.log('inside the constructor')
    }

    async signUp(data){
        try {
            console.log("Data",data)
            const user=await this.userRepository.create(data);
            return user; 
        } catch (error) {
           throw error;
        }
    }
}

export default UserService;