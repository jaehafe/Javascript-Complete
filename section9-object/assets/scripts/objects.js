const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    // const { title: movieTitle } = info;
    const { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.call(movie) + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        text += `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle: () => {
      console.log(this);
      return this.info.title.toUpperCase();
      // this는 해당 함수를 호출한 모든 항목을 참조
    },
  };

  movies.push(newMovie);
  // console.log(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  // 화살표 함수는 this를 바인딩 하지 않고 컨텍스트를 유지한다
  // 혹은 함수의 외부에서 바인딩 되었을 this에 바인딩한다
  console.log(this);
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

// this, 일반함수와 화살표함수 차이

// const members = {
//   teamName: 'Blue Rockets',
//   people: ['Max', 'Manuel'],
//   getTeamMembers() {
//     this.people.forEach(function (p) {
//       console.log(this);
//       console.log(`${p} - ${this.teamName}`);
//     });
//   },
// };
// members.getTeamMembers();

// const members = {
//   teamName: 'Blue Rockets',
//   people: ['Max', 'Manuel'],
//   getTeamMembers() {
//     this.people.forEach((p) => {
//       console.log(this);
//       console.log(`${p} - ${this.teamName}`);
//     });
//   },
// };
// members.getTeamMembers();
