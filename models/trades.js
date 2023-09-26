import mongoose from 'mongoose';

const tradeSchema = new mongoose.Schema({
    symbol: String,
    amount: Number,
    purchasedPrice: Number,
    type: String
},
    { timestamps: true }
);

export default mongoose.model('Trade', tradeSchema);