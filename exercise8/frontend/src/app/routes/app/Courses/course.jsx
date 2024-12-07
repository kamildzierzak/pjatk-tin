import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const CourseRoute = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/api/courses/${id}`)
      .then((response) => response.json())
      .then((data) => setCourse(data));
  }, [id]);

  const handleDelete = async () => {
    const userConfirmation = window.confirm(
      "Czy na pewno chcesz usunąć ten kurs?",
    );

    if (userConfirmation) {
      try {
        await fetch(`http://localhost:3000/api/courses/${id}`, {
          method: "DELETE",
        });
        alert("Kurs został usunięty");
        navigate("/app/courses");
      } catch (error) {
        console.log(error);
        alert("Wystąpił błąd podczas usuwania kursu");
      }
    }
  };

  return (
    <div className="p-4">
      <div className="mt-4">
        <div className="flex flex-col gap-2 rounded border-2 border-green-500 p-2">
          <span className="text-center text-2xl font-semibold">
            {course.name}
          </span>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="grid gap-4">
              <span>Grupa wiekowa</span>
              <span>Kategoria</span>
              <span>Opis</span>
              <span>Termin</span>
              <span>Liczba uczniów</span>
              <span>Prowadzący</span>
            </div>
            <div className="grid gap-4">
              <span>{course.age_group}</span>
              <span>{course.category}</span>
              <span>{course.description}</span>
              <span>{course.schedule}</span>
              <span>
                {course.students} / {course.max_students}
              </span>
              <span>{course.teacher}</span>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <button
              className="rounded bg-red-500 p-2 text-white"
              onClick={handleDelete}
            >
              Usuń
            </button>
            <button className="rounded bg-green-500 p-2 text-white">
              Edytuj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
