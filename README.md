# Task Scheduler

Task Scheduler — это одностраничное веб-приложение, созданное с использованием Vue.js, Vuex и Vue Router, которое позволяет пользователям создавать, редактировать, удалять и управлять задачами, включая их статус, приоритет и сроки выполнения. Приложение также поддерживает светлую и тёмную тему.

## Функционал
- Просмотр списка задач.
- Создание новых задач.
- Редактирование существующих задач (включая смену статуса).
- Удаление задач.
- Переключение между светлой и тёмной темой.

## Стек технологий
- **Vue.js** — для разработки пользовательского интерфейса.
- **Vuex** — для управления состоянием приложения.
- **Vue Router** — для навигации между страницами.
- **SCSS/CSS** — для стилизации.

## Установка
1. Убедитесь, что у вас установлен [Node.js](https://nodejs.org/).
2. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Edifiels/task-scheduler.git
   ```
3. Перейдите в директорию проекта:
   ```bash
   cd task-scheduler
   ```
4. Установите зависимости:
   ```bash
   npm install
   ```
5. Запустите приложение:
   ```bash
   npm run dev
   ```

Приложение будет доступно по адресу: `http://localhost:5173`.

## Структура проекта
```
project-root/
├── src/
│   ├── components/
│   │   ├── MyTasks.vue
│   │   ├── CreateTask.vue
│   │   ├── EditTask.vue
│   │   ├── TaskDetails.vue
│   │   └── Settings.vue
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   ├── modules/
│   │   │   ├── tasks.js
│   │   │   └── settings.js
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── public/
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Страницы
### 1. **Мои задачи**
- Отображает список всех задач.
- Позволяет переходить к редактированию или удалению задач.

### 2. **Создать задачу**
- Позволяет добавлять новые задачи с указанием заголовка, описания, приоритета, срока выполнения и начального статуса.

### 3. **Редактировать задачу**
- Позволяет редактировать существующие задачи, включая изменение их статуса на "Новая", "В работе" или "Завершена".

### 4. **Настройки**
- Переключение между светлой и тёмной темой приложения.

## Особенности
- **Локальное состояние:** Реализовано управление задачами через Vuex.
- **Динамическая маршрутизация:** Используется Vue Router для переходов между страницами.
- **Светлая и тёмная тема:** Удобное переключение для работы в разных условиях освещения.

---

Разработано с ❤️ на Vue.js.