# Jarurat Care Assignment

## Prerequisites
  1. Node.js must be installed on the system
  2. MongoDB must be installed locally on the system
## Clone the repository
  1. Open cmd and navigate to the destination folder where you want to clone the project
  2. Execute the following command
     `git clone https://github.com/ayush-badola/jarurat_care_assignment.git`
  3. Navigate into the cloned directory
       `cd jarurat_care_assignment`
## Install Dependencies
  1. Once in the cloned repo directory, execute the following command
      `npm i`
## Start the project
  1. Execute the following command
       `npm start`
  2. Open your web browser and navigate to:
       `http://localhost:3000/`

## Test the API with Postman
  ### For Adding a service
  1. Create a POST request
  2. Type the following in the URL
              `http://localhost:3000/api/services/addservice`
  3. In the headers, type/select key as: `Content-Type` and value as: `application/json`
  4. In the body, select the raw option and select JSON from the dropdown and type the following request in it:
              `{
                  "name": "Test Service",
                  "price": 100,
                  "description": "A service for testing"
              }`  
You can change the request as your wish  
  5. Click on "SEND" to send the request  
  6. Expected response : `service saved successfully` with the code 201.
      
  ### For Listing All Services
  0. Set everything to default
  1. Create a GET request
  2. Type the following in the URL
          `http://localhost:3000/api/services/allservice`
  3. Click on "SEND" to send the request
  4. Expected response : 
      `[
        {
          "name": "Test Service",
          "price": 100,
          "description": "A service for testing"
        }
      ]` 
  with the code 200 OK.

  ### For Updating a service
  1. Create a POST request
  2. Type the following in the URL
          `http://localhost:3000/api/services/updateservice`
  3. In the headers, type/select key as: `Content-Type` and value as: `application/json`
  4. In the body, select the raw option and select JSON from the dropdown and type the following request in it:
          `{
              "name": "Test Service",
               "newname": "Updated Test Service"
          }`
    You can change the request as your wish  
  5. Click on "SEND" to send the request  
  6. Expected response : `Updated successfull` with the code 200 OK.

  ### For Deleting a service
  1. Create a POST request
  2. Type the following in the URL
          `http://localhost:3000/api/services/deleteservice`
  3. In the headers, type/select key as: `Content-Type` and value as: `application/json`
  4. In the body, select the raw option and select JSON from the dropdown and type the following request in it:
          `{
              "name": "Test Service"
          }`
        You can change the request as your wish
  5. Click on "SEND" to send the request
  6. Expected response : `Deleted successfull` with the code 200 OK.

---
* Contact me at 📱:
	* Name : Ayush Badola
  		* Email : glitchy.56@outlook.com
  		* Whatsapp : 9625316729
