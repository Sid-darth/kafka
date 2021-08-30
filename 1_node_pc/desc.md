# producer -> topic -> consumer

# docker
- single node setup : url(https://www.baeldung.com/ops/kafka-docker-setup)
- creating a topic: url (https://docs.cloudera.com/HDPDocuments/HDP2/HDP-2.6.4/bk_kafka-component-guide/content/ch_create-kafka-topic.html)
      - docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
        --create \
        --zookeeper zookeeper:2181 \
        --replication-factor 1 \
        --partitions 1 \
        --topic test_topic