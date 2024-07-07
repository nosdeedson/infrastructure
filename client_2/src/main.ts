import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Eureka from 'eureka-js-client';

const eureka = new Eureka({
  instance: {
    app: 'client-2',
    instanceId: 'client-2',
    hostName: 'client-2',
    ipAddr: '127.0.0.1',
    statusPageUrl: 'localhost',
    port: {
      '$': 3001,
      '@enabled': 'true',
    },
    vipAddress: 'localhost',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/v2/apps/'
  }
})

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  console.log("listen 3001");
  eureka.start();
}
bootstrap();
