![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=sass&logoColor=white)

# AI NFTracker

## Description

Description: AI NFT Tracker - an innovative AI-enabled service for identifying and tracking promising NFT collections and improving investment performance.

Live demo: ```null```

## Features:

- BEM methodology
- Simple Modular Architecture
- Swiper for sliders

## Getting Started

It's mandatory to install [NodeJS](https://nodejs.org/en/download/). After open the command line.

- Clone the latest version
```
 git clone https://github.com/zaurbbb/nftracker
```
- Change directory to project's folder
```
 cd nftracker
```
- Install dependencies
```
 npm install
```
- Run project
```
 npm start
```
Now, web-application is running on http://localhost:3000/ or another port that must be mentioned on the command line.

## Short Documentation of code

### Simple Modular Architecture (SMA)

I divide the project into 4 layers:
- UI
- Components
- Modules
- Pages

Some explanations about the layers:
- UI layer is the lowest layer. It contains only the most basic components that are used in the entire project. For example, buttons, inputs, etc.
- Components layer is the second layer. It contains components that are used in the Modules layer. For example, a component that contains a button and an input.
- Modules layer is the third layer. It contains modules that are used in the Pages layer. For example, a module that contains a component that contains a button and an input.
- Pages layer is the highest layer. It contains pages that are used in the entire project. For example, a page that contains a module that contains a component that contains a button and an input.

Main rules: 
- The UI layer can only be used in the Components layer.
- The Components layer can only be used in the Modules layer.
- The Modules layer can only be used in the Pages layer.
- From the Modules layer you can extract files only throw the index.js file in each module. Any other files related only for the module must be in be incapsulated.
- Pages should not contain any logic. They must contain only list needed modules for the page. All logic must be in the Modules layer.

### React

For React code I have simple rules:
- If your component is going pass 100 hundred lines of code, you must divide it into smaller components.
- Use only functional components with arrow functions.
- I have my own rule for naming components. It's like this: `ComponentName` + `Type`. For example, `Reviews` + `Module`. So, the name of the component will be `ReviewModule`. Any other components that are used in the `ReviewModule` must be named like this: `ReviewModule` + `ComponentName`. For example, `ReviewModule` + `Statistics`. So, the name of the component will be `ReviewModuleStatistics`.
- I use the certain order of organizing imports:
    - React, react-router, react-router-dom imports
    - Any other libraries imports (axios, swiper, etc.)
    - Any other custom js files imports (custom hooks, helpers etc.)
    - Components imports
    - Any css imports
    - Images, videos, icons imports

### SCSS

I decided to use something like 7-1 pattern, but transformed it to use for the SMA architecture. By the names of folders you can understand, what they must contained.
Also, I use BEM methodology for naming classes.

So, I have my own rules about the writing order of the styles:

1) position / transform / z-index
2) display (flex / grid)  / overflow / object-fit
3) width / height / margin / padding
4) border / box-shadow
5) background
6) typography / text
7) images / icons
8) cursor / user-select / pointer-events
9) animation / transition
