const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /booking/selectFlight:
 *   post:
 *     summary: Select a flight
 *     description: Select a flight for booking
 *     tags:
 *       - Booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               flightId:
 *                 type: string
 *                 description: ID of the flight
 *     responses:
 *       200:
 *         description: Flight selected successfully
 *       400:
 *         description: Bad request
 */
router.post('/booking/selectFlight', (req, res) => {
  const { flightId } = req.body;
  // Handle flight selection logic here
  res.status(200).json({ message: 'Flight selected successfully', flightId });
});

/**
 * @swagger
 * /booking/selectFareType:
 *   post:
 *     summary: Select a fare type
 *     description: Select a fare type for the selected flight
 *     tags:
 *       - Booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fareType:
 *                 type: string
 *                 description: Type of fare (e.g., economy, business)
 *     responses:
 *       200:
 *         description: Fare type selected successfully
 *       400:
 *         description: Bad request
 */
router.post('/booking/selectFareType', (req, res) => {
  const { fareType } = req.body;
  // Handle fare type selection logic here
  res
    .status(200)
    .json({ message: 'Fare type selected successfully', fareType });
});

/**
 * @swagger
 * /booking/addUserDetails:
 *   post:
 *     summary: Add user details
 *     description: Add user details for booking
 *     tags:
 *       - Booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userDetails:
 *                 type: object
 *                 description: User details object
 *                 properties:
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 *     responses:
 *       200:
 *         description: User details added successfully
 *       400:
 *         description: Bad request
 */
router.post('/booking/addUserDetails', (req, res) => {
  const { userDetails } = req.body;
  // Handle user details logic here
  res
    .status(200)
    .json({ message: 'User details added successfully', userDetails });
});

/**
 * @swagger
 * /booking/applyCoupon:
 *   post:
 *     summary: Apply a coupon
 *     description: Apply a coupon to the booking
 *     tags:
 *       - Booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               couponCode:
 *                 type: string
 *                 description: Coupon code
 *     responses:
 *       200:
 *         description: Coupon applied successfully
 *       400:
 *         description: Bad request
 */
router.post('/booking/applyCoupon', (req, res) => {
  const { couponCode } = req.body;
  // Handle coupon application logic here
  res.status(200).json({ message: 'Coupon applied successfully', couponCode });
});

/**
 * @swagger
 * /booking/selectInsurance:
 *   post:
 *     summary: Select insurance
 *     description: Select insurance for the booking
 *     tags:
 *       - Booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               insuranceOption:
 *                 type: string
 *                 description: Insurance option selected
 *     responses:
 *       200:
 *         description: Insurance selected successfully
 *       400:
 *         description: Bad request
 */
router.post('/booking/selectInsurance', (req, res) => {
  const { insuranceOption } = req.body;
  // Handle insurance selection logic here
  res
    .status(200)
    .json({ message: 'Insurance selected successfully', insuranceOption });
});

/**
 * @swagger
 * /booking/addNotificationDetails:
 *   post:
 *     summary: Add notification details
 *     description: Add notification details for booking
 *     tags:
 *       - Booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               notificationDetails:
 *                 type: object
 *                 description: Notification details object
 *                 properties:
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 *     responses:
 *       200:
 *         description: Notification details added successfully
 *       400:
 *         description: Bad request
 */
router.post('/booking/addNotificationDetails', (req, res) => {
  const { notificationDetails } = req.body;
  // Handle notification details logic here
  res
    .status(200)
    .json({
      message: 'Notification details added successfully',
      notificationDetails,
    });
});

/**
 * @swagger
 * /booking/selectSeat:
 *   post:
 *     summary: Select a seat
 *     description: Select a seat for the flight
 *     tags:
 *       - Booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               seatNumber:
 *                 type: string
 *                 description: Seat number selected
 *     responses:
 *       200:
 *         description: Seat selected successfully
 *       400:
 *         description: Bad request
 */
router.post('/booking/selectSeat', (req, res) => {
  const { seatNumber } = req.body;
  // Handle seat selection logic here
  res.status(200).json({ message: 'Seat selected successfully', seatNumber });
});

/**
 * @swagger
 * /booking/selectMeal:
 *   post:
 *     summary: Select a meal
 *     description: Select a meal for the flight
 *     tags:
 *       - Booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mealOption:
 *                 type: string
 *                 description: Meal option selected
 *     responses:
 *       200:
 *         description: Meal selected successfully
 *       400:
 *         description: Bad request
 */
router.post('/booking/selectMeal', (req, res) => {
  const { mealOption } = req.body;
  // Handle meal selection logic here
  res.status(200).json({ message: 'Meal selected successfully', mealOption });
});

/**
 * @swagger
 * /booking/makePayment:
 *   post:
 *     summary: Make a payment
 *     description: Make a payment for the booking
 *     tags:
 *       - Booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paymentDetails:
 *                 type: object
 *                 description: Payment details object
 *                 properties:
 *                   cardNumber:
 *                     type: string
 *                   expiryDate:
 *                     type: string
 *                   cvv:
 *                     type: string
 *     responses:
 *       200:
 *         description: Payment successful
 *       400:
 *         description: Bad request
 */
router.post('/booking/makePayment', (req, res) => {
  const { paymentDetails } = req.body;
  // Handle payment logic here
  res.status(200).json({ message: 'Payment successful', paymentDetails });
});

module.exports = router;
