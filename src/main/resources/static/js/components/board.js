
const $boardContainer = document.querySelector('.board-container');

async function fetchBoards(){
    const response = await fetch('api/posts');
    if(!response.ok) alert('피드 목록을 불러오는데 실패')
    return await response.json();
}

function formatDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
}

function truncateContent(writer, content, maxLength = 20) {
    // 1. 먼저 텍스트 길이 체크
    if (content.length <= maxLength) {
        return `
      <a href="#" class="post-username">${writer}</a>
      <span class="post-caption">${content}</span>
    `;
    }
    // 2. 긴 텍스트의 경우 처리
    const truncatedContent = content.substring(0, maxLength);
    return `
    <a href="#" class="post-username">${writer}</a>
    <span class="post-caption post-caption-truncated">
      <span class="truncated-text">${truncatedContent}...</span>
      <span class="full-text" style="display: none;">${content}</span>
    </span>
    <button class="more-button">더 보기</button>
  `;
}


function createBoardItem({title, content, writer,createdAt}){


    return `
    <div>
        <div class="board-item">
           <div class ="left-container">
           
                <h2>${title}</h2>
                <p>${truncateContent(content)}</p>
                <span class ="post-time">
                    ${formatDate(createdAt)}
                </span>
           </div>
            <div class = "right-container">
                <div class="post-username">
                ${writer}
            </div>
            
</div>
            
            
        </div>
        
    </div>`
}

// 피드 렌더링 함수
async function renderBoard(){
    const boardList = await fetchBoards();


    // html 생성
    $boardContainer.innerHTML = boardList.map(board => createBoardItem(board)).join('');
}
function initBoard(){
    renderBoard();
}
export default initBoard;