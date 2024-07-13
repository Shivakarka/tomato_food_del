# Tomato Food Delivery
## Tomato Food Delivery is a MERN-based food ordering application. Place food orders, pay online using Stripe, and track your delivery status. The frontend is built with TypeScript for better type safety and development experience and is completely responsive.

Live Link : [Click Here](https://tomato-food-del.vercel.app/)

## Table of Contents

- [Features](#features)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies](#install-dependencies)
  - [Run](#run)
- [Build & Deploy](#build--deploy)
- [Screenshots](#screenshots)

 * [License](#license)

## Features

- **Order Food**: Browse through a wide variety of dishes and place orders.
- **Secure Payments**: Integrated with Stripe for safe and secure online payments.
- **Delivery Tracking**: Track your order status from preparation to delivery.
- **Admin Panel**: Add new food products and change delivery statuses.

## Usage

### Env Variables

- Create a .env in backend root folder and add:
  ```
  MONGO_URI=<YOUR_MONGODB_URI>
  JWT_SECRET=<YOUR_JWT_SECRET>
  STRIPE_SECRET=<YOUR_STRIPE_KEY>
  ```
  

### Install Dependencies
- Run these in both backend and frontend folders
```
npm install
```

### Run
- Open two terminal instances, one with backend/ and other with frontend/
```
# Run frontend (http://localhost:5173)
npm run dev

# Run backend (http://localhost:4000)
npm run start
```

## Build & Deploy
- For frontend
```
# Create build
npm run build
```

## Screenshots:

- Full page screenshot
![chrome-capture-2024-7-13](https://github.com/user-attachments/assets/1427a543-2c97-49d6-9899-6520ec9e33e6)

- Cart Page
![chrome-capture-2024-7-13 (3)](https://github.com/user-attachments/assets/9fd6696e-505d-464c-8213-46b28a69c815)

- Login
![chrome-capture-2024-7-13 (4)](https://github.com/user-attachments/assets/fa6c7995-d1f6-4da3-a143-47d7ba7ae15f)

- Orders Page
![chrome-capture-2024-7-13 (5)](https://github.com/user-attachments/assets/d55d26f6-0bcf-43c6-9129-e0d461a3b6e8)



## License

The MIT License
