package com.spring.example.postproject.service;

import com.spring.example.postproject.domain.member.dto.request.SignUpRequest;
import com.spring.example.postproject.domain.member.dto.response.DuplicateCheckResponse;
import com.spring.example.postproject.domain.member.entity.Member;
import com.spring.example.postproject.exception.ErrorCode;
import com.spring.example.postproject.exception.MemberException;
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

    // 중복 검사 처리
    public DuplicateCheckResponse checkDuplicate(String type, String value) {
        value = value.trim();
        switch (type) {
            case "email":
                return memberRepository.findByEmail(value)
                        .map(m -> DuplicateCheckResponse.unavailable("이미 사용 중인 이메일입니다."))
                        .orElse(DuplicateCheckResponse.available());

                case "username":
                    return memberRepository.findByUsername(value)
                            .map(m -> DuplicateCheckResponse.unavailable("이미 사용 중인 별명입니다."))
                            .orElse(DuplicateCheckResponse.available());

                    default:
                throw new MemberException(ErrorCode.INVALID_SIGNUP_DATA);



        }
    }

    // 로그인 처리


}
