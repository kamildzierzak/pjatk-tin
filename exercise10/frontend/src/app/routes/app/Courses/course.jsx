import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const CourseRoute = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/api/courses/${id}`)
      .then((response) => response.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error("Error fetching course:", error));
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

  const handleEdit = () => {
    navigate(`/app/courses/${id}/edit`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{course.name}</h1>
      <div className="mt-4">
        <div className="flex flex-col gap-2 p-2">
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="grid gap-4 font-semibold">
              <span>Grupa wiekowa</span>
              <span>Kategoria</span>
              <span>Opis</span>
              <span>Termin</span>
              <span>Limit miejsc</span>
              <span>Prowadzący</span>
            </div>
            <div className="grid gap-4">
              <span>{course.age_group}</span>
              <span>{course.category}</span>
              <span>{course.description}</span>
              <span>{course.schedule}</span>
              <span>{course.max_students}</span>
              <span>{course.teacher}</span>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <button
              className="tranistion-all rounded bg-red-500 p-2 text-white hover:scale-110 hover:bg-red-600"
              onClick={handleDelete}
            >
              Usuń
            </button>
            <button
              className="tranistion-all rounded bg-green-500 p-2 text-white hover:scale-110 hover:bg-green-600"
              onClick={handleEdit}
            >
              Edytuj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
