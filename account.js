// 페이지 로드 시에 애니메이션 적용
document.addEventListener("DOMContentLoaded", function () {
  const UlElements = document.querySelectorAll('.account-panel ul');
  UlElements.forEach(UlElement => {
    const LiElements = UlElement.querySelectorAll('li');
    LiElements.forEach(element => {
      const copyTxt = element.querySelector('p').innerText;
      console.log(copyTxt, 'copyTxt');
      
      const copyButton = element.querySelectorAll('button')[0];
      copyButton.addEventListener('click', function () {
        copy(copyTxt);
      });
    });
  });
});

function copy(text) {
  // 복사
  navigator.clipboard.writeText(text);

  // 복사완료에 대해 Alert으로 띄우기
  alert("클립보드에 복사되었습니다.");
}