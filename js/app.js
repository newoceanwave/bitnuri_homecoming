document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("applyForm");
  const input = document.getElementById("name");
  const list = document.getElementById("applicantList");

  // 신청자 데이터 (브라우저 메모리 저장용)
  let applicants = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = input.value.trim();
    if (!name) return;

    // 배열에 추가
    applicants.push(name);

    // UI 업데이트
    renderApplicants();

    // 입력창 초기화
    input.value = "";
  });

  function renderApplicants() {
    list.innerHTML = "";
    applicants.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      list.appendChild(li);
    });

    if (applicants.length === 0) {
      list.innerHTML = "<li>아직 신청자가 없습니다.</li>";
    }
  }
});
