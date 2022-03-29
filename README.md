# Lab - Simple Node Application in a Docker Container

## **Objectives**

1. Describe the necessary commands to construct a container image.
1. Understand the importance of port forwarding when running a
container.
1. Practice using different commands to instruct the container to
execute the node application.

-------------------------------------------------

### **Requirements**

1. Docker container runtime

1. Latest version of `node` installed (e.g. via brew or installed via
source.)

1. Latest version of `yarn` installed (e.g. via brew or installed via
source.)

1. Text editor to edit the `dockerfile` containing the node application.

1. Latest version of `Graphicsmagick` installed (e.g. via brew
or installed via source.)

-------------------------------------------------

### **Steps**

1. Run the following command from your terminal:
  `$ git clone https://github.com/thomasfowlerFIS/platform-eng0-simple-node-app-container-lab`

1. Change directories to the directory created in step 1. by
running:
  `$ cd [name of the directory in which the repository was cloned]`

1. Get all of the node application's dependencies by running the following
from the root directory of application:
  `$ yarn install`

1. Ensure the application is operational by running the following from the
command line:
  `$ yarn start`

-------------------------------------------------

### **Application Overview**

The application takes the following image:

-------------------------------------------------

<img alt="Max Headroom" src="https://raw.githubusercontent.com/thomasfowlerFIS/platform-eng0-simple-node-app-container-lab/master/maxheadroom.jpg?raw=true"/>

-------------------------------------------------

and converts it to "ASCII art". The output should be similar to the output
below:

-------------------------------------------------

<img alt="Max Headroom ASCII" src="https://raw.githubusercontent.com/thomasfowlerFIS/platform-eng0-simple-node-app-container-lab/master/maxheadroom_ASCII.png?raw=true"/>

-------------------------------------------------

### **Deliverables**

In order to successfully complete this lab you must:

* Author a container image using a `dockerfile` that includes the node
application you cloned.
* The container automatically starts the node application upon its
instantiation by the Docker runtime environment.

-------------------------------------------------

### **Containerizing the Application**

Once you've completed the steps above, it's now time to containerize the
application. The first step in containerizing an application, script, or
binary is to define a container image. A container image is what's used by
the container runtime (e.g. `docker`) to create an instance of the
container image or just container for short. Think of the container image
as a template for creating an isolated instance of the application that's
housed within the container.

A container image is defined in Docker by creating a `dockerfile`. There
are many ways to begin a `dockerfile` and for the purposes of this lab we
need to start with an existing container image that supports the `node`
runtime.

> **Note**: There are many options to choose from when selecting the right 
> container image. There are containers from official sources, businesses,
> and the open source community at large. When in doubt, it's best to
> select the container image either from the source or officially endorsed
> by the organization.

For this lab we'll use Node's official `17-alpine3.15` container image. Your
objective is to use the resources provided to package the node application
so that it runs when the container is launched.

#### **Stretch Goals**

* Try using a different base container image
  * What differences do you see?
  * Is the container image larger or smaller than before?

-------------------------------------------------

### **A Word on Port Forwarding**

To make the application behave as if it were running on the host you will
need to ensure that port forwarding from the host to the container is
established.

For example, if I wanted to run an NGINX container that serves content on
port 80, I would port forward port 80 on the host to port 80 on the container
with the following flag when using `docker run`:

`$ docker run -p 80:80 some-nginx-container:0.0.1`

-------------------------------------------------

### **Resources**

* [Dockerizing a Node.js Web App](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

* [Node's Official Docker Hub Page](https://hub.docker.com/_/node)

* [Docker's Container Networking Documentation](https://docs.docker.com/config/containers/container-networking/)

-------------------------------------------------
