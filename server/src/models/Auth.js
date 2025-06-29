// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// const authSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: [true, 'Username is required'],
//     unique: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     unique: true,
//     lowercase: true,
//     trim: true,
//   },
//   password: {
//     type: String,
//     required: [true, 'Password is required'],
//     minlength: 6,
//   },
//   role: {
//     type: String,
//     enum: ['user', 'admin'], // ✅ Allowed roles
//     default: 'admin', // or 'user' based on your preference
//   },
//   active: {
//     type: Boolean,
//     default: false,
//   },
//    resetPasswordToken: String,
//   resetPasswordExpire: Date,
  
// }, { timestamps: true });

// // Hash password before saving (only if modified or new)
// authSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();

//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (err) {
//     return next(err);
//   }
// });

// // Instance method to compare passwords
// // ✅ Compare password method
// authSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// const Auth = mongoose.models.Auth || mongoose.model('Auth', authSchema);
// export default Auth;





import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const authSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      minlength: 6,
    },
    provider: { type: String, default: 'google' },
    
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    active: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

// ✅ Hash password only if it exists and is modified
authSchema.pre('save', async function (next) {
  if (!this.isModified('password') || !this.password) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    return next(err);
  }
});

// ✅ Password comparison method (for local login only)
authSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Auth = mongoose.models.Auth || mongoose.model('Auth', authSchema);
export default Auth;
