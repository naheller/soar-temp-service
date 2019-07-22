module.exports = {
    // DB: 'mongodb://localhost:27017/soar'
    DB: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds119129.mlab.com:19129/soar`
}