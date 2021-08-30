console.log('producer test')

const Kafka  =  require('node-rdkafka');
// import Kafka from 'node-rdkafka'
// create stream to write events to

const stream = Kafka.Producer.createWriteStream({
    'metadata.broker.list':'localhost://9092'}, 
    {/* options */}, { topic: 'test_topic'});

function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}


function queueMessage() {
    val = getRandomInt(100)
    const result = stream.write(Buffer.from(`hello..${val}`));
    console.log(result)
}

// set intervals to write to created stream
setInterval(() => {
    queueMessage();
}, 3000)