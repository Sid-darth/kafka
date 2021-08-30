# producer -> topic -> consumer

# docker
- single node setup : url(https://www.baeldung.com/ops/kafka-docker-setup)
- creating a topic
      - docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
        --create \
        --zookeeper zookeeper:2181 \
        --replication-factor 1 \
        --partitions 1 \
        --topic test_topic