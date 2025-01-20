package com.spring.example.postproject.repository;

import com.spring.example.postproject.domain.post.entity.Post;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PostRepositoryTest {
    @Autowired
    PostRepository postRepository;

    @Test
    // 테스트를 설명하는 이름 - 단언 (Assertion)
    @DisplayName("피드의 내용을 입력하면 피드가 반드시 생성된다.")
    void saveBoardTest() {

        // GWT 패턴
        // given - 테스트를 위해 주어지는 데이터
        Post givenPost = Post.builder()
                .title("제목 테스트")
                .content("테스트 컨텐츠입니다")
                .writer("임시작성자")
                .build();

        // when - 실제 실행될 테스트 핵심 코드
        postRepository.saveBoard(givenPost);

        // then - 테스트 검증 (단언)
        Long postId = givenPost.getId(); // 생성된 피드게시물의 id를 가져옴
         System.out.println("postId = " + postId);

    }

    @Test
    @DisplayName("피드를 5개 작성하고 목록 조회하면 리스트의 크기는 5여야 한다.")
    void findAllTest(){
        //given
        for(int i =0; i <5; i++) {
            Post givenPost = Post.builder()
                    .title("제목" + i)
                    .content("테스트 컨텐츠입니다" + i)
                    .writer("임시작성자" + i)
                    .build();

            postRepository.saveBoard(givenPost);
            }
            // when
            List<Post>feedList = postRepository.findAll();

            // then
            feedList.forEach(System.out::println);


    }



}