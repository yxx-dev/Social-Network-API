const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: { type:String, required: true, unique: true, trim: true },
        email: { type:String, required: true, unique: true, 
            match: [/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, 'Please fill a valid email address']
        },
        thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought'}], //id ref to thought model
        friends: [{ type: Schema.Types.ObjectId, ref: 'user'}] //id ref to user model
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false, //true/false?
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;