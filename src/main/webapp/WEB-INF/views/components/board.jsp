<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<section class="board">
    <h2>PingPost</h2>
    <table>
        <thead>
        <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
        </tr>
        </thead>
        <tbody>
        <!-- 게시글 데이터 반복 출력 -->
        <c:forEach var="post" items="${posts}">
            <tr>
                <td>${post.id}</td>
                <td>
                    <a href="/post/${post.id}">
                            ${post.title}
                    </a>
                </td>
                <td>${post.author}</td>
                <td>${post.createdDate}</td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
</section>