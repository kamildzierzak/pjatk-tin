import { useEffect, useState } from "react";

export const CoursesRoute = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="p-4">
      <div className="flex gap-4 p-4">
        <input
          disabled
          type="text"
          className="w-full rounded border-2 border-green-500 p-2"
          placeholder="Wyszukaj kurs"
        />
        <select
          disabled
          className="rounded border-2 border-green-500 p-2"
          name="filter"
          id="filter"
        >
          <option value="all">Wszystkie</option>
          <option value="personal">Dla 5-6 latków</option>
          <option value="personal">Dla 7-8 latków</option>
          <option value="personal">Dla 9-10 latków</option>
        </select>
        <a
          href="http://localhost:5173/app/courses/new"
          className="flex min-w-fit items-center rounded bg-green-500 p-2 text-white transition-all hover:scale-110"
        >
          Dodaj kurs
        </a>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-7 place-items-center items-center gap-2 border-b-2 border-green-500 p-2 font-semibold">
          <span>Nazwa</span>
          <span>Grupa wiekowa</span>
          <span>Kategoria</span>
          <span>Opis</span>
          <span>Termin</span>
          <span>Uczniów / Max</span>
          <span>Prowadzący</span>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {courses.map((course) => (
            <a
              href={`http://localhost:5173/app/courses/${course.id}`}
              key={course.id}
              className="hover:bg-green-300"
            >
              <div className="grid grid-cols-7 place-items-center items-center gap-2 rounded border-2 border-green-500 p-2">
                <span className="text-center font-semibold">{course.name}</span>
                <span>{course.age_group}</span>
                <span>{course.category}</span>
                <span>{course.description}</span>
                <span>{course.schedule}</span>
                <span>
                  {course.students} / {course.max_students}
                </span>
                <span>{course.teacher}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
