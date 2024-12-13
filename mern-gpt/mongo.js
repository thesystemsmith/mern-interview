// document based no sql database
{
    "_id": ObjectId("1234"),
    "name": "Alice",
    "age": 25,
    "address": { "street": "123 Main St", "city": "Springfield" }
}

// crud

//create
const newUser = new User({ name: 'Alice', age: 25 });
await newUser.save();

// read
const user = await User.findOne({ name: 'Alice' });
console.log(user);

// update
await User.updateOne({ name: 'Alice' }, { $set: { age: 26 } });

// delete
await User.deleteOne({ name: 'Alice' });


// schema using mongoose
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
});

const User = mongoose.model('User', userSchema);

// aggregate
const result = await User.aggregate([
    { $match: { age: { $get: 20 } } },
    { $group: { _id: "$age", count: { $sum: 1 } } },
]);
console.log(result);

// index
userSchema.index({ name: 1 });  // Create index on the name field

