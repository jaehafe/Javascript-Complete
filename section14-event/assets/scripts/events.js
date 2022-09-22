const button = document.querySelector('button');

const buttonClickHandler = (e) => {
  // e.target.disabled = true;
  console.log(e);
};

const anotherButtonClickHanlder = () => {
  console.log('This was clicked');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHanlder;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 5000);

// buttons.forEach((btn) => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', (e) => {
//   console.log(e);
// });

// 무한 스크롤
// let curElementNumber = 0;

// function scrollHandler() {
//   const distanceToBottom = document.body.getBoundingClientRect().bottom;

//   if (distanceToBottom < document.documentElement.clientHeight + 150) {
//     const newDataElement = document.createElement('div');
//     curElementNumber++;
//     newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//     document.body.append(newDataElement);
//   }
// }

// window.addEventListener('scroll', scrollHandler);

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const div = document.querySelector('div');

div.addEventListener(
  'click',
  (e) => {
    console.log('clicked div');
    console.log(e);
  },
  true
); //  true -> 캡쳐링의 일부임을 표시

button.addEventListener('click', (e) => {
  e.stopPropagation(); // 조상 요소 클릭 리스너만 실행되지 않음
  console.log('clicked div');
  console.log(e);
});
