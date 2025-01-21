package com.spring.example.postproject.domain.member.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LoginRequest {

    @NotBlank(message = "이메일은 필수입니다.")
    private String username;
    @NotBlank(message = "비밀번호는 필수입니다.")
    private String password;

}
