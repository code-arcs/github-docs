---
title: Spring Boot Starter Aspose
version: 1.0.0-SNAPSHOT
languages:
    - Java
---

# Spring Boot Starter Aspose

A Spring Boot starter for the Aspose library.
This starter combines a set of auto-configurations and the starter itself. 
This starter makes it possible to use the Aspose libraries in different services without the need to configure and activate them by hand.
Each auto-configuration activates if the corresponding Aspose library is found on the classpath. 

Because we starter cannot know about which Aspose library you will use it do not activate a library per se.
So you need to add each necessary Aspose library as a dependency in your projects pom file. 
To do this in a convenient manner, you can use the [biccloud-aspose-dependencies](https://github.com/gbtec-ag/biccloud-aspose-dependencies) pom.
It defines all available Aspose libraries as a dependency management which will be automatically included in your dependency management. 
So to prepare your project you need to include the following in your projects pom file:

```
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.gbtec.biccloud</groupId>
            <artifactId>biccloud-aspose-dependencies</artifactId>
            <version>1.0.0-SNAPSHOT</version>
            <scope>import</scope>
            <type>pom</type>
        </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>com.gbtec.biccloud.spring.boot.starters</groupId>
        <artifactId>biccloud-spring-boot-starter-aspose</artifactId>
        <version>1.0.0-SNAPSHOT</version>
    </dependency>
    <!-- Because you want to use Aspose cells in your project -->
    <dependency>
        <groupId>com.aspose</groupId>
        <artifactId>aspose-cells</artifactId>
        <scope>compile</scope>
    </dependency>
    <!-- More Aspose libraries if necessary -->
</dependencies>
```

The example above will not only make the Aspose cells library available in your classpath it will also automagically auto configure all things necessary to use it in your Spring Boot application.
  
Further details on how to build an auto-configuration and a starter can be found [here](http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-developing-auto-configuration).
Further details about the Aspose libraries can be found [here](http://www.aspose.com). 

## License

Copyright (c) 2005 - 2016, [GBTEC Software + Consulting AG](http://www.gbtec.de)

All rights reserved (see [license](./LICENSE.txt) for details).