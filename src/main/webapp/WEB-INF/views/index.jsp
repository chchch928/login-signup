<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="ko">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PingPost</title>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

    <title>PINGPOST</title>
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link rel="stylesheet" type="text/css" href="css/sidebar.css">
    <link rel="stylesheet" type="text/css" href="css/board.css">
    <link rel="stylesheet" type="text/css" href="css/modal.css">
    <link rel = "stylesheet" href="/css/board-detail-modal.css">
    <link rel="stylesheet" type="text/css" href ="css/create-board-modal.css">
    <script src="js/index.js" type="module" defer></script>
</head>
<body>
<header>
    PINGPOST
</header>
<div class="container board-page">
    <%@ include file="components/sidebar.jsp" %>
    <main class="feed">

    <%@ include file="components/board.jsp" %>
    </main>
<%@ include file="components/create-post-modal.jsp" %>
    <%@ include file="components/create-detail-modal.jsp" %>
</div>




</body>
</html>