const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserRepository = require('../repository/user-repository');
const { JWT_KEY } = require('../config/serverConfig');
// const { where } = require('sequelize');
const AppError = require('../utils/error-handler');


class UserService{
    constructor() {
        this.userRepository = new UserRepository();
    }
    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            if(error.name == 'SequelizeValidationError') {
                throw error;
            }
            console.log("Something went wrong in the service layer", error);
            throw new AppError(
                'ServerError', 
                'Something went wrong in service layer',
                'Logical issue found',
                500);
        }
    }

    async signIn(email, plainPassword) {
        try {
            const user = await this.userRepository.getByEmail(email);
            const passwordsMatch = this.checkPassword(plainPassword, user.password );
            
            if(!passwordsMatch){
                console.log("Password doesn't match");
                throw {error: 'Incorrect password'};
            }

            const newJWT = this.createToken({email: user.email, id: user.id});
            return newJWT;
        } catch (error) {
            if(error.name == 'AttributeNotFound') {
                throw error
            }
            console.log("Something went wrong in the sign in process");
            throw error;    
        }
    }

    async isAuthenticated(token) {
        try {
            const response = this.verifyToken(token);
            if(!response){
                throw { error: 'Invalid token'};
            }

            const user = this.userRepository.getById(response.id);
            if(!user) {
                throw { error: 'No user with the corresponding token exist'};
            }
            return user.id;
        } catch (error) {
            console.log("Something went wrong in the auth process");
            throw error;
        }
    }

    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, {expiresIn: '1d' });
            return result;
        } catch (error) {
            console.log("Something went wrong while creating token", error);
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in token validation", error);
            throw error;
        }
    }

    checkPassword(userInputPlainPassword, encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in password comaparison");
            throw error;
        }
    }

    isAdmin(userId){
        try {
            return this.userRepository.isAdmin(userId)
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }
}

module.exports = UserService; 