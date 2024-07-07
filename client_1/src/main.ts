import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import Eureka from 'eureka-js-client'

const eureka = new Eureka({
  instance: {
    app: 'client-1',
    instanceId: 'client-1',
    hostName: 'client-1',
    ipAddr: '127.0.0.1',
    statusPageUrl: 'client_1/ping',
    port: {
      '$': 3000,
      "@enabled": 'true'
    },
    vipAddress: 'client-1',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/v2/apps/',
    maxRetries: 10,
    requestRetryDelay: 2000,
  }
})

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log("listen 3000");
  eureka.start();
}
bootstrap();
