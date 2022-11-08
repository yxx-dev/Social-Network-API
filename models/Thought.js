const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId()}, //object ID generate
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type:String }, //required: true // ref?
    createdAt: { type:Date, default: Date.now } //getter method?
})

const thoughtSchema = new Schema(
    {
        thoughtText: { type:String, required: true, minLength: 1, maxLength: 280 },
        createdAt: { type:Date, default: Date.now }, //getter method?
        username: { type:String }, //required: true // ref?
        reactions: [reactionSchema]
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false, //true/false?
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

const thoughtData = [
    { thoughtText: 'thought1', reactions: [{ reactionBody: 'reaction1' }]}, //ObjectId()
];

Thought.create(
    thoughtData,
    (err, data) => {
        if (err) {
          console.error(err);
        }
        console.log(data);
    }
);

module.exports = Thought;