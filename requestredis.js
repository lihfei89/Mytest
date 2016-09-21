var client = require('./redistest');


client.setValue('pig','1111');
client.getValue('pig');
client.getList('w1');
client.getset('t1');