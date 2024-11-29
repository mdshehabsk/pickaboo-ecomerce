import { User } from "./user.model"



export const getUser = async (id:string) => {
    const foundUser = await User.findById(id).select('-password -isEmailVerified')

    return foundUser
}


export const UserService = {
    getUser
}