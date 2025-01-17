<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>PINGPOST</title>
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link rel="stylesheet" type="text/css" href="css/sidebar.css">
    <link rel="stylesheet" type="text/css" href="css/board.css">
    <link rel="stylesheet" type="text/css" href="css/modal.css">
</head>
<body>
<header>
    PINGPOST
</header>
<%@ include file="components/sidebar.jsp" %>
<div class="container">
    <%@ include file="components/board.jsp" %>
</div>
<div class="modal-overlay" id="modal-overlay"></div>
<div class="modal" id="modal">
    <%@ include file="components/create-board-modal.jsp" %>
</div>
<script src="js/index.js"></script>
<script src="js/modal.js"></script>
</body>
</html>

