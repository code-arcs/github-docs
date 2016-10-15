---
title: BIC Cloud Service Archetype
version: 1.0.0-SNAPSHOT
languages:
    - Java
    - Groovy
---

# BIC Cloud Service Archetype

Maven archetype which serves as a template for BIC Cloud related Spring Boot projects.

At the moment we don't have the possibility to add this archetype to our Artifactory as an entry in the archetype-catalog.xml file (because of issues regarding the access through ssl). 
Therefore one need to install the archetype into his/her local repository.
Installing the artifact will ensures that the archetypes is added to the locally available ~/.m2/archetype-catalog.xml file.
After that one can use the archetype through his/her IDE (if the IDE supports archetype selection from local archetype catalogs).

## Usage

So if you want to use the archetype in the Eclipse IDE have to do the following...

 * Checkout the archetype related git repository
 * Import the corresponding branch as maven project
 * Execute maven goal 'install' on the project with update to local repo (optionally with goal to update local catalog: 'mvn install archetype:update-local-catalog')
 * Create a new maven project (a wizard will open to guide you through the process creating a maven project)
 * Ensure that 'Create a simple project (Skip archetype selection)' is not selected on the first page of the wizard
 * Select 'Include snapshot archetypes' on the second page of the wizard (now the archetype should be available in the list of archetypes)
 * Select the archetype and continue creating the maven project
 
## License

Copyright (c) 2005 - 2016, [GBTEC Software + Consulting AG](http://www.gbtec.de)

All rights reserved (see [license](./LICENSE.txt) for details).