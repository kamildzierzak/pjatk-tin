import { useState } from "react";
import { useDisclosure } from "@hooks/useDisclosure";
import { useCourses } from "@hooks/useCourses";
import { ContentLayout } from "@components/layouts/content-layout";
import { Button } from "@components/Button";
import { Drawer } from "@components/Drawer";
import { DataTable } from "@components/DataTable";
import { useNavigate } from "react-router-dom";
import { ValidationMessage } from "@/components/ValidationMessage";

export const CoursesRoute = () => {
  const navigate = useNavigate();
  const { courses, loading, error, setCourses } = useCourses();
  const {
    isOpen: isAddCourseDrawerOpen,
    open: openAddCourseDrawer,
    close: closeAddCourseDrawer,
  } = useDisclosure();
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

  const handleRowClick = (row) => {
    navigate(`/app/courses/${row.id}`);
  };

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

  const handleAddCourse = async (e) => {
    e.preventDefault();

    const errors = validateCourse();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });

      if (response.ok) {
        alert("Kurs został dodany");
        const newCourse = await response.json();
        setCourses((prev) => [...prev, newCourse]);
        setCourse({
          name: "",
          age_group: "",
          category: "",
          description: "",
          schedule: "",
          max_students: "",
          teacher: "",
        });
        closeAddCourseDrawer();
      } else {
        alert("Wystąpił błąd podczas dodawania kursu");
      }
    } catch (error) {
      console.error("Error adding course:", error);
      alert("Wystąpił błąd podczas dodawania kursu");
    }
  };

  const handleCourseDelete = async (id) => {
    const userConfirmation = window.confirm(
      "Czy na pewno chcesz usunąć ten kurs?",
    );

    if (userConfirmation) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/courses/${id}`,
          {
            method: "DELETE",
          },
        );

        if (response.ok) {
          setCourses((prev) => prev.filter((course) => course.id !== id));
          alert("Kurs został usunięty");
        } else {
          alert("Wystąpił błąd podczas usuwania kursu");
        }
      } catch (error) {
        console.error("Error deleting course:", error);
        alert("Wystąpił błąd podczas usuwania kursu");
      }
    }
  };

  const columns = [
    { label: "Nazwa", accessor: "name", sortable: true },
    { label: "Grupa wiekowa", accessor: "age_group", sortable: false },
    { label: "Kategoria", accessor: "category", sortable: true },
    { label: "Opis", accessor: "description", sortable: false },
    { label: "Termin", accessor: "schedule", sortable: true },
    { label: "Nauczyciel", accessor: "teacher", sortable: true },
    {
      label: "Maksymalna liczba uczestników",
      accessor: "max_students",
      sortable: true,
    },
    {
      label: "Akcje",
      accessor: "actions",
      sortable: false,
      render: (row) => (
        <Button
          variant="danger"
          onClick={(e) => {
            e.stopPropagation();
            handleCourseDelete(row.id);
          }}
        >
          Usuń
        </Button>
      ),
    },
  ];

  return (
    <ContentLayout title="Kursy">
      {isAddCourseDrawerOpen && (
        <Drawer onClose={closeAddCourseDrawer} title="Dodaj kurs">
          <form onSubmit={handleAddCourse} className="grid gap-4">
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
                // required
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
                // required
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
                // required
              />
              <ValidationMessage
                isValid={!validationErrors.teacher}
                message={validationErrors.teacher}
              />
            </div>
            <Button type="submit" variant="primary" className="mx-auto">
              Dodaj kurs
            </Button>
          </form>
        </Drawer>
      )}
      <div className="flex gap-4 py-4">
        <input
          type="text"
          className="w-full rounded border-2 border-green-500 p-2"
          placeholder="Wyszukaj kurs"
          disabled
        />
        <Button onClick={openAddCourseDrawer} variant="primary">
          Dodaj kurs
        </Button>
      </div>
      {loading && <p>Ładowanie...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <DataTable
          columns={columns}
          data={courses}
          onRowClick={handleRowClick}
        />
      )}
    </ContentLayout>
  );
};
