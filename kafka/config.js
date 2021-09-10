const configuration = {
    brokers : ['localhost:9092','localhost:9093','localhost:9094'],
    clientId : 'new-consumer',
    connectionTimeout : 3000,
}
const producerConfiguration = {
    allowAutoTopicCreation : true,
    idempotent : false,
    metadataMaxAge : 300000,
    maxInFlightRequests : null,
    transactionTimeout : 60000

}
const consumerConfiguration = {
    groupId : 'new-consumer',
    allowAutoTopicCreation:false,
    sessionTimeout : 30000,
    heartbeatInterval : 3000,
    maxBytesPerPartition : 1048576,
    maxInFlightRequests : null,
    retry: {
        initialRetryTime: 100,
        retries: 8
      }
}


module.exports = {configuration,consumerConfiguration,producerConfiguration };
