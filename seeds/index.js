const mongoose = require("mongoose");
const cities = require('./cities');
const {places, descriptors} = require('./seedHelper');
const Campground = require('../models/campground');


mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(()=>{
        console.log("Mongo connection is open!!!")
    })
    .catch(err => {
        console.log("Oh no Mongo Connection Error!!!!")
        console.log(err)
    });

    const sample = array => array[Math.floor(Math.random()* array.length)];


    const seedDB = async() =>{
       await Campground.deleteMany({});
       for(let i = 0; i<50; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: "ipsum dolor sit amet, consectetur adipisicing elit. Non dicta, inventore nobis amet saepe reprehenderit quisquam atque. Quae commodi veritatis sed, aspernatur, voluptate dignissimos illum iusto repellat, fugiat hic rem.",
            price
        })
        await camp.save();
       }
    }
    

    seedDB().then(()=> {
        mongoose.connection.close();
    })