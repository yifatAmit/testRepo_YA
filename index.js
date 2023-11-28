exports.handler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify("Hello from Lambda and Github! test Yifat"),
    }
    return response
  }

  // change code for #62002