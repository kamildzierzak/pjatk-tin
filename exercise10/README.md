# Zadanie 10 - s26035

## Jak uruchomić?

Aby uruchomić aplikację należy:

1. W folderze głównym projektu uruchomić komendę `npm run install:all`.
2. Po zakończeniu instalacji, uruchomić komendę `npm run dev`.
3. Backend powinien działać na porcie 3000, a frontend na porcie 5173. Aplikacja powinna być dostępna pod adresem `http://localhost:5173`.
4. Działającą funkcjonalność obejmującą wymagania zadania można zobaczyć po uruchomieniu aplikacji pod adresem `http://localhost:5173/app/courses`

- Create react app jest deprecated od początku 2024, więc zamiast tego użyłem Vite.
- App jest użyty jako głowny komponent, który renderuje wszystkie inne komponenty. Użyłem React Router do nawigacji między stronami.
- Główna funkcjonalność obejmuje zarządzanie listą kursów. W ramach tej funkcjonalności pokażę użyte komponenty:
  - Stateless komponenty:
    - Button
    - CourseListElement
    -
  - Stateful komponenty:
    - CourseList
    - CourseForm
