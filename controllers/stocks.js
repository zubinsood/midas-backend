export async function getStockBySymbol(req, res) {
    try {
        return res.status(200).json() 
    } catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message
        })
    }
}

export async function getAllStocks(req, res) {
    try {
        return res.status(200).json() 
    } catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message
        })
    }
}

export async function purchaseStock(req, res) {
    try {
        return res.status(200).json() 
    } catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message
        })
    }
}

export async function sellSomeStocks(req, res) {
    try {
        return res.status(200).json() 
    } catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message
        })
    }
}

export async function sellAllStocks(req, res) {
    try {
        return res.status(200).json() 
    } catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message
        })
    }
}