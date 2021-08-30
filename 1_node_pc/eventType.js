const avro = require("avsc");

// Encode and decode values from a known schema:
const type = avro.Type.forSchema({
    type: 'record',
    fields: [
      {
          name: 'category', 
          type: {type: 'enum', symbols: ['CAT', 'DOG']}
        },
      {
          name: 'noise', 
          type: 'string'
        }
    ]
  });

module.exports = type
  