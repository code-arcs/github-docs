---
title: BIC Cloud Scarecrow Service
version: 1.0.0-SNAPSHOT
languages:
    - Java
---

# BIC Cloud Scarecrow Service

(Micro-)Service to keep away the crows. 
This was the first service implemented with Spring Boot.
At the moment it implements the following use cases:

 * Metrics [[details](http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#production-ready-metrics)]
 * Web MVC [[details](http://docs.spring.io/spring-framework/docs/current/spring-framework-reference/htmlsingle/#mvc)]
 * REST Endpoints [[details]()]
 * Hypermedia support [[details](https://github.com/spring-projects/spring-hateoas)]
 * Actuator [[details](http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#production-ready)]
 * Config client [[details](http://cloud.spring.io/spring-cloud-static/spring-cloud.html#_spring_cloud_config_client)]
 * Service Discovery [[details](http://cloud.spring.io/spring-cloud-static/spring-cloud.html#_service_discovery_eureka_clients)]
 * Distributed tracing [[details](http://cloud.spring.io/spring-cloud-static/spring-cloud.html#_spring_cloud_sleuth)]
 * Spring Boot Admin client [[details](https://github.com/codecentric/spring-boot-admin)]

This service can easily be used to test several cloud related use cases. 
And it is useful as a template for new services as long as no archetype is available. 

## License

Copyright (c) 2005 - 2016, [GBTEC Software + Consulting AG](http://www.gbtec.de)

All rights reserved (see [license](./LICENSE.txt) for details).