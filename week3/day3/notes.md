

# W3D3 - HTTP Cookies & User Authentication
![auth](https://raw.githubusercontent.com/tborsa/lectures/master/week3/day3/assets/auth.gif)

Notes and code can be found [Here](https://github.com/tborsa/lectures/tree/master/week3/day3)

The other notes I mentioned on more auth and encryption [Here](https://github.com/tborsa/LighthouseLabs/blob/master/lectures/Week4/Day5/Lecture/notes.md)

The notes that we wrote in class can be found in the `notes.md` file.



## Stateless Protocol
![goldfish](https://raw.githubusercontent.com/tborsa/lectures/master/week3/day1/assets/goldfish.webp)

```
- forgets everything 
- fresh interaction each time
- No ongoing communication
- no state information is stored 





```

## Authentication vs Authorization  

- __Authentification__  
   - Confirming your identity  
   - Proving you are a specific user  

- __Authorization__  
   - Granting access  
   - Verifying that you have the correct access to see/get something  


# Cookies 🍪
![cookies](https://raw.githubusercontent.com/tborsa/lectures/master/week3/day3/assets/cookiemonster.gif)

Cookies are chunks of data stored in a user's web browser while the user is browsing. 

__How Do they work?__

- Cookies are communicated between a user's browser and a server through http headers.
- Every HTTP request contains all the user cookies for that webpage. 
- The server can ask the browser to set or change a cookie in the HTTP response. 
- name (key) value pairs, with additional information like domain, path, expiration
- limited in number and size of cookies

__How they solve the "state" problem?__

- Used to remember information about a user.
- The server is still stateless for a user. 
- Browser remembers information and sends it with every request. 

__How they could work for user logins?__


<small>LIVE CODE DEMO</small>

### Server-side Session Storage

- store session-id in a cookie
- some database on a server with map from the id to values
- Does not have the size restrictions that client storage does, more data!
- if you frequently change session data
you want the ability to invalidate specific users' sessions


### Summary:

When to use...

plain cookies:
- almost never use plain cookies
maybe for:
  - language selection
  - shopping cart for non-logged in users
  - analytics

server-side sessions
  - not worth hassle for small projects
  - if you need to store lots of session data
  - if you frequently change session data
  - you want the ability to invalidate specific users' sessions
