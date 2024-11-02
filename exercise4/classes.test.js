import { Person, Student, Teacher } from "./classes";

describe("Klasa Person", () => {
  test("powinna utworzyć intancję klasy Person z poprawnymi atrybutami", () => {
    const person = new Person(1, "Jan", "Kowalski", "lubieplacki@placki.com");
    expect(person.id).toBe(1);
    expect(person.name).toBe("Jan");
    expect(person.surname).toBe("Kowalski");
    expect(person.email).toBe("lubieplacki@placki.com");
  });

  test("powinna zwrócić poprawne imię i nazwisko", () => {
    const person = new Person(1, "Jan", "Kowalski", "lubieplacki@placki.com");
    expect(person.getFullName()).toBe("Jan Kowalski");
  });

  test("powinna rzucić błedem jeśli podamy niepoprawny email", () => {
    expect(() => {
      new Person(1, "Jan", "Kowalski", "lubieplacki.placki.com");
    }).toThrowError("Nieprawidłowy email.");
  });
});

describe("Klasa Student", () => {
  let student;

  beforeEach(() => {
    student = new Student(1, "Jestem", "Student", "jestem@example.com.pl");
  });

  test("powinna dodać kurs do listy kursów", () => {
    student.addCourse("Super kurs");
    expect(student.courses).toContain("Super kurs");
  });

  test("powinna usunąć kurs z listy kursów", () => {
    student.addCourse("Super kurs");
    student.removeCourse("Super kurs");
    expect(student.courses).not.toContain("Super kurs");
  });

  test("powinna rzucić błąd jeśli próbujemy usunąć kurs, który nie jest na liście", () => {
    expect(() => {
      student.removeCourse("Super kurs");
    }).toThrowError("Nie uczęszcza na ten kurs.");
  });

  test("powinna dodać odznaczenie do listy odznaczeń", () => {
    student.addBadge("Super odznaczenie");
    expect(student.badges).toContain("Super odznaczenie");
  });

  test("powinna usunąć odznaczenie z listy odznaczeń", () => {
    student.addBadge("Super odznaczenie");
    student.removeBadge("Super odznaczenie");
    expect(student.badges).not.toContain("Super odznaczenie");
  });

  test("powinna rzucić błąd jeśli próbujemy usunąć odznaczenie, którego nie ma na liście", () => {
    expect(() => {
      student.removeBadge("Super odznaczenie");
    }).toThrowError("Nie ma takiego odznaczenia.");
  });
});

describe("Klasa Teacher", () => {
  let teacher;

  beforeEach(() => {
    teacher = new Teacher(1, "Jestem", "Nauczycielem", "nauczyciel@uczy.eu");
  });

  test("powinna dodać kurs do listy kursów", () => {
    teacher.addCourse("Super kurs");
    expect(teacher.courses).toContain("Super kurs");
  });

  test("powinna usunąć kurs z listy kursów", () => {
    teacher.addCourse("Super kurs");
    teacher.removeCourse("Super kurs");
    expect(teacher.courses).not.toContain("Super kurs");
  });

  test("powinna rzucić błąd jeśli próbujemy usunąć kurs, który nie jest na liście", () => {
    expect(() => {
      teacher.removeCourse("Super kurs");
    }).toThrowError("Nie prowadzi tego kursu.");
  });
});
