package com.spring.example.postproject.controller.rest;

import com.spring.example.postproject.domain.member.dto.request.SignUpRequest;
import com.spring.example.postproject.domain.member.entity.Member;
import com.spring.example.postproject.service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@Slf4j
@RequiredArgsConstructor
public class AuthController {

    private final MemberService memberService;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody @Valid SignUpRequest signUpRequest) {
        memberService.signUp(signUpRequest);

        return ResponseEntity.ok().body(Map.of(
                "message", "success",
                "username",signUpRequest.getUsername()
        ));
    }



}
