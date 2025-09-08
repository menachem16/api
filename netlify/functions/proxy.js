const fetch = require('node-fetch');

exports.handler = async function (event) {
  const { action } = event.queryStringParameters;
  const apiKey = '2D10887A6ABF2D90ABF0601D90E18037';
  const endpoint = `http://31.42.184.174:80/BfVCQfuZ/?api_key=${apiKey}&action=${action}`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Netlify-Function/1.0'
      }
    });
    const data = await response.json();
    return {
      statusCode: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Failed to fetch data from xui.one API' }),
    };
  }
};