const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });

const table = 'demo_notes';
const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.get(
//   {
//     TableName: table,
//     Key: {
//       user_id: 't-800',
//       timestamp: 1623333254050,
//     },
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   }
// );

docClient.query(
  {
    TableName: table,
    KeyConditionExpression: 'user_id = :uid',
    ExpressionAttributeValues: {
      ':uid': 't-801',
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

// docClient.scan(
//   {
//     TableName: table,
//     FilterExpression: 'title = :title',
//     ExpressionAttributeValues: {
//       ':title': 'Tombstone',
//     },
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   }
// );

// docClient.batchGet(
//   {
//     RequestItems: {
//       notes_demo: {
//         Keys: [
//           {
//             user_id: 't-1000',
//             timestamp: 1622811956,
//           },
//           {
//             user_id: 'B',
//             timestamp: 2,
//           },
//         ],
//       },
//       notes_demo: {
//         Keys: [
//           {
//             user_id: '1622809386',
//             timestamp: 1,
//           },
//         ],
//       },
//     },
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(JSON.stringify(data, null, 2));
//     }
//   }
// );
