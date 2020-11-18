const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   exercicio 1

  const addKey = (obj, key, value) => {
      obj[key] = value;

      console.log(obj);
  }

  addKey(lesson2, 'turno', 'manhã');

  // exercicio 2

  const keyList = (obj) => console.log(Object.keys(obj));

  keyList(lesson3);

  // exercicio 3

  const objLength = (obj) => console.log(Object.keys(obj).length);

  objLength(lesson1);

  // exercicio 4

  const valueList = (obj) => console.log(Object.values(obj));

  valueList(lesson2);

  // exercicio 5

 const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

  console.log(allLessons);

  // exercicio 6

  const totalStudents = (obj) => {
      let total = 0;
      let array = Object.keys(obj);

      for (index in array){
          total += obj[array[index]].numeroEstudantes;
      }

      console.log(total);
  }

  totalStudents(allLessons);

  // exercicio 7

  const valueKey = (obj, index) => {
      let value = Object.values(obj)[index];

      console.log(value);
  }

  valueKey(lesson1, 2);

  // exercicio 8

  const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let i in arr) {
      if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));

  // bonus 1

  const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (i in array) {
      if(obj[array[i]].materia === 'Matemática'){
      total += obj[array[i]].numeroAlunos;
      }
    }
    return total;
  }
  console.log(getNumberOfStudents(allLessons));

  // bonus 2

  const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (i in array) {
      if (array[i].professor === name) {
        allLessons.push(array[i].materia)
        allStudent += array[i].numeroAlunos;
      }
    }
    return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));

  
