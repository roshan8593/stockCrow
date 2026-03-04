import positionSchema from "../schema/positionSchema.js";
import mongoose from "mongoose";

const position = mongoose.model("position",positionSchema)
export default position;