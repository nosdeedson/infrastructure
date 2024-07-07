package com.E3N.clientjava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ClientJavaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClientJavaApplication.class, args);
	}

}
