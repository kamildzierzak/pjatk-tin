class Person {
  #id;
  #name;
  #surname;
  #email;

  constructor(id, name, surname, email) {
    this.#id = id;
    this.#name = name;
    this.#surname = surname;

    // Simplest email validation, regex would be better probably ;)
    if (!email.includes("@")) {
      throw new Error("Nieprawidłowy email.");
    }
    this.#email = email;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get surname() {
    return this.#surname;
  }

  get email() {
    return this.#email;
  }

  set name(name) {
    this.#name = name;
  }

  set surname(surname) {
    this.#surname = surname;
  }

  set email(email) {
    // Simplest email validation, regex would be better probably ;)
    if (!email.includes("@")) {
      throw new Error("Nieprawidłowy email.");
    }

    this.#email = email;
  }

  getFullName() {
    return `${this.#name} ${this.#surname}`;
  }
}

class Student extends Person {
  #courses;
  #badges;

  constructor(id, name, surname, email) {
    super(id, name, surname, email);
    this.#courses = [];
    this.#badges = [];
  }

  get courses() {
    // Return a copy of the array to prevent direct modification
    return [...this.#courses];
  }

  get badges() {
    // Return a copy of the array to prevent direct modification
    return [...this.#badges];
  }

  addCourse(course) {
    if (!this.isEnrolled(course)) {
      this.#courses.push(course);
    }
  }

  addBadge(badge) {
    if (!this.hasBadge(badge)) {
      this.#badges.push(badge);
    }
  }

  removeCourse(course) {
    if (!this.isEnrolled(course)) {
      throw new Error("Nie uczęszcza na ten kurs.");
    }

    this.#courses = this.#courses.filter(c => c !== course);
  }

  removeBadge(badge) {
    if (!this.hasBadge(badge)) {
      throw new Error("Nie ma takiego odznaczenia.");
    }

    this.#badges = this.#badges.filter(b => b !== badge);
  }

  isEnrolled(course) {
    return this.#courses.includes(course);
  }

  hasBadge(badge) {
    return this.#badges.includes(badge);
  }
}

class Teacher extends Person {
  #courses;

  constructor(id, name, surname, email) {
    super(id, name, surname, email);
    this.#courses = [];
  }

  get courses() {
    // Return a copy of the array to prevent direct modification
    return [...this.#courses];
  }

  addCourse(course) {
    if (!this.teaches(course)) {
      this.#courses.push(course);
    }
  }

  removeCourse(course) {
    if (!this.teaches(course)) {
      throw new Error("Nie prowadzi tego kursu.");
    }

    this.#courses = this.#courses.filter(c => c !== course);
  }

  teaches(course) {
    return this.#courses.includes(course);
  }
}

export { Person, Student, Teacher };
