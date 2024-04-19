const {Schema, SchemaTypes, model } = require("mongoose");

const userSchema = new Schema({
    username:{
        type: SchemaTypes.String,
        require:true
    },
    email:{
        type: SchemaTypes.String,
        require:true
    },
    password:{
        type: SchemaTypes.String,
        require:true
    },
    createdAt:{
        type: SchemaTypes.String,
        require:true
    },
    updatedAt:{
        type: SchemaTypes.String,
        require:true
    },
});

module.exports = model("users", userSchema);

