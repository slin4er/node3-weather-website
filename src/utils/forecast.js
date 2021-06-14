const request = require('request')

const forecast = (longitude, latitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=9c4709ca84c2e27b3b295539eaae4ef6&query=' + longitude + ',' + latitude
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect',undefined)
        }
        else if(body.error){
            callback('Something went wrong!',undefined)
        }
        else{
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degress out.The humidity is ' + body.current.humidity + ' percents')
        }
    })
}

module.exports = forecast