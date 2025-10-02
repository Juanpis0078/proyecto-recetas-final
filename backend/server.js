const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const fs = require('fs/promises');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Simple error handling middleware
function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
}

app.use('/api/auth', authRoutes);

// Ensure data file exists
const dataDir = path.join(__dirname);
const usersFile = path.join(dataDir, 'users.json');
(async () => {
  try {
    await fs.access(usersFile);
  } catch (e) {
    await fs.writeFile(usersFile, JSON.stringify([]));
  }
})();

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend corriendo en http://localhost:${PORT}`));
