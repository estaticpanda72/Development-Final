# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
The goal of the application is to develop a tool that freshman students can use to view and get more information on the various
freshman dorms available. The true value is found in being able to filter the dorms based on their location on campus and also the bathroom
styles they over

### Usability Principles Considered
In terms of usability, I considered how a user might best be able to view this information by organizing each dorm into card itemrs. This enables the user to be able to focus on each dorm independently and not be overwhelmed by the information found on the page. I also incorporated check boxes and radio buttons which provide ease of use as they can simply be clicked on. Also, the checkboxes work in a manner where they are initially all selected and by unselecting some, the filters are changed. This coupled with the positioning of the filter/sorting options towards the top of the page makes them easier to spot and use. 
The cart is located towards the bottom of the page, this communicates the idea that the cart is the final stage when using the webpage. Items should be saved to the cart while browsing and by placing the cart at the bottom of the page, this ensures the user views all available dorms.

### Organization of Components
I have 2 components: cartItem and HousingItem. 

HousingItem: sets up the card objects which are populated using the Json file. This component contains details such as the description,
year built, and avergae square footage of a room in the dorm. There is a save button that allows a user to save items to the saved items section to be viewed later. 

cartItem: Represents each item that is saved. This includes an image of the item, the total added to the cart, the name, and also the average square footage

### How Data is Passed Down Through Components
Using a map function on my JSON file, I was able to pass details about the name, location, bathroom type, average sq footage to the HousingItem. This then populated 12 seperate HousingItems unto the page.

The Json file is organized as an array of dictionaries. Therefore, I created a dictionary that associated each seperate dorm dictionary from the json file to its location in the array. I used this to implement the save button as this enabled a "searching feature' that integrated with CartItem whenever the save button is clicked. In this way, the CartItem gets information from the JSON file. 

### How the User Triggers State Changes

FOr sorting, I used a sorting state that would be triggered by the change in radio buttons. The two options for sorting were by Year built or by average square footage. Based on the value of the radio button selected, the function "run sorter" would pass a new value to the sorting state. This coupled with the builtin "sort by" function would sort the HousingItems based on whatever value is selected

For filtering, I had 5 states: 
- 3 used for the bathroom type: Private, Semi-Private, Communal
- 2 used for the campus location: North or south

Filters uses checkboxes, when a user changes the condition of a checkbox; this also triggers a change in the boolean state of the declared filtered state. If a filter state for a certain condition = False, It doesn't show up on the webpage and vice versa.  The checkboxes work in a manner where they are initially all selected and by unselecting some, the filters are changed. 

