# BTDemo
Browser Techonologies Week 2, Demo ----
## Summary
This is a single page web appication. oba-r

## Table of contents
1. [Live demo](#1-Live-demo)
2. [Install](#2-Install)
3. [Features](#3-Features)
4. [DATA](#4-DATA)
5. [Design decisions](#5-Design-Decisions)
6. [To-do](#6-To-do)
7. [Audit](#7-Audit)

## 1. Live Demo
Still under construction. 

## 2. Install
To install this project clone it to your device.
- To run developer mode open a node.js terminal and use the command: run npm dev

## 3. Features
This project uses server-side javascript to order pizza's. The user can either order a pizza of which the ingredients have already been selected or create their own pizza by selecting ingredients.
- The project is responsive to different viewport sizes.
- The project still has it's core functionality when javascript is disabled by the user's browser.

## 4. DATA
Data is being collected through server side javascript and makes it possible for the site to "remember" a user's pizza from the previous time he/she accessed the site.

## 5 Design Decisions
- To ensure readability for users width vision disabilities the color schema has been optimized for different forms of color blindness.
- Alt-attributes have been added to images to ensure the user knows what is being displayed to them even when images have been turned off.


## To-do
- [ ] Setup localStorage in serverside javascript
- [ ] Add Support for tabbing when Mouse/trackpad is disabled
- [X] Added HTML-noscript tag that deletes itself when client-side Javascript is enabled.
- [X] Font-family that has covers fallbacks for all devices
- [ ] Optimize for broadband connections.
- [ ] Add some additional features width client-side javascript?
- [ ] Fix: Tabbing doesn't apply css :focus styles (wanted to add more visual feedback when focussing on different items)

## Audit
![Audit](https://github.com/Stanargy/BTDemo/blob/master/public/assets/audit.JPG "This is the result of audit of '/' on 22-03-2019 ")

