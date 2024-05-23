import express from 'express';
import { json, urlencoded } from 'body-parser';
import proxy from 'express-http-proxy';
import morgan from 'morgan';
import config from './config';
import cors from 'cors';
import url from 'url';
import axios from 'axios';

export const app = express();

app.disable('x-powered-by');

// Enforce common middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const orderApiProxy = proxy(`${config.orderApiUrl}/api/orders`, {
  proxyReqPathResolver: req => url.parse(req.baseUrl).path
});

const paymentApiProxy = proxy(`${config.paymentApiUrl}/api/payments`, {
  proxyReqPathResolver: req => url.parse(req.baseUrl).path
});

app.get('/api/products/categories', async (req, res) => {
  try {
    const response = await axios.get('http://products-api:3002/api/product/category');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      message: 'Error',
      error: error.message,
    });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('http://products-api:3002/api/product');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      message: 'Error',
      error: error.message,
    });
  }
});

app.use('/api/orders?/?*', orderApiProxy);
app.use('/api/payments?/?*', paymentApiProxy);

// Start the express server for the Gateway
export const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
