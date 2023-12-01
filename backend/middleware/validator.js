const { check, validationResult } = require('express-validator');



// register validation
exports.registerRules = () => [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Must be a valid email'),
    check('password').isLength({
        min: 6,
        max: 20,
    }).withMessage('Password must be at least 6 characters long'),
];

// login validation

exports.loginRules = () => [

    check("email", "email is required").notEmpty(),
    check("email", "check email again").isEmail(),
    check("password", "password must be between 6 characters and 20 characters").isLength({
        min: 6,
        max: 20,
    }),
];

// validator
exports.validator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array().map(error => error.msg) });
    }
    next();
}
