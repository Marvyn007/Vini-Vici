# Web Development Project 4 - Veni Vici!

Submitted by: **Marvin Chaudhary**

This web app: **lets users discover random cat breeds, complete with images and fun facts like breed name, weight, origin, and lifespan. Users can ban certain attributes to personalize their discovery journey and avoid seeing cats with those attributes again.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image is consistent across API calls (breed, weight, origin, and lifespan)
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single result of an API call is displayed at a time 
  - Displayed attributes match the displayed image (e.g., Somali breed always shows Somali cat)
  - There is at least one image per API call
- [x] **API call response results should appear random to the user**
  - Clicking on the API call button generates a seemingly random new result each time
  - Repeat results are rare due to a large data pool from the Cat API
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - At least one attribute per result is clickable
  - Clicking on a clickable attribute not on the ban list immediately adds it to the list
  - Clicking on an attribute in the ban list immediately removes it from the ban list
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking the Discover button never returns a result containing any attribute currently on the ban list
  - [x] _To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes_

The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list
- [x] Users can see a stored history of their previously displayed results from this session
  - A dedicated section of the application displays all previous images/attributes seen before
  - Each time the API call button is clicked, the history updates with the newest API result

The following **additional** features are implemented:

* [x] Clean and responsive UI with styled components
* [x] Ban list visually differentiates active bans and updates instantly
* [x] Background composed of cat portraits adds aesthetic appeal

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![Vini Vici](https://github.com/user-attachments/assets/66c41b6f-c4cd-4de0-8e50-58fc9c3930c0)

GIF created with LICEcap  


## Notes

Describe any challenges encountered while building the app.

- Handling filtering logic for multiple ban list items without overly repeating results was tricky.
- The Cat API sometimes lacked images or consistent attribute data, so additional checks were needed.
- Dynamically styling ban list buttons to show add/remove state clearly took some iteration.

## License

    Copyright 2025 Marvin Chaudhary

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
