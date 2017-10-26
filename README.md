# Intersys-sales-man
A Vue.js Application to help Intersys Salesmans to make more accurate estimates of a project

## How to start
`git clone https://github.com/IntersysConsulting/Intersys-sales-man.git`  
`cd Intersys-sales-man`  
`npm install`  
`npm run dev`  


## Run it with Docker
1. Go to folder of project
2. Build the image with `docker build -t intersys-sales-man .`
3. Now run it with `docker run -it --rm -p 3006:3006 -v ${PWD}/src:/home/node/app/src intersys-sales-man`

