const UserModel = require('../Models/userSchema');

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    // Trim input fields
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    // Validate passwords match
    if (!trimmedPassword || !trimmedConfirmPassword || trimmedPassword !== trimmedConfirmPassword) {
      return res.status(400).json({
        message: 'Passwords do not match or are missing',
        success: false,
      });
    }

    // Check if user already exists
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: 'User already exists, you can login',
        success: false,
      });
    }

    // Create and save new user
    const userModel = new UserModel({
      firstName,
      lastName,
      email,
      password: trimmedPassword, // Password will be hashed by the pre('save') hook
    });

    await userModel.save();

    res.status(201).json({
      message: 'Signup successful',
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal server error',
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Trim input fields
    const trimmedPassword = password.trim();

    // Check if user exists
    const user = await UserModel.findOne({ email });
    console.log('User Found:', user);
    if (!user) {
      return res.status(403).json({
        message: 'Auth failed: email or password is wrong',
        success: false,
      });
    }

    // Compare passwords
    const isPasswordValid = await user.comparePassword(trimmedPassword);
    if (!isPasswordValid) {
      return res.status(403).json({
        message: 'Auth failed: email or password is wrong',
        success: false,
      });
    }

    // Generate JWT token
    const token = user.generateAuthToken();

    return res.status(200).json({
      message: 'Login success',
      success: true,
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal server error',
      success: false,
    });
  }
};

module.exports = {
  signup,
  login,
};