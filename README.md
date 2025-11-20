# Лабораторная работа №7: jQuery — сравнение анализа

Разработан сайт "Музыкальная школа №1" на HTML/CSS (Tailwind) + jQuery. Реализованы:
- **Табы:** Переключение контента (О нас, Отзывы, Контакты, Галерея) с классами active.
- **AJAX-цитаты:** Кнопка в "Отзывы" загружает цитату из DummyJSON API (`$.get()`).
- **Draggable:** Перетаскиваемый блок в "Контактах" (jQuery UI `.draggable()`).
- **Datepicker:** Календарь в "Контактах" (jQuery UI `.datepicker()`).
- **Галерея:** Динамическая загрузка 6 random фото (LoremFlickr) в табе "Галерея".
- **Навигация:** Fixed меню с плавной прокруткой (`$.animate()`).

## Выводы
jQuery упрощает код (chaining, AJAX), но vanilla JS эффективнее сегодня (быстрее, без overhead). Переписывание учит понимать DOM API. Проект демонстрирует баланс: jQuery для UI, vanilla для анимаций.

### 1. Какие jQuery-функции использовались?
- **Селекторы:** `$()` для поиска (`.tab-btn`, `#gallery-grid`).
- **События:** `.on('click')` для табов/кнопок/галереи.
- **DOM-манипуляции:** `.removeClass()`, `.addClass()`, `.html()`, `.append()`, `.text()`, `.attr()`.
- **AJAX:** `$.get()` с `.done()`, `.fail()`, `.always()`.
- **Анимации:** `.animate({ scrollTop: ... })` для прокрутки.
- **jQuery UI:** `.draggable()`, `.datepicker()`, `.dialog()` для модала.

### 2. Почему jQuery используется в интерфейсах?
jQuery упрощает создание интерактивных UI: chaining для цепочек действий (e.g., клик → класс + анимация), widgets (draggable/dialog) для готовых компонентов, AJAX для динамики без релоада. В интерфейсах (табы, модалы) — меньше кода, кросс-браузерность (legacy IE). Минус: overhead для современных проектов (лучше React/Vue).

### 3. Почему jQuery используется в интерфейсах? (повтор)
jQuery популярен в UI из-за простоты: селекторы как CSS, события унифицированы (`.on()` вместо if-else для браузеров). Для динамики (AJAX в цитатах/галерее) — `$.get()` быстрее XMLHttpRequest. В 2025 — для legacy/прототипов, но в новых UI (SPA) — vanilla + фреймворки (экономия размера).

### 4. Почему jQuery используется в интерфейсах? (повтор)
В интерфейсах jQuery ускоряет разработку: chaining (`.find().addClass().fadeIn()`) — читаемо, как "предложение". UI-виджеты (datepicker/dialog) — готовые, с темами. Для динамичных элементов (табы, модалы) — меньше boilerplate. Сегодня — для простых сайтов (как наш), где vanilla слишком verbose для новичков.

- Скриншоты:
<img width="1066" height="316" alt="image" src="https://github.com/user-attachments/assets/eda1085e-2e24-41d1-afff-46b3fb74cbcc" />
<img width="702" height="480" alt="image" src="https://github.com/user-attachments/assets/7e8094d0-cab8-426f-9980-3fdf59299a4f" />
<img width="884" height="181" alt="image" src="https://github.com/user-attachments/assets/04dc099b-b1b4-49c6-9503-757a226b0031" />



