# DATA MODELING ARCHITECH:

## Amazon S3 Simple Cloud Storage (storage bucket)

*Amazon objects = files(JPEG, PNG, PDF, etc.)

- POST: create and configure a bucket
- GET(findByAll): upload objects
- GET(findByID): view objects
- PUT: copy/move objects
- DELETE: delete objects

### 1. create controllers:
    -lib>controller>cloud.js
        -CRUD routes will live in these files;
        -POST, GET(findbyALL), GET(findByID), PUT(update), DELETE(delete)
        

### 2. create model:
    lib>model>Cloud.js
        - SQL queries will live in this file
        - create methods that communciate to the specific married CRUD route(s)


### 3. create services folder:
    lib>services>CloudStorage.js
        - Amazon S3 Cloud Storage Data will live here as the brain
        - Add the data from Amazon S3 website to Cloudstorage.js


### 4. create failing tests as first step (validation):
    - write code to corresponding files, in order of:
        - create route in controller>cloud.js
        - create methods in models>Cloud.js
        - add route to app.js that communicates to the routes in the controller


### 5. Objective:
    - Get GREEN passing tests
    - write code, adjust, refine until tests pass
    
