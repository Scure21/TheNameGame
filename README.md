# The Name Game

This is my version of the Name Game. A fun way to get to know you future possible co-workers at WillowTree. While getting to know your co-workers you get to train your brain! specifically you train your short term memory. 

## How does this game help my STM?
It provides 4 different rounds where you get to look at some pictures with faces and corresponding names of your future co-workers for 20 seconds. After that, the names disappear and the images are relocated in th screen, this way you can't just associate a certain location of the screen with a name, instead you have to actually remember people faces. 

There are 3 normal rounds. If you guess correctly you rearn 50 points, if you don't, well no points earned!
The 4th round is a the hardest one! roughly 90% of your future co-workers are named Mat(t). In this round only people whose name starts with Mat(t) will be displayed, if you guess correctly you get 200 points.

## To run it

```sh
npm install
npm run dev
```
Or

```sh
yarn
yarn run dev
```

then navigate to http://localhost:1337/

## Technologies used:

* Express
* React
* Redux
* Lodash
* [MUI React](https://www.muicss.com/docs/v1/react/introduction)
* React-bootstrap
* [Bones boilerplate](https://github.com/lolakiller/bones)

## Some comments

* The redux-logger is used to easily visualize state changes in Chrome Dev Tools.
* The amount of images vary. This depends if there are duplicates, I'm removing one.
* I'm sure there are still bugs!

