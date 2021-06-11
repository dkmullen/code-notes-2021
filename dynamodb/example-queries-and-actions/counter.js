const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.update(
  {
    TableName: 'demo_notes',
    Key: {
      user_id: '1111',
      timestamp: 1622749957,
    },
    // ie increment the variable #v
    // If you run this operation multiple times as is, the views counter keeps
    // going up in the table even though the data above doesn't change
    UpdateExpression: 'set #v = #v + :incr',
    ExpressionAttributeNames: {
      '#v': 'views',
    },
    ExpressionAttributeValues: {
      ':incr': 1,
    },
  },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  }
);
