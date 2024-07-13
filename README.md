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

![chrome-capture-2024-7-13 (1)](https://github.com/user-attachments/assets/bc7f2d36-eff9-4566-9816-e2d24edbdf2d)
![chrome-capture-2024-7-13 (2)](https://github.com/user-attachments/assets/deede519-4120-41f4-9bd6-c8335288f03b)
![chrome-capture-2024-7-13 (3)](https://github.com/user-attachments/assets/9fd6696e-505d-464c-8213-46b28a69c815)

- Full page screenshot
![chrome-capture-2024-7-13](https://github.com/user-attachments/assets/1427a543-2c97-49d6-9899-6520ec9e33e6)


## License

The MIT License
