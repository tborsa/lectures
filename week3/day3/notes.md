

# W3D3 - HTTP Cookies & User Authentication
![auth](https://raw.githubusercontent.com/tborsa/lectures/master/week3/day3/assets/auth.gif)

Notes and code can be found [Here](https://github.com/tborsa/lectures/tree/master/week3/day1)

The other notes I mentioned on more auth and encryption [Here](https://github.com/tborsa/LighthouseLabs/blob/master/lectures/Week4/Day5/Lecture/notes.md)

The notes that we wrote in class can be found in the `notes.md` file.



## Stateless Protocol
![goldfish](https://raw.githubusercontent.com/tborsa/lectures/master/week3/day1/assets/goldfish.webp)

```
waiting for something to happen
Forgets things that have happened.
Not part of the protocol to record the state of transactions. 
Include all the needed information in a http request







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


# H4CK3R5 ALERT
![hackers](https://raw.githubusercontent.com/tborsa/lectures/master/week3/day3/assets/hacker.gif)

Our login has many security vulnerabilities. 

What are some of them?
```
Passwords were plaintext
Cookies are editable and viewable by the user
User are rewritten on register







```


---
## ⚠️ Security Issue #1:

>Problem: Plaintext password?

```











```
> Solution: Hashing

- One way algorithm
  - Cannot convert the hash back into the original data
- Turns data into a unique* fixed-length string

With our express server we can use [bcrypt](https://www.npmjs.com/package/bcrypt). 

---

## ⚠️ Security Issue #2:

>Problem: Cookies are not private, and can be modified.

```











```

>Solution: Encryption  
- transforms data into another format in such a way that only specific individual(s) can reverse the transformation.  
- Purpose: to obscure the data.

- In Computer Science encryption is usually done with keys!

### Keys? 🔑

A key is usually a random string that is used with encryption algorithms to encrypt data.  

```
algorithm + Data📨 + Key🔑 => EncryptedData🔐   
```
The encryption algorithm is created in such a way that you need to know the algorithm and the key that was used in order to decrypt the data.  

```
algorithm + encryptedData🔐  + key🔑 => data📨  
```

The key makes it so I can uniquely lock (encrypt) and unlock (decrypt) data.

Examples are blowfish, AES  

If I want someone else to be able to read the encrypted data I am sending I need to pass them the key.  

In our express server we can use [cookie-session](https://www.npmjs.com/package/cookie-session)

---

## ⚠️ Security Issue #3:

> Problem: Stealing cookies

```











```
- HTTP is plain-text
- Man-in-the-middle (we know NSA, etc. do this)
- Packet sniffing
- Firesheep: https://en.wikipedia.org/wiki/Firesheep

>Solution: HTTPS (End-to-End Encryption)

- Https is http protocol encrypted using TLS transport layer security
- Server needs a certificate to verify it's identity
- TLS has rules on how secure encrypted communication must happen.
  - Server and Client need to share a key
  - How can we securely share a key?
    - Asymmetric encryption (public & private keys)
    -  Diffie–Hellman Key exchange



## More ...

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

encrypted cookies:
  - do this by default
  - only store user_id (rest can go in a database)

server-side sessions
  - not worth hassle for small projects
  - if you need to store lots of session data
  - if you frequently change session data
  - you want the ability to invalidate specific users' sessions

Types of Cryptography:
- Hashing (one way): Password Encryption
- Encryption (two way): 
  - Single Key Encryption (cookie encryption)
  - Two key Encryption (public/private) (HTTPS)