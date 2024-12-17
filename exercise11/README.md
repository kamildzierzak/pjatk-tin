# Zadanie 11 - s26035

## Jak uruchomić?

Aby uruchomić aplikację należy:

1. W folderze głównym projektu uruchomić komendę `npm run install:all`.
2. Po zakończeniu instalacji, uruchomić komendę `npm run dev`.
3. Backend powinien działać na porcie 3000, a frontend na porcie 5173. Aplikacja powinna być dostępna pod adresem [http://localhost:5173](http://localhost:5173).
4. Działającą funkcjonalność obejmującą wymagania zadania można zobaczyć po uruchomieniu aplikacji pod adresem [http://localhost:5173/app/](http://localhost:5173/app/).

- Komponent stanowy obługujący listę elementów CoursesRoute można zobaczyć na [http://localhost:5173/app/courses](http://localhost:5173/app/courses). Lista elementów wyświetlana jest przy pomocy komponentu bezstanowego DataTable.
- Formularz dodający nowy kurs widoczny będzie po kliknięciu przycisku "Dodaj kurs" w prawym górnym rogu listy kursów. Wysunie się Drawer z prawej strony, w którym można wprowadzić dane nowego kursu. Po kliknięciu przycisku "Dodaj" nowy kurs zostanie dodany do listy na stronie jak i serwerze.
- React Router wyświetla kilka różnych widoków w zależności od ścieżki. W przypadku nieistniejącej ścieżki wyświetlany jest komponent NotFoundRoute.
  - [http://localhost:5173/app/courses](http://localhost:5173/app/courses) - wyświetla komponent CoursesRoute.
  - [http://localhost:5173/app/courses/:id](http://localhost:5173/app/courses/:id) - wyświetla komponent CourseDetailsRoute z danymi kursu o podanym id.
  - [http://localhost:5173/app/courses/:id/edit](http://localhost:5173/app/courses/:id/edit) - wyświetla komponent CourseEditRoute z formularzem edycji kursu o podanym id.
  - [http://localhost:5173/ilikepizza](http://localhost:5173/ilikepizza) - wyświetla komponent NotFoundRoute.
  - [http://localhost:5173/app/ilikepineapple](http://localhost:5173/app/ilikepineapple) - wyświetla komponent NotFoundAppRoute.
