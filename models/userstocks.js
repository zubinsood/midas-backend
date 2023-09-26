import mongoose from mongoose

const userStockSchema = new mongoose.Schema({
    symbol: String,
    quantity: Number,
    trades: [{
        ref: 'Trade',
        type: mongoose.Schema.Types.ObjectId,
    }],
});

export default mongoose.model('UserStock', userStockSchema);