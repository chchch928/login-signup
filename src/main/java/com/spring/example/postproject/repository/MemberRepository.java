package com.spring.example.postproject.repository;

import com.spring.example.postproject.domain.member.entity.Member;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberRepository {

    void insertMember(Member member);
}
