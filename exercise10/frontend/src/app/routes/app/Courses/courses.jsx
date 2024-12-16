import { useState } from "react";
import { useDisclosure } from "@hooks/useDisclosure";
import { useCourses } from "@hooks/useCourses";
import { ContentLayout } from "@components/layouts/content-layout";
import { Button } from "@components/Button";
import { Drawer } from "@components/Drawer";
import { DataTable } from "@components/DataTable";
import { useNavigate } from "react-router-dom";

export const CoursesRoute = () => {
  const { courses, loading, error, setCourses } = useCourses();
  const { isOpen, open, close } = useDisclosure();
  const [course, setCourse] = useState({
    name: "",
    age_group: "",
    category: "",
    description: "",
    schedule: "",
    max_students: "",
    teacher: "",
  });
  const navigate = useNavigate();

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
  ];

  const handleRowClick = (row) => {
    navigate(`/app/courses/${row.id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        close();
      } else {
        alert("Wystąpił błąd podczas dodawania kursu");
      }
    } catch (error) {
      console.error("Error adding course:", error);
      alert("Wystąpił błąd podczas dodawania kursu");
    }
  };

  return (
    <ContentLayout title="Kursy">
      {isOpen && (
        <Drawer onClose={close} title="Dodaj kurs">
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
                required
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
                required
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
                required
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
        <Button onClick={open} variant="primary">
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
