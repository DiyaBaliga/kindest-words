# CS35L Final Project - Kindest Words

## Purpose
Kindest Words is an app created to anonymously connect individuals together in order to create a safe place to
vent or ask for advice, without judgement. Users anonymously make posts, similar to forums, to which people can reply.

## Main Features
1) User accounts with the ability to sign up and login.
2) Posting requests and posting replies to requests, in a similar manner to a forum. Only the request author can
   see replies.
3) Users can search through past requests and their subsequent replies.
4) Users are sent the requests of other users in order to reply.
5) Reporting system that flags the reported user, making them unable to login
6) Background music feature, which can be paused

## Running the App

Clone the repository:

#### 'git clone https://github.com/DiyaBaliga/kindest-words'

#### 'cd kindest-words'

### In order to run the app

Create a .env file in the client folder. 
In it, paste: export const SERVER_URL = http://[insert your public ip address]:3000

Create a .env file in the server folder. This will allow you to connect to the database.
In it, paste: DB = mongodb+srv://admin:eggert@cluster0.ckvf6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

####'cd server'

####'npm run dev'

## Notes

Github users stsang333 and Spencer Sang are the same person. 
