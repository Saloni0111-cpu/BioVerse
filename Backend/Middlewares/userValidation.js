const Joi = require('joi');

const signupValidation = (req, res, next) => {
    const signupSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        confirmPassword: Joi.string().required()
    });

    const { error } = signupSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: error.details[0].message,
            success: false
        });
    }
    next();
};

const loginValidation = (req, res, next) => {
    const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: error.details[0].message,
            success: false
        });
    }
    next();
}
module.exports = { signupValidation, loginValidation };