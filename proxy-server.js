const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// تعریف پراکسی برای مسیر `/api`
app.use('/api', async (req, res) => {
  const targetUrl = `https://bourse.chartapi.ir${req.url}`;
  try {
    const response = await axios({
      method: req.method,
      url: targetUrl,
      data: req.body,
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: error.message,
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));