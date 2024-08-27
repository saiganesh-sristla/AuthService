const { JWT_KEY } = require('../config/serverConfig');
const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {User} = require('../models/index')
class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw error;
        }
    }

    createToken(user){
        try {
            const token = jwt.sign(user, JWT_KEY, {expiresIn: "1d"})
            return token;
        } catch (error) {
            console.log("something went wrong creating token");
            throw error;
        }
    }

    verifyToken(token){
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("something went wrong verifying the token");
            throw error;
        }
    }

    comparePassword(plainPassword, hashPassword){
        try {
            const response = bcrypt.compareSync(plainPassword, hashPassword);
            return response;
        } catch (error) {
            console.log("something went wrong comparing password");
            throw error;
        }
    }

    async getUserByEmail(email){
        try {
            const response = await User.findOne({
                where:{
                    email:email
                }
            })
            return response
        } catch (error) {
            console.log("something went wrong getting email");
            throw error;
        }
    }
}

module.exports = UserService;