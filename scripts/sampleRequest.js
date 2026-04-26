const axios = require('axios');

async function run() {
  try {
    // Fetch key from the project's mockapi endpoint
    const keyRes = await axios.get('https://66a3b48344aa6370458236cc.mockapi.io/api/key');
    let key = null;
    if (Array.isArray(keyRes.data) && keyRes.data.length) key = keyRes.data[0].key;
    else if (keyRes.data && keyRes.data.key) key = keyRes.data.key;

    if (!key) {
      console.log('No key returned from mock API endpoint.');
      process.exit(0);
    }

    const res = await axios.get('https://quizapi.io/api/v1/questions', {
      headers: { Authorization: `Bearer ${key}` },
      params: { limit: 1, include_answers: true }
    });
    console.log('Response status:', res.status);
    console.log('Response data sample:', JSON.stringify(res.data && res.data.data ? res.data.data : res.data, null, 2));
  } catch (err) {
    console.error('Request failed:', err.response ? err.response.status : err.message);
    if (err.response && err.response.data) console.error(err.response.data);
  }
}

run();
