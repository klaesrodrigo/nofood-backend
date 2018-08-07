module.exports = {
    api: {
        port: process.env.port || 3000
    },
    database: {
        connection: process.env.connection || 'mongodb://admin:nofood123456@ds115762.mlab.com:15762/nofood'
    }    
}