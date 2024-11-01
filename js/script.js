document.addEventListener("DOMContentLoaded", function () {
  const loginLink = document.querySelector(".fix-login");
  const targetNameElement = document.querySelector(".taget-name"); // 오타 수정: 'taget-name' -> 'target-name'
  const logintext = document.querySelector(".logintext");
  const loginicon = document.querySelectorAll(".loginpage");

  // 로컬 스토리지에서 username 가져오기
  const username = localStorage.getItem("username");
  console.log("Username from local storage:", username);

  if (username) {
    targetNameElement.textContent = username;
    logintext.textContent = "로그아웃";
  } else {
    logintext.textContent = "로그인";
  }

  loginLink.addEventListener("click", function (event) {
    if (logintext.textContent === "로그아웃") {
      event.preventDefault();
      const logoutConfirm = confirm("로그아웃하시겠습니까?");
      if (logoutConfirm) {
        targetNameElement.textContent = "";
        logintext.textContent = "로그인";
        localStorage.removeItem("username"); // 로컬 스토리지에서 username 제거
      }
    } else {
      alert("로그인이 필요합니다.");
    }
  });
  // 로그인 아이콘 클릭 시 로그인 상태 확인 후 알림창 표시
  loginicon.forEach(function (loginicon) {
    loginicon.addEventListener("click", function (event) {
      if (username) {
        event.preventDefault();
        alert("로그인 상태입니다.");
      }
    });
  });
  window.addEventListener("beforeunload", function () {});
});
