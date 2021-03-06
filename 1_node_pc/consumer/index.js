console.log('consumer test');

const Kafka = require('node-rdkafka');
const eventType = require('../eventType');

var consumer = Kafka.KafkaConsumer({
    'group.id':'kafka',
    'metadata.broker.list':'localhost:9092'
    }, {});

consumer.connect();

consumer.on('ready', ()=>{
    console.log('consumer ready...')
    consumer.subscribe(['test_topic_2']);
    consumer.consume();
}).on('data', (data) => {
    // console.log(`message: ${data.value}`);
    console.log(`message: ${eventType.fromBuffer(data.value)}`)
});