let initial = {
  isFetching: 'file',
pages:{
  object: ' ',
  class: ' ',
},
  objects: [  ],
}
const classreducer = (state = initial, action) => {
  if(action.type == 'setText'){
    return{...state, isFetching: 'text'}
  }
  if(action.type == 'setFile'){
    return{...state, isFetching: 'file'}
  }
  if(action.type == 'setBooks'){
    return{...state, objects: action.books}
  }
  if(action.type == 'disobj'){
    return{...state, pages: action.pages}
  }
  return state
}
export  default classreducer


//  {id: '2', format: 'text', name: "Таблица умножения", class: '1', about: "Статья про таблицу умножения", text: "Должен быть большой текст", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//  {id: '3', format: 'text', name: "Косинусы, синусы", class: '10', about: "Статья про косинусы и синусы", text: "Должен быть большой текст", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//  {id: '4', format: 'file', name: "Дискриминант", class: '8', about: "Книга про дискриминант какого нибудь автора", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//  {id: '5', format: 'file', name: "Дроби", class: '6', about: "Книга про дроби какого нибудь автора", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//  {id: '6', format: 'text', name: "Вычитание", class: '10', about: "Статья про вычитание", text: "Должен быть большой текст", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//  {id: '7', format: 'file', name: "Умножение", class: '10', about: "Книга про умножение какого нибудь автора", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//  {id: '8', format: 'file', name: "Сложение", class: '10', about: "Книга про сложение какого нибудь автора", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//  {id: '9', format: 'text', name: "Деление", class: '1', about: "Статья про деление", text: "Должен быть большой текст", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//  {id: '10', format: 'text', name: "Система уравнений", class: '10', about: "Статья про системе кравнений", text: "Должен быть большой текст", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"}
//{id: '1', format: 'file', name: "Окружность", class: '10', about: "Книга про Окружность какого нибудь автора", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '3', format: 'text', name: "Косинусы, синусы", class: '10', about: "Статья про косинусы и синусы", text: "Должен быть большой текст", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '4', format: 'file', name: "Овал", class: '8', about: "Книга про овал какого нибудь автора", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '5', format: 'file', name: "Паралельные прямые", class: '6', about: "Книга про паралельные прямые какого нибудь автора", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '6', format: 'text', name: "Паралепипед", class: '1', about: "Статья про Паралепипед", text: "Должен быть большой текст", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '7', format: 'file', name: "Ромб", class: '1', about: "Книга про Ромб какого нибудь автора", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '8', format: 'file', name: "дюйм", class: '1', about: "Книга про дюйм какого нибудь автора", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '9', format: 'text', name: "сантиметр", class: '1', about: "Статья про сантиметр", text: "Должен быть большой текст", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '10', format: 'text', name: "периметр", class: '10', about: "Статья про периметр", text: "Должен быть большой текст", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"}
//{id: '1', format: 'file', name: "Окружность", class: '1', about: "Книга про Окружность какого нибудь автора", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '2', format: 'text', name: "Квадрат", class: '1', about: "Статья про Квадрат", text: "Должен быть большой текст", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '3', format: 'text', name: "Косинусы, синусы", class: '1', about: "Статья про косинусы и синусы", text: "Должен быть большой текст", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '4', format: 'file', name: "Овал", class: '3', about: "Книга про овал какого нибудь автора", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '5', format: 'file', name: "Паралельные прямые", class: '3', about: "Книга про паралельные прямые какого нибудь автора", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '6', format: 'text', name: "Паралепипед", class: '1', about: "Статья про Паралепипед", text: "Должен быть большой текст", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '7', format: 'file', name: "Ромб", class: '1', about: "Книга про Ромб какого нибудь автора", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '8', format: 'file', name: "дюйм", class: '1', about: "Книга про дюйм какого нибудь автора", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '9', format: 'text', name: "сантиметр", class: '1', about: "Статья про сантиметр", text: "Должен быть большой текст", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"},
//{id: '10', format: 'text', name: "периметр", class: '4', about: "Статья про периметр", text: "Должен быть большой текст", src: "https://fileskachat.com/getfile/68186_1834f48631c9ab301f488ad669830a93"}
