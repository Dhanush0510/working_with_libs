const {Kafka} = require('kafkajs')
const client = require('./config')
const kafka = new Kafka(client.configuration);
const producer = kafka.producer(client.producerConfiguration);

const  l_Producer = async (topic,data)=>{

  await producer.connect();
  let payload = {
    topic : topic,
    messages:[{value:data}],
  };
  
  await producer.send(payload);
  await producer.disconnect();
}

module.exports = {l_Producer}

