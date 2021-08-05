# vagary
Travel website
# PROJECT 3 README <!-- omit in toc -->

>

- [Overview](#Overview)
  - [Team Members](#Team-Members)
  - [Team Expectations](#Team-Expectations)
  - [Permissions](#Permissions)
- [MVP](#MVP)
  - [Goals](#Goals)
  - [Libraries](#Libraries)
  - [Client (Front End)](#Client-Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
  - [Server (Back End)](#Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Heirarchy](#Data-Heirarchy)
- [Post-MVP](#Post-MVP)
- [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview

_**Project Title** 
```
Vagary - a latin word meaning a magical journey
### Team Members


Created, designed, and developed by [Nash Anderson](https://github.com/andersonnash) (Git Czar), [Luz Lopez](https://github.com/luzmlx), [Babak Bayati](https://github.com/bbkbyti), and [Tafari Bearsford](https://github.com/mishakessler) for the General Assembly Software Engineering Immersive (November '19 Cohort) Unit 3 Group Project.

### Team Expectations

Team values and expectations can be found on our project's [Group Expectation Setting Document](https://git.generalassemb.ly/sei-nyc-constellations/class-info/blob/master/projects/template_group-expectation-setting.md).

### Permissions

Digital assets used with full licensing and permission from [Death to Stock Photo](), [Freepik](), and [Unsplash](). Custom digital design and branding by John Lansing. Digital assets stored locally and on [Imgur]().

<br>

## MVP


_The **Vagary** MVP  - We want a travel site where someone can create a profile, add an itinerary to their profile, and from their itinerary page, add a todo list to their vacation - a packing list, and things to do while on vacation. The user will be able to edit and delete todos or their vacation plans.

<br>

### Goals

- Full CRUD
-Creat User, Sign In, Sign Out
-Form for adding and or modifying itinerary
-Media Query/Responsive Design
-Working submit buttons
-Tailwind
```


<br>

### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | JS Library for building UI |
|  React-Router-Dom| Connecting routes/components|
|  Axios           | For API requests |
| Morgan           | Middleware for handeling API |
|     Express      | Creating a backend database |
|       Cors       | It allows or restricts restricted resources ona webserver|
|  Mongoose        | Object data modeling |
|  JWT             | Security function that hashes user data and passwords |
|  Nodemon         | restarts application once something is changed and saved in the file |





<br>

### Client (Front End)

#### Wireframes

[wireframes] https://www.figma.com/file/oLKO9SM34Of9YwHuvSvgea/Wireframe?node-id=0%3A1



#### Component Hierarchy

[Comp Heirarchy] https://lucid.app/lucidchart/invitations/accept/inv_647e7acb-d6d3-4fda-9f95-130898d9ece4?viewport_loc=-80%2C-15%2C2081%2C1112%2C0_0

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Sign Up    |   class    |   y   |   n   | Alow new user to sign up                                         |
| Sign In      | functional |   n   |   y   | Alow user to sign in                                             |
| Create       | functional |   n   |   y   | User will be able to create an itinerary in their profiles       |
| Update       | functional |   n   |   y   | Update itinerary                                                 |
| Galery       | functional |   n   |   y   | Render a slideshow on the homepage                               |
| Itinerary Card| functional |   n   |   y   | Will display a photo of user's destination                      |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Seting up API Config    |    H     |     1.5 hrs      |      hrs     |     hrs    
| Connections         |    H     |      1hrs      |      hrs     |     TBD     |
| Server              |    H     |      1hrs      |      hrs     |     TBD     |
| User Controller      |    H     |      2hrs      |      hrs     |     TBD     |
| Todo Controller      |    H     |     2hrs      |      hrs     |     TBD     |
| User Model          |    H     |     2 hrs      |      hrs     |     TBD     |
| Todo Model          |    H     |      2hrs      |      hrs     |     TBD     |
| Itinerary Model     |    H     |      3hrs      |      hrs     |     TBD     |
| Navbar              |    H     |     2hrs      |      hrs     |     TBD     |
| Header              |    H     |      2hrs      |      hrs     |     TBD     |
| Footer              |    H     |      2hrs      |      hrs     |     TBD     |
| Hamburger Menu      |    H     |      2hrs      |      hrs     |     TBD     |
| Media Query         |    H     |      2hrs      |      hrs     |     TBD     |
| Rendering Data      |    H     |      3hrs      |      hrs     |     TBD     |
| Galery Slideshow    |    H     |      3hrs      |      hrs     |     TBD     |
| User Profile Page   |    H     |      3hrs      |      hrs     |     TBD     |
| Edit Page           |    H     |      3hrs      |      hrs     |     TBD     |
| Routes              |    H     |     2 hrs      |      hrs     |     TBD     |
| Postman Trials      |    H     |     2 hrs      |      hrs     |     TBD     |
| Itinerary View      |    H     |      3hrs      |      hrs     |     TBD     |
| Sign Up View        |    H     |     2 hrs      |      hrs     |     TBD     |
| Sign In View        |    H     |     2 hrs      |      hrs     |     TBD     |
| Create View         |    H     |     2 hrs      |      hrs     |     TBD     |
| Update View         |    H     |     2 hrs      |      hrs     |     TBD     |
| Homepage View       |    H     |      2hrs      |      hrs     |     TBD     |
| Edit View           |    H     |     2 hrs      |      hrs     |     TBD     |
| Delete              |    H     |     3 hrs      |      hrs     |     TBD     |
| Media Query         |    H     |     2 hrs      |      hrs     |     TBD     |
| CSS                 |    H     |     3 hrs      |      hrs     |     TBD     |
| Tailwind            |    H     |     3 hrs      |      hrs     |     TBD     |
| Netlify Deploy      |    H     |     1 hrs      |      hrs     |     TBD     |
| Heroku Deployment   |    H     |     1 hrs      |      hrs     |     TBD     |
| TOTAL               |          |     60 hrs     |     hrs      |     TBD     |



<br>

### Server (Back End)

#### ERD Model
```
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password_digest: {type: String, required: true, Select: false}
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema(
  {
    location: { type: String, required: true },
    imageURL: { type: String, required: true },
    description: { type: String, required: true },
    date: {type: String, required: false},
    flightInfo: {type: String, required: false},
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Itinerary", ItinerarySchema);

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    itinerary_id: { type: Schema.Types.ObjectId, ref: "Itinerary" },
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", TodoSchema);

```

#### Data Heirarchy



``` structure

database_db
|__ users/
|__ resources/
|__ posts/

```

<br>

***

## Post-MVP
```
-Intergrate Instagram
-Integrate Calendar
-Travel Quiz
```

***

## Code Showcase


## Code Issues & Resolutions

