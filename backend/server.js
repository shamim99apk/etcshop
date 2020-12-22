import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import colors from 'colors';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
// app.get('/', (req, res) => {
//   res.json('api is running');
// });

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.use(notFound);
app.use(errorHandler);
//production

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/fronted/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'fronted', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running  on port ${PORT}`));
// app.listen(5000, () => console.log(`Listening on port 5000`));
app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
