# Taiko Screenshot &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

> This product allows you to take a screenshot of any given size, resolution or extension of the specified page by issuing a simple command.

Taiko Screenshot (later only TSS) is a dead-simple wrapper application that allows you to take a screenshot of any website. The core program is basically based on Taiko, and the application is a Docker shortcut around the library. 

## Requirements

The following dependencies need to be installed to start the project:

- Docker Engine 19.03 or later

The following dependencies are only needed if you want to further develop the library:

- Node 12 or later
- npm 6 or later

## Installation

This section contains important information about the installation process. The Standard Installation section contains basic user information, the Build a custom image section may be more useful for developers.

### Standard installation

Basically the library can be run by issuing a simple command, as the deployed artifact can already be found in the Docker Hub.

The latest image is available at the following link: https://hub.docker.com/repository/docker/pjtuxe/taiko-screenshot 

The image file can be obtained by issuing the following command:

```bash
$ docker pull pjtuxe/taiko-screenshot
```

### Build a custom image

If you want to build a Docker image file in a local environment and improve it, you can do so using the following commands.

1. First, clone the repository to a directory on your computer:

   ```bash
   $ git clone https://github.com/pjtuxe/taiko-screenshot.git
   $ cd taiko-screenshot
   ```
   
2. Install the application dependencies through:

   ```bash
   $ npm install
   ```

3. Delete existing Docker Taiko images if any:

   ```bash
   $ docker images rm pjtuxe/taiko-screenshot
   ```
   
4. Build a new image file using the Dockerfile:

   ```bash
   $ docker build -t pjtuxe/taiko-screenshot .
   // or
   $ npm run docker:build
   ```

5. Follow the instructions in "Usage" to use it. Keep in mind that Docker caches should be ignored when recompiling using the `--no-cache` parameter.

## Usage

The screenshot can be taken by issuing a very simple command:

```bash
$ docker run -it -e TSS_URL=https://google.com -v $(pwd):/storage pjtuxe/taiko-screenshot
```

This is the command with the fewest parameters to successfully run a Taiko Screenshot session. In addition, various environment variables can be used, which will be expanded in the "Configuration" section.

Let’s break this command down into more details and examine exactly what is needed:

- `docker run -it`: this command allows us to run a specific command in a new Docker container
- `-e TSS_URL=...`: this variable tells you which page you want to screenshot
- `-v $(pwd):/storage`: this is necessary for the downloaded image to transfer from the container to the host machine (the created image will basically be placed here)
- `pjtuxe/taiko-screenshot` the name of the downloaded / compiled image

## Configuration

The application can be easily configured with the help of some environment variables, which are described below:

| Name          | Value          | Required | Default        | Description                                                                                         |
|---------------|----------------|----------|----------------|-----------------------------------------------------------------------------------------------------|
| TSS_URL       | String         | Yes      | -              | URL of the page to be saved                                                                         |
| TSS_NAME      | String         | No       | screenshot.png | To save screenshots to a custom location you can use this environment variable                      |
| TSS_FULL_PAGE | Boolean        | No       | true           | You can use the fullPage option to take a screenshot of the entire page                             |
| TSS_ENCODING  | Enum("base64") | No       | null           | Taiko's screenshot API can also return images in base64 encoding format                             |
| TSS_WAIT      | Number         | No       | null           | The main thread will wait that many milliseconds between loading the page and taking the screenshot |
