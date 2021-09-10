const Admin = require('./admin')
const produce = require('./producer')



let topic = "b";
let message = {"value" : 'hey'}


const topics = ['a','b','c']
const partitions = ['3','2','2']


Admin.create_topic(topics,partitions)
Admin.delete_topics(topics)

let listTopics= Admin.list_topics()

listTopics
.then((response)=>{console.log(JSON.stringify(response))})
.catch((error)=>{console.log(error)})

produce.l_Producer(topic,JSON.stringify(message));

let offset = Admin.fetch_topicoffset('b')

offset
.then((res)=>{console.log(JSON.stringify(res))})
.catch((error)=>{console.log(error)})

