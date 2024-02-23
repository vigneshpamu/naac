import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    amount: {
      type: Number,
    },
    order_id: {
      type: String,
    },
    razorpay_payment_id: {
      type: String,
      default: null,
    },
    razorpay_order_id: {
      type: String,
      default: null,
    },
    razorpay_signature: {
      type: String,
      default: null,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }, // Reference to User model
  },
  {
    timestamps: true,
  }
)

const OrderModel = mongoose.model('order', schema)

export default OrderModel
