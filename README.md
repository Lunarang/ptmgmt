# PTMGMT

PTMGMT (Patient Management) is an SPA designed as a lightweight personal injury patient tracker in a chiropractic work environment. It's goal is to give the user a straightforward, birds-eye view of their patient's basic information, attorney contact, treatment plan, imaging timeline, and referral reference. All without trying to navigate multiple windows, cluttered menus, and ambiguously named documents that typically plagues software designed for a medical environment. Think of it as a summary of a patient's care plan and care history. The frontend is built with React and Redux libraries, and it communicates with a backend API built with Ruby on Rails.

## Install

### Prerequesites
Before you begin, ensure you have met the following requirements:

You have installed `ruby 2.6.1` or higher.
You have a Linux or WSL environment.

### Clone the repository

```shell
git clone git@github.com:Lunarang/ptmgmt.git
cd ptmgmt
```

### Install dependencies (backend)

Using [Bundler](https://github.com/bundler/bundler):

```shell
cd ptmgmt_api
bundle install
```

### Initialize the database

```shell
rails db:create db:migrate db:seed
```

### Install dependencies (frontend)

Using [NPM](https://github.com/npm):

```shell
cd ..
cd ptmgmt_client
npm install
```

## Serve

Note: to run this on your local machine, you will have to set the api server to a separate port from the npm server.
This can be accomplished with the following command, which sets the port to 3001 rather than the default 3000:

```shell
cd ..
cd ptmgmt_api
rails s -p 3001
```

Then navigate to the frontend directory to start the npm server (this will automatically occupy port 3000):

```shell
cd ..
cd ptmgmt_client
npm start
```

Then navigate to your [local host](http://localhost:3000/) to start using the app!

## Architecture and Models

Stretchwork follows basic MVC architecture and RESTful controller conventions.
Models and associations are as follows:

* Routine - has_and_belongs_to_many :muscles
    has_many :stretches, through: :muscles
* Muscle - has_many :stretches
    has_and_belongs_to_many :routines
* Stretch - belongs_to :muscle
