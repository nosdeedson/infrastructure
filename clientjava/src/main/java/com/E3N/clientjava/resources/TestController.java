package com.E3N.clientjava.resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.time.ZoneId;

@RestController
@RequestMapping("tests")
public class TestController {

    @GetMapping
    public String ping(){
        return "pong: " + Instant.now();
    }
}
