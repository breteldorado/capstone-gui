# Network Accessed GUI
This is my work in progress for the network accessed GUI for Gravitas' Capstone Project at Texas A&M University.

I am brand new to everything related to Web Development, so enjoy my journey developing this from scratch.

## Index / Homepage
This page is meant to select our two main sections of the page: Configuration or
Diagnostics. This page serves as the homepage of the GUI for the user to bookmark in their
computer or mobile device. The "about" and "contact" buttons of the header are non functional.

## Configuration
  The user can use this page to *configure* the Central Command Unit of the HVAC
Control System. As of 8/18/2019, this page and is just used for design purposes.
From this page, the user can Import a new schedule file (.csv), export a current
schedule file to modify it using excel, and download the schedule file template.
Other options include importing and exporting the configuration procedure file (.json or .txt)
and downloading the configuration file template. At last, for an easier user experience,
I would hope to implement an edit schedule procedure from the website to the CCU.

## Diagnostics
As of 8/18/2019, this page is currently under construction. So far I plan on using this website to view
charts and trends of the sensor readings of Zone Sensor Units (ZSU) and the Extreme Sensor Units (ESU).
For this process, I will be using JavaScript and Chart.js to display all graphs on a visual page.
Another page on the Diagnostics website will be a "Raw Data" page.
This page will serve as a debugging page to display all the raw data a coming from the CCU to the website.
It will let you know if the sensors are online, what are they reading, and how fast they are programmed to read. More information will be released as we progress through the project.

## Short-Term To Do
- [x] Implement Graphs to display x random values in the last x seconds on diagnostics page. (Completed 8/19/2019)
- [x] Run 6 graphs simultaneously to do the above function. (Completed 8/21/2019)
- [ ] Implement a download function using JavaScript to download a random .txt file. Same process for .csv, then to .json. (added 8/18/2019)
- [ ] Start a database for the CCU to store numbers. The diagnostics page will grab data from the database, then display to graph (added 8/21/2019)
- [ ] Style Diagnostics page to center. Create button to display graphs (show graphs -> display temperature, humidity, and pressure graphs) (added 8/21/2019)
