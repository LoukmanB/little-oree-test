# Tasks

## Task 1: Login a user

### Objective:

Develop backend logic to allow the following user to login:

- john.doe@tucoenergie.fr
- Azerty01!

### Requirements:

1. Analyse the codebase to understand the application architecture.
2. Update the src/routes/login.ts file to implement a JWT authentication allowing the user to access to its products page (you should see a "Se déconnecter" button if successful).
3. Ensure proper error handling and validation.

### Notes:

- The application uses a Postgres Database. It is not necessary to install a postgres client for this excercie. Analyzing the database models in the models folder should be sufficient to write the SQL queries.
- The ENV variables needed to connect to the Database should have been sent by email. If it is not the case, please notify the hiring team.
- If you are blocked feel free to bypass the login and jump directly to the task 2 by changing the token condition in the Navigation file, line 28.

## Task 2: Display all renovation products

### Objective:

After the user logins, develop frontend logic to fetch all renovation products from the "/products" route and display them following Figma's design.

### Requirements:

1. Fetch all renovation products from the "/products" route
2. Implement a responsive products page following this [Figma design](https://www.figma.com/file/rrg46xh2OSbqI8AU2Leso2/Page-Test?type=design&node-id=0%3A1&mode=design&t=EyLCLBOqutboS0tc-1). You can use the productNameDictionnary and the productImageDictionnary functions in the services folder to get the names and the images of each product
3. Use appropriate styling and components to enhance the user experience.

### Notes:

- The project uses both scss files and styled components for styling. Feel free to use any options (or others) according to your preference.

## Task 3: Open question

The data team's backend has provided an endpoint returning an array of all possible solar panel layouts for a given roof. The array contains 4x pixel coordinates per solar panel (precision on the order of a pixel). The image of the associated house roof is also sent in the backend's response.

```
{
    coordinatesInPixel : [[coord1, coord2, coord3, coord4], [coord1, coord2, coord3, coord4], ...],
    image : "base64..."
}
```

### Objective:

In a few lines of pseudocode, could you propose the beginning of a frontend solution to display the solar panels on the house (cf. picture) ?

<img src="/frontend/src/assets/images/solar_house.png" width=50% height=50%>
