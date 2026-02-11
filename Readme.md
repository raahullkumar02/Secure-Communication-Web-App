# Full stack(MERN) Secure Cummunication Web App

# day1

Setup

mkdir frontend
mkdir backend

cd frontend
npx create-react-app ./
npm install -D tailwindcss@3
npx tailwindcss init
npm run start

cd backend
npm init -y
npm i express nodemon dotenv cookie-parser cors
npm run dev

npm i mongoose
npm install mongodb

design schema

in backend make config dir and connect mongodb with online mongodb using altas

and make models user, conversation,message,status