<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입</title>
    <link rel="stylesheet" href="css/auth/pages/signup.css">

    <script type="module" src="/js/auth/signup.js" defer></script>
</head>
<body>
<div class="signup-container">
    <div class="card">
        <h2>회원가입</h2>
        <form action="/signup" method="post">
            <div class="form-group">
                <label for="username">아이디</label>
                <input type="text" id="username" name="username" placeholder="아이디 입력">
            </div>
            <div class="form-group">
                <label for="email">이메일</label>
                <input type="email" id="email" name="email" placeholder="이메일 입력">
            </div>
            <div class="form-group">
                <label for="password">비밀번호</label>
                <input type="password" id="password" name="password" placeholder="비밀번호 입력">
            </div>
            <div class="form-group">
                <label for="confirm-password">비밀번호 확인</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="비밀번호 확인">
            </div>
            <button type="submit" class="btn">회원가입</button>
        </form>
        <div class="separator">이미 계정이 있습니까?</div>
        <a href="/" class="btn-link">로그인</a>
    </div>
</div>
</body>
</html>
