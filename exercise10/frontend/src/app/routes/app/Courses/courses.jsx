import { useEffect, useState } from "react";
import { DataTable } from "../../../../components/DataTable";

// TODO - move to config file
const API_URL = "http://localhost:3000/api";
const BASE_URL = "http://localhost:5173/app/courses";

export const CoursesRoute = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    fetch(`${API_URL}/courses`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleRowClick = (row) => {
    window.location.href = `${BASE_URL}/${row.id}`;
  };

  return (
    <div className="p-4">
      <div className="flex gap-4 p-4">
        <input
          type="text"
          className="w-full rounded border-2 border-green-500 p-2"
          placeholder="Wyszukaj kurs"
          disabled
        />
        <select
          className="rounded border-2 border-green-500 p-2"
          name="filter"
          id="filter"
          disabled
        >
          <option value="all">Wszystkie</option>
          <option value="5-6">Dla 5-6 latków</option>
          <option value="7-8">Dla 7-8 latków</option>
          <option value="9-10">Dla 9-10 latków</option>
        </select>
        <a
          href={`${BASE_URL}/new`}
          className="flex min-w-fit items-center rounded bg-green-500 p-2 text-white transition-all hover:scale-110 hover:bg-green-600"
        >
          Dodaj kurs
        </a>
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
    </div>
  );
};
