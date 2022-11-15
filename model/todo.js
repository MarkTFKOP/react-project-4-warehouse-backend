import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schemaData = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    important: { type: Boolean, default: false },
    urgent: { type: Boolean, default: false },
    createdBy: { type: Schema.Types.ObjectId, ref: userRef },
    userRef: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("todo", schemaData);
