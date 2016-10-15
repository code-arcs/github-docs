---
title: BIC Cloud Zipkin Service
version: 1.0.0-SNAPSHOT
languages:
    - Java
---

# BIC Cloud Zipkin Service

(Micro-)Service to monitor and output traces between services calling each other. 
This service not only acts as a store for all traces generated through the services calling each other it also offers a dashboard to monitor the collected traces. 

Further details on how the distributed tracing works and is implemented can be found on the [Spring Cloud Sleuth](http://cloud.spring.io/spring-cloud-sleuth/) site.

## Configuration Details
The Zipkin Service writes all collected traces into an elasticsearch database set up in the `docker-compose.yml`-file in `biccloud-docker-client`.

## License

Copyright (c) 2005 - 2016, [GBTEC Software + Consulting AG](http://www.gbtec.de)

All rights reserved (see [license](./LICENSE.txt) for details).