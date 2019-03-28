Instructions:

Mac execution
- Install webdriver.io following the instruction from https://webdriver.io/docs/gettingstarted.html
- open a new terminal window and  pull the code on github ( ) . To avoid mistakes, I upload all code.
- open a terminal window and type./geckodriver --port 4444 -> will run the geckodriver . DON'T CLOSE THIS WINDOW
- open a new terminal window and  pull the code on github ( )
- the code source is available at ./test/specs folder
- to run go to main folder and type ./node_modules/.bin/wdio wdio.conf.js , then it will run the code from specs folder automaticaly

Remarks:
I've installed the webdriver.io version 5.7.6.
During my tests, the switchFrame command didn't work as expected when I use the iframe ID. I spent almost 1 day searching the issue. 
Finaly, I discovered that I the switchFrame command works with iframe number but not with iframe ID :( 
To identify the correct iframe ID, in Firefox console mode ,I ran the command: window.frames

The confirmation messasge is displayed few seconds and after are closed. Then, for this reason I used WaitforExists command to capture the message that was closed automatially after few senconds

Tests:
Exercise 1 - Done
Exercise 2 - 90% Done
Exercise 3 - Done

If you have questions, let me know.

Regards,

Marco


