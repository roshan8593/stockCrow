import mongoose from "mongoose";
import orderSchema from "../schema/orderSchema.js";

const order = mongoose.model("order",orderSchema);
export default order;