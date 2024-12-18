import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { ValidationMessage } from "@/components/ValidationMessage";

export const EditCourseRoute = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState({
    name: "",
    age_group: "",
    category: "",
    description: "",
    schedule: "",
    max_students: "",
    teacher: "",
  });
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/courses/${id}`);
        if (response.ok) {
          const data = await response.json();
          setCourse(data);
        } else {
          console.error("Error fetching course:", response.status);
        }
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };
    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const validateCourse = () => {
    const errors = {};

    if (!course.name.trim() || course.name.length < 3)
      errors.name = "Nazwa kursu jest wymagana i musi mieć co najmniej 3 znaki";

    if (!course.age_group.trim())
      errors.age_group = "Wymagane jest podanie grupy wiekowej";

    if (!course.teacher.trim())
      errors.teacher = "Wymagane jest wybranie prowadzącego";

    if (course.max_students < 8 || course.max_students > 16) {
      errors.max_students = "Liczba uczestników musi być z zakresu od 8 do 16";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateCourse();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/courses/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });

      if (response.ok) {
        alert("Kurs został zaktualizowany");
        navigate(`/app/courses/${id}`);
      } else {
        alert("Wystąpił błąd podczas aktualizacji kursu");
      }
    } catch (error) {
      console.error("Error updating course:", error);
      alert("Wystąpił błąd podczas aktualizacji kursu");
    }
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Edytuj kurs</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="block font-semibold">
            Nazwa kursu *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={course.name}
            onChange={handleChange}
            placeholder="Nazwa kursu"
            className="w-full rounded border p-2"
          />
          <ValidationMessage
            isValid={!validationErrors.name}
            message={validationErrors.name}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="age_group" className="block font-semibold">
            Grupa wiekowa *
          </label>
          <input
            type="text"
            id="age_group"
            name="age_group"
            value={course.age_group}
            onChange={handleChange}
            placeholder="Grupa wiekowa"
            className="w-full rounded border p-2"
          />
          <ValidationMessage
            isValid={!validationErrors.age_group}
            message={validationErrors.age_group}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="block font-semibold">
            Kategoria
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={course.category}
            onChange={handleChange}
            placeholder="Kategoria"
            className="w-full rounded border p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="block font-semibold">
            Opis
          </label>
          <textarea
            id="description"
            name="description"
            value={course.description}
            onChange={handleChange}
            placeholder="Opis"
            className="w-full rounded border p-2"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="schedule" className="block font-semibold">
            Termin
          </label>
          <input
            type="text"
            id="schedule"
            name="schedule"
            value={course.schedule}
            onChange={handleChange}
            placeholder="Termin"
            className="w-full rounded border p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="max_students" className="block font-semibold">
            Limit miejsc
          </label>
          <input
            type="number"
            id="max_students"
            name="max_students"
            value={course.max_students}
            onChange={handleChange}
            placeholder="Limit miejsc"
            className="w-full rounded border p-2"
          />
          <ValidationMessage
            isValid={!validationErrors.max_students}
            message={validationErrors.max_students}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="teacher" className="block font-semibold">
            Prowadzący *
          </label>
          <input
            type="text"
            id="teacher"
            name="teacher"
            value={course.teacher}
            onChange={handleChange}
            placeholder="Prowadzący"
            className="w-full rounded border p-2"
          />
          <ValidationMessage
            isValid={!validationErrors.teacher}
            message={validationErrors.teacher}
          />
        </div>
        <Button type="submit" variant="primary" className="mx-auto">
          Zapisz zmiany
        </Button>
      </form>
    </div>
  );
};
