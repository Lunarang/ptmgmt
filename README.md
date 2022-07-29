# PTMGMT

PTMGMT (Patient Management) is an SPA designed as a lightweight personal injury patient tracker in a chiropractic work environment. It's goal is to give the user a straightforward, birds-eye view of their patient's basic information, attorney contact, treatment plan, imaging timeline, and referral reference. All without trying to navigate multiple windows, cluttered menus, and ambiguously named documents that typically plagues software designed for a medical environment. Think of it as a summary of a patient's care plan and care history. The frontend is built with React and Redux libraries, and it communicates with a backend API built with Ruby on Rails.

## Install

### Clone the repository

```shell
git clone git@github.com:Lunarang/Stretchwork.git
cd stretchwork
cd backend
```

### Check your Ruby version

```shell
ruby -v
```

The ouput should start with something like `ruby 2.6.1`

If not, install the right ruby version using [rbenv](https://github.com/rbenv/rbenv) (it could take a while):

```shell
rbenv install 2.6.1
```

### Install dependencies

Using [Bundler](https://github.com/bundler/bundler) and [Yarn](https://github.com/yarnpkg/yarn):

```shell
bundle && yarn
```

### Initialize the database

```shell
rails db:create db:migrate db:seed
```

## Serve

```shell
rails s
```

Then navigate to the frontend directory to open 'index.html' to start using the app!

```shell
cd ..
cd frontend
```

## Architecture and Models

Stretchwork follows basic MVC architecture and RESTful controller conventions.
Models and associations are as follows:

* Routine - has_and_belongs_to_many :muscles
    has_many :stretches, through: :muscles
* Muscle - has_many :stretches
    has_and_belongs_to_many :routines
* Stretch - belongs_to :muscle
