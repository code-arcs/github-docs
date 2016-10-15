---
title: BIC Cloud Export Service
version: 1.0.0-SNAPSHOT
languages:
    - Java
---

# BIC Cloud Export Service

(Micro-)Service to export some BIC Cloud related functional data.

It's based on Spring Boot Starter Batch Web, to get more information about that, see it's [documentation](https://github.com/codecentric/spring-boot-starter-batch-web).

Allows to execute aspose report export glossary procedure based on tenantId and repositoryId

http://biccloud-export-service:port/api/jobs/glossaryExport?jobParameters=tenantId=tenantId_value,repositoryId=repositoryId_value,locale=locale_value,sortDirection=sortDirection_value,filter=filter_value

## License

Copyright (c) 2005 - 2016, [GBTEC Software + Consulting AG](http://www.gbtec.de)

All rights reserved (see [license](./LICENSE.txt) for details).
