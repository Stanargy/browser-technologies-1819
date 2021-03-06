# BTDemo
Browser Technologies 
## Summary
This is a single page web appication

## Table of contents
1. [Live demo](#1-Live-demo)
2. [Install](#2-Install)
3. [Features](#3-Features)
4. [DATA](#4-DATA)
5. [Design decisions](#5-Design-Decisions)
6. [To-do](#6-To-do)
7. [Audit](#7-Audit)
8. [Feature-Detections](#8-Feature-Detections)
9. [Literature](#9-literature)

## 1. Live Demo


## 2. Install
To install this project clone it to your device.
- To run developer mode open a node.js terminal and use the command: run npm dev

## 3. Features
This project uses server-side javascript to order pizza's. The user can either order a pizza of which the ingredients have already been selected or create their own pizza by selecting ingredients.
- The project is responsive to different viewport sizes.
- The project still has it's core functionality when javascript is disabled by the user's browser.

## 4. DATA
Data is being collected through server side javascript and makes it possible for the site to "remember" a user's pizza from the previous time he/she accessed the site.

## 5. Design Decisions
- To ensure readability for users width vision disabilities the color schema has been optimized for different forms of color blindness.
- Alt-attributes have been added to images to ensure the user knows what is being displayed to them even when images have been turned off.


## 6. To-do
- [ ] Setup localStorage in serverside javascript
- [ ] Add Support for tabbing when Mouse/trackpad is disabled
- [X] Added HTML-noscript tag that deletes itself when client-side Javascript is enabled.
- [X] Font-family that has covers fallbacks for all devices
- [ ] Optimize for broadband connections.
- [ ] Add some additional features width client-side javascript?
- [ ] Fix: Tabbing doesn't apply css :focus styles (wanted to add more visual feedback when focussing on different items)

## 7. Audit
![Audit](https://github.com/Stanargy/BTDemo/blob/master/public/assets/audit.JPG "This is the result of audit of '/' on 22-03-2019 ")

## 8. Feature-Detections

### This site uses feature detection for the following features:

1. Images
2. Custom fonts
3. Color <!-- 4. Mouse and trackpad -->
4. Javascript
<!-- 6. Cookies -->
5. Localstorage
<!-- 8. Broadband Connection -->


### Core Functionality
Layers:

Functional / Reliable layer:
- The reliable layer includes the core functionality as described above, without styling (css) and additional client side javascript features.

Usable layer:
- The usable layer includes the reliable layer with styling to make the view a more pleasureable experience for the user's eye.


Pleasureable layer:
- The pleasurable layer consists of the core functionality, styling and additional client side javascript features:
- Caching
- Broadband optimalization
- Better support for different user interaction hardware (keyboard, touch, mouse, trackpad) when using drag & drop js.

How does this project include Progressive Enhancement (PE)?
- This project includes PE by initially proving the user a default page, gradually 'unlocking' features when a user permits them. This ensures that the core functionality will always be functional and reliable. 

The project includes PE for the following features:

- Custom fonts:
    To make sure any user gets a proper font displayed the default system-ui font is selected. Since this type of css isn't supported by all browsers I've added support for all other system-ui's. If the case comes that all of these are unavailable the browser will turn to the first sans-serif it can get hold of and uses that.
    ```
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
    ```
- Images:
    To ensure PE for images symantic HTML has been used in the form of -alt tags. 

- Mouse / Trackpad
    Semantic HTML has been used to support navigation throughout the site by keyboard. By this I mean that all interactive elements wrapped in either checkbox, radio-button, button or a tags.

-  Cookies

- Localhost


# 9. Literature

`fEEDBACK

MAAK LAGEN SCRHIJF DAAROP FUCNTIONAL PLE USA
DIT IS FUNCTIONAL LAAG

vanaf nu usable laag eerst maken
meer features die productiever etc
meer leuker maken in de pleasurable laag


Status:
 halverwege de 2e laag