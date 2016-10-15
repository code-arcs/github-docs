---
title: BIC Cloud Report Service
version: 1.0.0-SNAPSHOT
languages:
    - Java
---

# BIC Cloud Report Service

(Micro-)Service which allows the execution of all domain specific reports available in the BIC Cloud.

Further details regarding Spring Batch can be found [here](http://docs.spring.io/spring-batch/trunk/reference/html/index.html).
Further details regarding the Spring Boot Batch Web starter can be found [here](https://github.com/codecentric/spring-boot-starter-batch-web).

Allows to execute diagram profile report based on tenantId, repositoryId and diagramId

http://biccloud-report-service:port/api/jobs/diagramProfile?jobParameters=tenantId=tenantId_value,repositoryId=repositoryId_value,diagramId=diagramId_value,locale=locale_value
 
## License

Copyright (c) 2005 - 2016, [GBTEC Software + Consulting AG](http://www.gbtec.de)

All rights reserved (see [license](./LICENSE.txt) for details).
