const axios = require('axios');


const getClima = async(lat, lng) => {


    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c43a0ab4d3bbdcc1a00a719dbeb21110`)



    return resp.data.main.temp;


}


module.exports = {
    getClima
}