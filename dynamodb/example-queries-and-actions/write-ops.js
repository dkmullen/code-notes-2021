const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });

const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
let now = Date.now();

docClient.put(
  {
    TableName: 'demo_notes',
    Item: {
      user_id: '1001001-sos',
      timestamp: now,
      title: 'The Assassination of Jesse James',
      characters: {
        1: 'Jesse',
        2: 'Bob Ford',
        3: 'Charley Ford',
      },
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

// docClient.update({
//     TableName: 'td_notes_sdk',
//     Key: {
//         user_id: 'bb',
//         timestamp: 1
//     },
//     UpdateExpression: 'set #t = :t', (ie, set variable #t to represent the value :t)
//     ExpressionAttributeNames: {
//         '#t': 'title'
//     },
//     ExpressionAttributeValues: {
//         ':t': "Updated title"
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// docClient.delete({
//     TableName: 'td_notes_sdk',
//     Key: {
//         user_id: 'bb',
//         timestamp: 1
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// docClient.batchWrite(
//   {
//     RequestItems: {
//       td_notes_sdk: [
//         {
//           DeleteRequest: {
//             Key: {
//               user_id: 'bb',
//               timestamp: 2,
//             },
//           },
//         },
//         {
//           PutRequest: {
//             Item: {
//               user_id: '11',
//               timestamp: 1,
//               title: 'Title 11',
//               content: 'Content 11',
//             },
//           },
//         },
//         {
//           PutRequest: {
//             Item: {
//               user_id: '22',
//               timestamp: 2,
//               title: 'Title 22',
//               content: 'Content 22',
//             },
//           },
//         },
//       ],
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
