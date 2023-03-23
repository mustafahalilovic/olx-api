import validator from "validator";

interface ValidateError {
    valid: Boolean;
    description: string;
};

export const validateData = (
    email: string, 
    password: string
    ): ValidateError =>{

    if(!validator.isEmail(email)) return {
        valid: false,
        description: 'Incorrect email format!'
    }; 

    if(validator.equals(password, 'password')) return {
        valid: false,
        description: 'Password cannot be set as "password"!'
    };

    if(password.length < 8) return {
        valid: false,
        description: 'Password cannot be less than 8 characters!'
    };

    if(!validator.isStrongPassword(password)) return {
        valid: false,
        description: 'Password is too weak!'
    };

    return {
        valid: true,
        description: 'Data is valid!'
    };
}