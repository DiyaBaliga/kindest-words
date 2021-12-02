# CS35L Final Project - Kindest Words

## Purpose
Kindest Words is an app created to anonymously connect individuals together in order to create a safe place to
vent or ask for advice, without judgement. Users anonymously make posts, similar to forums, to which people can reply.

## Main Features
1) User accounts with the ability to sign up and login.
2) Posting requests and posting replies to requests, in a similar manner to a forum. Only the request author can
   see replies.
3) Users can search through replies to past requests they have made.
4) Users are sent the requests of other users in order to reply.
5) Reporting system that flags the reported user, making them unable to login
6) Background music feature, which can be paused

## Running the App

Install node.js by running the command:
#### `sudo apt install nodejs`
in your home directory.

Clone the repository:

#### `git clone https://github.com/DiyaBaliga/kindest-words`

#### `cd kindest-words`

Then run
#### `npm install`

### In order to run the app

Create a .env file in the client folder. 
In it, paste: SERVER_URL = http://[insert your public ip address]:3000

Create a .env file in the server folder. This will allow you to connect to the database.
In it, paste: DB = mongodb+srv://admin:eggert@cluster0.ckvf6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

#### `cd server`

#### `npm run dev`

This starts the client and server simultaneously. In order to run the app on iOS, install Expo Go and scan the QR code that Expo gives you in your desktop browser.

## Notes

Github users stsang333 and Spencer Sang are the same person.

This app takes inspiration from a Steam game called "Kind Words (lo fi chill beats to write to)".

The url to the background music is
   https://www.youtube.com/watch?v=1tUPFQ54gqc&t=726s
