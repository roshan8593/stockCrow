import holdingSchema from "../schema/holdingSchema.js";
import mongoose from "mongoose";

const holding = mongoose.model("holding",holdingSchema);

export default holding;