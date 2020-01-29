
# End to End Testing w/ Cypress 🌲

![end to end](https://raw.githubusercontent.com/tborsa/lectures/master/week8/day2/assets/endtoend.gif)

Notes can be found [here](https://github.com/tborsa/lectures/tree/master/week8/day2)

# Topics📢

- Unit and End to End Testing
- Cypress
- Jest vs Cypress

We went through the installation of Cypress into a project
We wrote our first end to end cypress test using the  basic API for Cypress 
And We broke into groups to design and create E2E tests for Wikipedia.


# Unit Testing Vs. End to End Testing


Unit Testing:
Testing one component or function in isolation. A "Unit".
Want to keep the amount of code we are testing small.


Integration Testing:
Testing the Integration of more than one unit together. 
How data is passed and received. 
Timing. 

End to End Testing:
Start to finish testing. Mimicking a real user interacting with the application. Behavior driven. You care about what appears on the screen (or the results of the program) instead of what code is running.


# Cypress

![automated](https://raw.githubusercontent.com/tborsa/lectures/master/week8/day2/assets/automated.gif)

End to end testing framework for anything that runs in the browser. Emulates the browser for its tests. 
```
JSDom                       vs                  Cypress
(virtual, simulation of the dom)                (actually renders the dom)


JEST                        vs                  Cypress
JS testing framework                            End to end testing framework 
Assertion library                               Uses Chai for assertions
Test runner                                     Test Runner
                                                GUI

Mocha
Testing Framework
Test Runner
+ Chai for Assertion Library


Mocks                         Vs                Stubs
Fake library/functions used to replace          Fake functionality.
real dependencies.                              Returns static data.
Can have testing specific. code.
```

# Stubbing 🎟

https://docs.cypress.io/guides/guides/network-requests.html#Testing-Strategies


# Continuous Integration?

https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI