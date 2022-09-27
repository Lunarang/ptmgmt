# PTMGMT

PTMGMT (Patient Management) is an SPA designed as a lightweight personal injury patient tracker in a chiropractic work environment. It's goal is to give the user a straightforward, birds-eye view of their patient's basic information, attorney contact, treatment plan, imaging timeline, and referral reference. All without trying to navigate multiple windows, cluttered menus, and ambiguously named documents that typically plagues software designed for a medical environment. Think of it as a summary of a patient's care plan and care history. The frontend is built with React and Redux libraries, and it communicates with a backend API built with Ruby on Rails.

<b>Curious about this project?</b>
:eyes: Watch the video [demo]()
:books: Read about the process on my [blog](https://codebaby.hashnode.dev/my-first-reactredux-project-ptmgmt)  
:art: Checkout my wireframes on [Figma](https://www.figma.com/file/mesAN7jHePHl5Zr4BnMIsx/PTMGMT?node-id=0%3A1)

## Install :sparkles:

### Prerequesites
Before you begin, ensure you have met the following requirements:

* You have installed `ruby 2.6.1` or higher.
* You have a Linux or WSL environment.

### Clone the repository

```shell
git clone git@github.com:Lunarang/ptmgmt.git
cd ptmgmt
```

### Install api dependencies

Using [Bundler](https://github.com/bundler/bundler):

```shell
cd ptmgmt_api
bundle install
```

### Initialize the database

```shell
rails db:create db:migrate db:seed
```

### Install client dependencies

Using [NPM](https://github.com/npm):

```shell
cd ..
cd ptmgmt_client
npm install
```

## Serve :sparkles:

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

## Architecture and Models :sparkles:

PTMGMT follows basic MVC architecture and RESTful controller conventions.
Models and associations are as follows:

* <b>Attorney</b> `has_many` patients
* <b>Patient</b> `belongs_to` attorney, `has_many` treatments, imagings, and referrals
* <b>Treatment</b> `belongs_to` patient
* <b>Imaging</b> `belongs_to` patient
* <b>Referral</b> `belongs_to` patient

## Contributions :sparkles:

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/lunarang/potted_plant_proposals/blob/master/CODE_OF_CONDUCT.md).
To contribute to PTMGMT, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## License :sparkles:

The repository is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct :sparkles:

Everyone interacting in this project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/lunarang/ptmgmt/CODE_OF_CONDUCT.md).
