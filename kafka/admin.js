const {Kafka} = require('kafkajs')
const client = require('./config')

const kafka = new Kafka(client.configuration)
const admin = kafka.admin();

let ItopicConfig = []

const create_topic = async (topics,partitions) => {
    await admin.connect()
    for( i = 0;i<topics.length;i++){
      let temp = {}
      temp['topic'] = topics[i];
      temp['numPartitions'] = partitions[i];
      ItopicConfig.push(temp); 
    }
    await admin.createTopics({
    topics: ItopicConfig,
    waitForLeaders: true
                            })
    await admin.disconnect()
  }

const list_topics = async()=>{
  await admin.connect();
  return await admin.listTopics();
  }
 
 const delete_topics = async (topic) => {
  await admin.connect();
  await admin.deleteTopics({topics : topic})
 
}
const fetch_offset  = async (groupId,topic)=>{
  await admin.connect();
  await admin.resetOffsets({groupId : groupId, topic : topic})
  return await admin.fetchOffsets({groupId : groupId ,topic : topic, resolveOffsets : true})
  
}

const fetch_topicoffset = async (topic)=>{
  await admin.connect();
  return await admin.fetchTopicOffsets(topic)
}


module.exports = {create_topic,list_topics,delete_topics,fetch_offset,fetch_topicoffset}