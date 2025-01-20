
const $boardContainer = document.querySelector('.board-container');

async function fetchBoards(){
    const response = await fetchWithAuth('/api/posts');
    if(!response.ok) alert ('피드목록 불러오기 실패')
    return await response.json()
}

async function renderBoard(){

    const boardList = await fetchBoards();
    console.log(boardList);

}

function initBoard(){
    renderBoard();
}

export default initBoard;