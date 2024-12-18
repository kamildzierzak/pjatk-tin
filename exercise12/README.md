# Zadanie 12 - s26035

## Jak uruchomić?

Aby uruchomić aplikację należy:

1. W folderze głównym projektu uruchomić komendę `npm run install:all`.
2. Po zakończeniu instalacji, uruchomić komendę `npm run dev`.
3. Backend powinien działać na porcie 3000, a frontend na porcie 5173. Aplikacja powinna być dostępna pod adresem [http://localhost:5173](http://localhost:5173).
4. Działającą funkcjonalność obejmującą wymagania zadania można zobaczyć po uruchomieniu aplikacji pod adresem [http://localhost:5173/app/](http://localhost:5173/app/).

W folderze backend w pliku `server.js` znajduje się kod serwera z obsługą zapytań REST API.

- GET /api/courses - zwraca listę wszystkich kursów
- GET /api/courses/:id - zwraca kurs o podanym id (jeśli istnieje) lub 404 jeśli nie
- POST /api/courses - dodaje nowy kurs, waliduje wymagane pola, zwraca 201 w przypadku sukcesu, 400 w przypadku błędu walidacji
- PUT /api/courses/:id - aktualizuje kurs o podanym id, waliduje wymagane pola, zwraca 200 w przypadku sukcesu, 400 w przypadku błędu walidacji, 404 jeśli kurs o podanym id nie istnieje
- DELETE /api/courses/:id - usuwa kurs o podanym id, zwraca 204 w przypadku sukcesu, 404 jeśli kurs o podanym id nie istnieje

Zgodność z wzorcem REST po krótce:

- GET dla pobierania danych,
- POST dla dodawania nowych danych,
- PUT dla aktualizacji danych,
- DELETE dla usuwania danych.
- Wszystkie operacje zwracają odpowiednie statusy HTTP.
- Endpointy mają logiczne i spójne nazwy.
