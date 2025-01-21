package com.spring.example.postproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RouteController {
    @GetMapping("/")
    public String index() {
        return "auth/login";
    }
    // 회원가입 페이지 열기
    @GetMapping("/signup")
    public String signup() {
        return "auth/signup";
    }

}
