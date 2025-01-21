package com.spring.example.postproject.service;

import com.spring.example.postproject.domain.member.dto.request.SignUpRequest;
import com.spring.example.postproject.domain.member.entity.Member;
import com.spring.example.postproject.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class MemberService {

    private final PasswordEncoder passwordEncoder;
    private final MemberRepository memberRepository;

    public void signUp(SignUpRequest signUpRequest) {

         String rawPassword = signUpRequest.getPassword();
         String encodedPassword = passwordEncoder.encode(rawPassword);

        Member newMember = signUpRequest.toEntity();
        newMember.setPassword(encodedPassword);

        memberRepository.insertMember(newMember);


    }

}
