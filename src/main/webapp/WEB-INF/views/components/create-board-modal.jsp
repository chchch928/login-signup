<div id="createBoardModal" class="modal">
    <div class="modal-content">
        <span class="close" id="closeModal">&times;</span>
        <h2>새 게시글 작성</h2>
        <form action="/board/write" method="post">
            <label for="title">제목:</label>
            <input type="text" id="title" name="title" required>

            <label for="author">작성자:</label>
            <input type="text" id="author" name="author" required>

            <label for="content">내용:</label>
            <textarea id="content" name="content" rows="5" required></textarea>

            <button type="submit">작성하기</button>
        </form>
    </div>
</div>