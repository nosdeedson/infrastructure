package com.E3N.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class GatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}

	@Bean
	public RouteLocator customRouteLocator(RouteLocatorBuilder builder){
		return builder.routes()
				.route(
						r -> r.path( "/client_1/**").filters(f -> f.stripPrefix(1)).uri("lb://client_1")
				)
				.route(
						r -> r.path("posts" ,"/posts/**").uri("http://localhost:3000")
				)
				.route(
						r -> r.path("/comments/**").uri("http://localhost:3001")
				)
				.route(
						r -> r.path( "/tests/**").uri("lb://client-java")
				)
				.build();
	}

}
