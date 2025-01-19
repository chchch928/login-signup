package com.spring.example.postproject.service;

import com.spring.example.postproject.domain.post.dto.request.PostCreate;
import com.spring.example.postproject.domain.post.entity.Post;
import com.spring.example.postproject.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    public void createBoard(PostCreate postCreate){

        Post post = new Post();
        post.setWriter(postCreate.getWriter());
        post.setContent(post.getContent());

        postRepository.saveBoard(post);

    }
}
