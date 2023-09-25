export async function getInvestmentData(req, res) {
    try {
        return res.status(200).json()
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: `Unable to get UserStocks`,
            db_message: error.message
        })
    }
}