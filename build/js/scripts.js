// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)
  

  function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    const query = searchInput.value.toLowerCase();
  
    // Здесь вы можете выполнить поиск в данных страницы или загрузить данные с сервера
    // и отобразить результаты в элементе .search-results
  
    // Пример: создадим список элементов, соответствующих запросу
    const results = ['Result 1', 'Result 2', 'Result 3'];
  
    // Очищаем текущие результаты
    searchResults.innerHTML = '';
  
    // Отображаем результаты
    results.forEach((result) => {
      const listItem = document.createElement('li');
      listItem.textContent = result;
      searchResults.appendChild(listItem);
    });
  
    // Отображаем результаты поиска
    searchResults.style.display = results.length > 0 ? 'block' : 'none';
  }
  
