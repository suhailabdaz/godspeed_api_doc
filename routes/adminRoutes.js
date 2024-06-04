const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /admin/login:
 *   post:
 *     summary: Admin login
 *     description: Admin login
 *     tags:
 *       - Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email of the admin
 *               password:
 *                 type: string
 *                 description: Password of the admin
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid email or password
 */
router.post('/admin/login', (req, res) => {
  /**
   * @swagger
   * /admin/login:
   *   post:
   *     summary: Admin login
   *     description: Admin login
   *     tags:
   *       - Admin
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *                 description: Email of the admin
   *               password:
   *                 type: string
   *                 description: Password of the admin
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
   *         description: Email and password are required
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: Email and password are required
   *       401:
   *         description: Invalid email or password
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: Invalid email or password
   */
  /**
   * @swagger
   * /admin/login:
   *   post:
   *     summary: Admin login
   *     description: Admin login
   *     tags:
   *       - Admin
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *                 description: Email of the admin
   *               password:
   *                 type: string
   *                 description: Password of the admin
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
   *         description: Email and password are required
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: Email and password are required
   *       401:
   *         description: Invalid email or password
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: Invalid email or password
   */
});

/**
 * @swagger
 * /admin/register:
 *   post:
 *     summary: Admin registration
 *     description: Register a new admin
 *     tags:
 *       - Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email of the admin
 *               password:
 *                 type: string
 *                 description: Password of the admin
 *     responses:
 *       201:
 *         description: Registration successful
 *       400:
 *         description: Invalid request
 */
router.post('/admin/register', (req, res) => {
  // Handle admin registration logic here
  // Respond with appropriate status codes and messages
});

/**
 * @swagger
 * /admin/airlines:
 *   get:
 *     summary: Get all airlines
 *     description: Display all airlines
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: Display all airlines
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Airline Name
 *                   code:
 *                     type: string
 *                     example: AL123
 *                   status:
 *                     type: string
 *                     example: active
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Server error
 */

router.get('/admin/airlines', (req, res) => {
  // Handle retrieving all airlines logic here
  // Respond with appropriate status codes and messages
});

/**
 * @swagger
 * /admin/airports:
 *   get:
 *     summary: Get all airports
 *     description: Display all airports
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: Display all airports
 *       500:
 *         description: Server error
 */
router.get('/admin/airports', (req, res) => {
  // Handle retrieving all airports logic here
  // Respond with appropriate status codes and messages
});

/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Get all users
 *     description: Display all users
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: Display all users
 *       500:
 *         description: Server error
 */
router.get('/admin/users', (req, res) => {
  // Handle retrieving all users logic here
  // Respond with appropriate status codes and messages
});

/**
 * @swagger
 * /admin/block/airline/{id}:
 *   patch:
 *     summary: Block an airline
 *     description: Block an airline by ID
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the airline to block
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Airline blocked successfully
 *       500:
 *         description: Server error
 */
router.patch('/admin/block/airline/:id', (req, res) => {
  // Handle blocking an airline logic here
  // Respond with appropriate status codes and messages
});

/**
 * @swagger
 * /admin/block/user/{id}:
 *   patch:
 *     summary: Block a user
 *     description: Block a user by ID
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to block
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User blocked successfully
 *       500:
 *         description: Server error
 */
router.patch('/admin/block/user/:id', (req, res) => {
  // Handle blocking a user logic here
  // Respond with appropriate status codes and messages
});

/**
 * @swagger
 * /admin/coupons:
 *   post:
 *     summary: Add a coupon
 *     description: Add a new coupon
 *     tags:
 *       - Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: Coupon code
 *               discount:
 *                 type: number
 *                 description: Discount percentage
 *     responses:
 *       201:
 *         description: Coupon added successfully
 *       500:
 *         description: Server error
 */
router.post('/admin/coupons', (req, res) => {
  // Handle adding a new coupon logic here
  // Respond with appropriate status codes and messages
});

/**
 * @swagger
 * /admin/coupons/{id}:
 *   patch:
 *     summary: Edit a coupon
 *     description: Edit an existing coupon by ID
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the coupon to edit
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: New coupon code
 *               discount:
 *                 type: number
 *                 description: New discount percentage
 *     responses:
 *       200:
 *         description: Coupon edited successfully
 *       500:
 *         description: Server error
 */
router.patch('/admin/coupons/:id', (req, res) => {
  // Handle editing a coupon logic here
  // Respond with appropriate status codes and messages
});

/**
 * @swagger
 * /admin/block/coupon/{id}:
 *   patch:
 *     summary: Block a coupon
 *     description: Block a coupon by ID
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the coupon to block
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Coupon blocked successfully
 *       500:
 *         description: Server error
 */
router.patch('/admin/block/coupon/:id', (req, res) => {
  // Handle blocking a coupon logic here
  // Respond with appropriate status codes and messages
});

/**
 * @swagger
 * /admin/banner:
 *   post:
 *     summary: Add a banner
 *     description: Add a new banner
 *     tags:
 *       - Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               imageUrl:
 *                 type: string
 *                 description: URL of the banner image
 *               link:
 *                 type: string
 *                 description: Link associated with the banner
 *     responses:
 *       201:
 *         description: Banner added successfully
 *       500:
 *         description: Server error
 */
router.post('/admin/banner', (req, res) => {
  // Handle adding a new banner logic here
  // Respond with appropriate status codes and messages
});

/**
 * @swagger
 * /admin/banner/{id}:
 *   patch:
 *     summary: Edit a banner
 *     description: Edit an existing banner by ID
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the banner to edit
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               imageUrl:
 *                 type: string
 *                 description: New URL of the banner image
 *               link:
 *                 type: string
 *                 description: New link associated with the banner
 *     responses:
 *       200:
 *         description: Banner edited successfully
 *       500:
 *         description: Server error
 */
router.patch('/admin/banner/:id', (req, res) => {
  // Handle editing a banner logic here
  // Respond with appropriate status codes and messages
});

/**
 * @swagger
 * /admin/block/banner/{id}:
 *   patch:
 *     summary: Block a banner
 *     description: Block a banner by ID
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the banner to block
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Banner blocked successfully
 *       500:
 *         description: Server error
 */
router.patch('/admin/block/banner/:id', (req, res) => {
  // Handle blocking a banner logic here
  // Respond with appropriate status codes and messages
});

/**
 * @swagger
 * /admin/logout:
 *   get:
 *     summary: Logout admin
 *     description: Logout admin
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: Successfully logged out the admin
 *       500:
 *         description: Server error
 */
router.get('/admin/logout', (req, res) => {
  // Handle admin logout logic here
  // Respond with appropriate status codes and messages
});

module.exports = router;
