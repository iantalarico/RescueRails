# RescueRails

[![Code Climate](https://codeclimate.com/github/ophrescue/RescueRails.png)](https://codeclimate.com/github/ophrescue/RescueRails) [![Gemnasium](https://gemnasium.com/ophrescue/RescueRails.png)](https://gemnasium.com/ophrescue/RescueRails) [![Build Status](https://travis-ci.org/ophrescue/RescueRails.svg?branch=master)](https://travis-ci.org/ophrescue/RescueRails) [![Coverage Status](https://coveralls.io/repos/github/ophrescue/RescueRails/badge.svg?branch=master)](https://coveralls.io/github/ophrescue/RescueRails?branch=master)

Rails 4.2.x
Ruby 2.3.1
Postgresql

### About
RescueRails is the public facing website for Operation Paws for Homes, as well as the private system used by the rescue for managing dogs, adopters and staff.


### Setup in dev

    git clone git@github.com:ophrescue/RescueRails.git
    cd RescueRails
    bundle install

Create database.yml file, and use postgres

    rake db:setup
    rake db:seed

You're also going to need to setup an auto incrementor in postgresql on the dogs.tracking_id column.  This isn't in the schema. :(

Fire up the app and see what happens.  App is setup to run SSL always, might want to use POW as your webserver in dev.

See `db/seeds.rb` for default admin login info


### Licensing
* Source code written for this project has been licensed under the Apache 2.0 license
* 3rd party libraries that may appear are licensed as identified.
* Logos and images remain copyright of their respective owners.
* Documents appearing in public\docs remain property of Operation Paws for Homes, Inc. and may not be reused without written permission.
