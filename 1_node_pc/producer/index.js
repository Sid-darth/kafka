console.log('producer test')

const Kafka  =  require('node-rdkafka');
const eventType = require('../eventType')
// import Kafka from 'node-rdkafka'
var fs = require('fs')
// create stream to write events to

const stream = Kafka.Producer.createWriteStream({
    'metadata.broker.list':'localhost:9092'}, 
    {}, { 
        topic: 'test_topic_2'
    });

function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}


function readFile() {
    fs.readFile("temp.txt", function(err,buf) {
        console.log(buf.toString());
    })
};

function getRandomAnimal() {
    const categories = ['CAT', 'DOG'];
    return categories[Math.floor(Math.random()* categories.length)];
}

function getRandomNoise(category) {
    if (category === 'CAT') {
        const noises = ['purr','meow'];
        return noises[Math.floor(Math.random()*noises.length)];
    } else if (category === 'DOG') {
        const noises = ['bark','growl'];
        return noises[Math.floor(Math.random()*noises.length)];
    }
}

function queueMessage() {
    // val = getRandomInt(100)
    // const success = stream.write(Buffer.from(`val:${val}`)) // serializing the data
    // const event = {category: 'DOG', noise: 'bark'};
    const category = getRandomAnimal() ; 
    const noise = getRandomNoise(category);

    const event = {category, noise};
    const success = stream.write(eventType.toBuffer(event))
    
    if (success){
        // console.log(`works...(val:${val})`)
        console.log('works...')
    } else{
        console.log('it broke...')
    }
}

// set intervals to write to created stream
setInterval(() => {
    queueMessage();
}, 3000)