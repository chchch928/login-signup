<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="css/auth/components/layout.css">
    <link rel="stylesheet" href="css/auth/components/card.css">
    <link rel="stylesheet" href="css/auth/components/form.css">
    <link rel="stylesheet" href="css/auth/components/login.css">
</head>
<body>
<div class="login-container">
    <div class="card">
        <h2>로그인</h2>
        <form action="/login" method="post">
            <div class="form-group">
                <label for="username">아이디</label>
                <input type="text" id="username" name="username" placeholder="아이디 입력">
            </div>
            <div class="form-group">
                <label for="password">비밀번호</label>
                <input type="password" id="password" name="password" placeholder="비밀번호 입력">
            </div>
            <button type="submit" class="btn">로그인</button>
        </form>
        <div class="separator">또는</div>
        <a href="signup.jsp" class="btn-link">회원가입</a>
    </div>
</div>
</body>
</html>