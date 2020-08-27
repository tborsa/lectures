

# Promises 💍

Notes and code can be found [Here](https://github.com/tborsa/lectures/tree/master/week2/day4)


### Overview 📢

Today we will look at:
- Callback Review
- Callback hell
- Introduction to Promises
- Error handling with Promises (vs callbacks)
- Creating Promises

=====

## 0. Review on Callbacks

What? 

- function that is called within another function (when recieved as a parameter)

- higher order function?
  - receive or return another function

```js
const func = () => {};

const func2 = (cb) => {
  cb();
};

func2(() => {});

let arr = [1,2,4];

arr.forEach((item) => {
  // result
  cb(result);
})

console.log('after');
```


Why? 

- the function (cb) that is passed in is used at a later time
  - asynchronous activity, action that we need to wait for

- Flexible, modular code

More about Asynchronous Flow through Promises. We will also spent some time talking about error handling (with promises at least).

### 1. Disclaimer: DON'T PANIC

Promises are hard to understand initially, but it is a necessary pain to go through, it seems.

- They are introduced poorly for new learners/devs
- They are HARD to introduce properly for new learners/devs
- I found them to be confusing and intimidating at first (and I was a few years in)

Don't expect that by EOD you will fully understand them (how to use them, their full value proposition, how they actually work, etc.). 

Hopefully you will start to understand and appreciate them, but you will be seeing them in many places, so will have ample time to practice and struggle with them.

### 2. Sync flow using Async tasks (without Promises)

We reviewed the [Profile Generator](https://web.compass.lighthouselabs.ca/c583c1da-f7c8-478b-81a9-9497579a8ac2) which was our first introduction to callback hell.

As another example problem, we want to read lyrics of a song from disk, which, for us is broken into four parts / files: p1.txt, p2.txt, p3.txt, and p4.txt.

See file `lyric_reader.js` for the solution.

### 3. Sync flow using Async tasks (with Promises)

We revisited the same File I/O problem using Promises. For this we used the (experimental) `fs.promises` library ([link](https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_promises_api))

We were able to avoid the callback hell/waterfall using promises properly.

See `lyric_reader_promises.js` for the solution we wrote.

#### Attributes of Promises

**From MDN:**

> The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

There is more detail that MDN provides in the [_Description_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Description), for you to read.

Here's a summary of how they work and are used, in our words:

- Promises are objects that are returned IMMEDIATELY (by functions which support promises)
- They start with a state of "Pending"
  - This state can change once to "Fulfilled" (task completed) or "rejected" (task failed)
- When a promise is "fulfilled" (eg: file read successfully), the promise will call the callbacks inside
- We can call .then on a promise, we pass it a callback to handle SUCCESS
- .then returns IMMEDIATELY as well
  - .then also returns a (new) promise
- Whatever our .then callback returns, can be fed into a subsequent .then callback
  - However, if we return a promise, then it actually passes the results/resolution of the promise into the next callback
  
### 4. Promise creation (Maybe / Stretch)

We didn't get to this, and that's fine. It would have been too packed of a lecture, with this. There is an activity today that goes into creating a promise (using `new Promise (...)`) near the end of the day.

### 5. Final Points

- Promises are also called Futures, Delayed, Deferred, etc. See <https://en.wikipedia.org/wiki/Futures_and_promises>
- **Don't use `async/await`**! This is a new and easier way to do asynchronous operations without worring about callbacks _at all_. Underneath, promises are being used. Therefore we want you to still spend time getting comfortable with promises and NOT use `async/await` until final projects.