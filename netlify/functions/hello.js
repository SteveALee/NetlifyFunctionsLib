const tiny = require("@bamblehorse/tiny");
const tiny2 = require("tiny2");

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: tiny("Hello from ") + tiny2(' a function')
  };
};