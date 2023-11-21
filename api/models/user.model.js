const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  avatar: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'User email is required'],
    unique: true,
   
  },
  password: {
    type: String,
    required: 'User password is required',
    minlength: [6, 'User password needs at least 6 characters'],
  },
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;

      if (ret.avatar) {
        ret.avatar = `http://localhost:3000/${ret.avatar.replace("public/", "")}`;
      }

      delete ret._id;
      delete ret.__v;
      delete ret.password;
      return ret;
    },
  },
});

userSchema.pre('save', function (next) {
  const user = this;

  if (user.isModified('password')) {
    bcrypt.hash(user.password, WORK_FACTOR)
      .then((hash) => {
        user.password = hash;
        next();
      })
      .catch((error) => next(error));
  } else {
    next();
  }
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
