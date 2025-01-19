package com.spring.example.postproject.repository;

import com.spring.example.postproject.domain.post.entity.Post;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PostRepositoryTest {
    @Autowired
    PostRepository postRepository;

    @Test
    // 테스트를 설명하는 이름 - 단언 (Assertion)
    @DisplayName("피드의 내용을 입력하면 피드가 반드시 생성된다.")
    void saveFeedTest() {

        // GWT 패턴
        // given - 테스트를 위해 주어지는 데이터
        Post givenPost = Post.builder()
                .content("테스트 컨텐츠입니다")
                .writer("임시작성자")
                .build();

        // when - 실제 실행될 테스트 핵심 코드
        postRepository.saveBoard(givenPost);

        // then - 테스트 검증 (단언)
        Long postId = givenPost.getId(); // 생성된 피드게시물의 id를 가져옴
        // System.out.println("postId = " + postId);

        // postId가 null이 아닐 것이라고 확신한다.
        assertThat(postId).isNotNull();
    }



}