const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /authority/login:
 *   post:
 *     summary: Airway authority login
 *     description: Airway authority login with secret key and password
 *     tags:
 *       - Authority
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               secretKey:
 *                 type: string
 *                 description: Secret key of the airway authority
 *               password:
 *                 type: string
 *                 description: Password of the airway authority
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login successful
 *                 token:
 *                   type: string
 *                   description: JWT token
 *       400:
 *         description: Secret key and password are required
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Secret key and password are required
 *       401:
 *         description: Invalid secret key or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid secret key or password
 */

/**
 * @swagger
 * /authority/addAirport:
 *   post:
 *     summary: Add a new airport
 *     description: Airway authority can add a new airport
 *     tags:
 *       - Authority
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: Airport code
 *               name:
 *                 type: string
 *                 description: Airport name
 *               location:
 *                 type: string
 *                 description: Location of the airport
 *     responses:
 *       201:
 *         description: Airport added successfully
 *       400:
 *         description: Bad request, error during airport creation
 */

/**
 * @swagger
 * /authority/editAirport/{id}:
 *   put:
 *     summary: Edit an existing airport
 *     description: Airway authority can edit an existing airport
 *     tags:
 *       - Authority
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the airport to edit
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: Airport code
 *               name:
 *                 type: string
 *                 description: Airport name
 *               location:
 *                 type: string
 *                 description: Location of the airport
 *     responses:
 *       200:
 *         description: Airport edited successfully
 *       400:
 *         description: Bad request, error during airport editing
 *       404:
 *         description: Airport not found
 */

/**
 * @swagger
 * /authority/createSchedule:
 *   post:
 *     summary: Create a schedule between airports
 *     description: Airway authority can create a schedule between airports
 *     tags:
 *       - Authority
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               departureAirport:
 *                 type: string
 *                 description: Code of the departure airport
 *               arrivalAirport:
 *                 type: string
 *                 description: Code of the arrival airport
 *               departureTime:
 *                 type: string
 *                 format: date-time
 *                 description: Departure time
 *               arrivalTime:
 *                 type: string
 *                 format: date-time
 *                 description: Arrival time
 *     responses:
 *       201:
 *         description: Schedule created successfully
 *       400:
 *         description: Bad request, error during schedule creation
 */

/**
 * @swagger
 * /authority/editSchedule/{id}:
 *   put:
 *     summary: Edit an existing schedule
 *     description: Airway authority can edit an existing schedule
 *     tags:
 *       - Authority
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the schedule to edit
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               departureAirport:
 *                 type: string
 *                 description: Code of the departure airport
 *               arrivalAirport:
 *                 type: string
 *                 description: Code of the arrival airport
 *               departureTime:
 *                 type: string
 *                 format: date-time
 *                 description: Departure time
 *               arrivalTime:
 *                 type: string
 *                 format: date-time
 *                 description: Arrival time
 *     responses:
 *       200:
 *         description: Schedule edited successfully
 *       400:
 *         description: Bad request, error during schedule editing
 *       404:
 *         description: Schedule not found
 */

/**
 * @swagger
 * /authority/logout:
 *   get:
 *     summary: Logout airway authority
 *     description: Logout airway authority
 *     tags:
 *       - Authority
 *     responses:
 *       200:
 *         description: Successfully logged out
 *       500:
 *         description: Server error
 */

module.exports = router;
