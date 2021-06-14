const request = require('request')

const geocode = (addres,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(addres) +'.json?access_token=pk.eyJ1Ijoic2xpbjRlciIsImEiOiJja3B0cHh5aGMwc2txMnVvYzVkZm1yYTJwIn0.kD0gOOaFgT-fmeoftA8gGg&limit=1'
    request({url, json: true},(error,{body}) => {
        if(error)
        {
            callback('Unable to connect!',undefined)
        }
        else if(body.message === 'Not Found'){
            callback('Input the country',undefined)
        }
        else if(!body.features.length){
            callback('This country was not found!',undefined)
        }
        else{

            callback(undefined,{
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
                }
            )
        }
    })

}

module.exports = geocode

