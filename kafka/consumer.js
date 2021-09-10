const {Kafka} = require('kafkajs')
const client = require('./config')
const kafka = new Kafka(client.configuration);
const admin = kafka.admin();

const consumer = kafka.consumer(client.consumerConfiguration)

const l_consumer = async (topic) =>{
    await consumer.connect();
    await admin.connect();
    await consumer.subscribe({topic : topic, fromBeginning: true });
    await consumer.run({
        autoCommit : false,
        eachMessage: async ({ topic,partition,message }) => {

            console.log(message.value.toString()+" "+ message.offset.toString()+" "+partition);
           /*
            if (e instanceof TooManyRequestsError) {
                pause_consumer(topic)
                setTimeout(() =>resume_consumer(topic), e.retryAfter * 1000)
            }
            */
            consumer.commitOffsets([{topic,partition,offset: (Number(message.offset) + 1).toString() }])
            
           }
	})
   
    /*await admin.deleteTopicRecords({
        topic : topic,
        partitions : [{
            partition :  partition1,
            offset : offset1
        }]
    }).catch((err)=>{console.log(err)});
    await admin.disconnect();*/

}
l_consumer("b");


const pause_consumer = async (topic)=>{
   await consumer.connect();
   
   return consumer.pause([{ topic : topic }]);

}


const resume_consumer = async (topic)=>{
    await consumer.connect();
    
    return consumer.resume([{ topic : topic }])
}


const stop_consumer = async ()=>{
    await consumer.disconnect();
    console.log('disconnected')
    
}
stop_consumer()

setTimeout(()=>{stop_consumer()},3000)

module.exports = {pause_consumer,resume_consumer,stop_consumer}