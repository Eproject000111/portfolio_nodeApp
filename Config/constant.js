Development = {
    PORT: 3000,
    MONGO_URI: 'mongodb+srv://Ipay:Ipay@cluster0.dwljcj3.mongodb.net/porfolio?retryWrites=true&w=majority&appName=Cluster0'
}

Production = {
    PORT: 8000,
    MONGO_URI: 'mongodb+srv://Ipay:Ipay@cluster0.dwljcj3.mongodb.net/porfolio?retryWrites=true&w=majority&appName=Cluster0'
}

module.exports = process.env.NODE_ENV === 'DEVELOPMENT' ? Development : Production;