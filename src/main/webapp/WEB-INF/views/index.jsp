<%-- src/main/webapp/WEB-INF/views/index.jsp --%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> PingPost </title>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

    <!-- Modular CSS -->
    <link rel="stylesheet" href="/css/index.css">
    <link rel="stylesheet" href="/css/sidebar.css">
    <link rel="stylesheet" href="/css/post.css">
    <link rel="stylesheet" href="/css/modal.css">

    <!-- Modular JS -->
    <script src="/js/index.js" type="module" defer></script>
    <script src="/js/modal.js" type="module" defer></script>
</head>
<body>
<div class="container">

    <!-- Main Feed Section -->
    <main class="feed">
        <!-- Posts Section -->
        <%@ include file="components/board.jsp" %>
        <!-- 게시글 작성 모달 -->
        <%@ include file="components/create-board-modal.jsp" %>

    </main>

    <!-- 기타 기능: 예를 들어 사이드바 -->
    <%@ include file="components/sidebar.jsp" %>



</div>
</body>
</html>