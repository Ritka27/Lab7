// Нативный JS: Анимация секций при скролле
document.addEventListener('DOMContentLoaded', function() {
    console.log('Нативный JS готов!');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    document.querySelectorAll('.section-enter').forEach(el => observer.observe(el));
});

// jQuery: Табы + Draggable + Datepicker + AJAX цитата + Динамическая галерея
$(document).ready(function() {
    console.log('jQuery готов!');
    $('body').css('background-color', '#f9f9f9');
    
    // Табы (с условием для галереи)
    $('.tab-btn').on('click', function() {
        $('.tab-btn').removeClass('active');
        $('.tab-content').removeClass('active');
        $(this).addClass('active');
        var tabId = $(this).data('tab');
        $('#' + tabId).addClass('active');
        
        // Динамическая галерея: Загрузка 6 random фото при клике на таб "Галерея"
        if (tabId === 'tab-4') {
            // Очищаем grid и показываем loader
            $('#gallery-grid').html('<div class="col-span-full text-center py-8"><p class="text-gray-500">Загружаем фото...</p></div>');
            
            // Массив тем для разнообразия (6 фото)
            var themes = ['music', 'concert', 'piano', 'violin', 'guitar', 'orchestra'];
            
            // Генерируем 6 random фото из LoremFlickr (бесплатно, без ключа)
            var html = '';
            themes.forEach(function(theme, index) {
                var randomSeed = Math.floor(Math.random() * 1000) + 1;  // Для уникальности
                var imgUrl = 'https://loremflickr.com/400/300/' + theme + '?random=' + randomSeed;
                var alt = 'Random фото: ' + theme;
                html += '<img src="' + imgUrl + '" data-full="' + imgUrl + '" alt="' + alt + '" class="gallery-img w-full h-64 object-cover rounded cursor-pointer">';
            });
            
            // Имитация загрузки (0.5 сек)
            setTimeout(function() {
                $('#gallery-grid').html(html);
                console.log('Загружено 6 random фото из LoremFlickr');
            }, 500);
        }
    });

    // Draggable
    if ($("#draggable").length) {
        $("#draggable").draggable();
        console.log('Draggable инициализирован!');
    }

    // Datepicker
    if ($("#datepicker").length) {
        $("#datepicker").datepicker({
            dateFormat: 'dd.mm.yy',
            minDate: 0,
            onSelect: function(dateText) {
                console.log('Выбрана дата: ' + dateText);
            }
        });
        console.log('Datepicker инициализирован!');
    }

    // AJAX: Загрузка цитаты из DummyJSON (бесплатный API без ключа)
    $('#loadQuote').on('click', function() {
        var $button = $(this);
        var originalText = $button.text();
        $button.prop('disabled', true).text('Загружается...');

        $.get('https://dummyjson.com/quotes/random')
            .done(function(data) {
                $('#quote p').text(data.quote);  // Текст цитаты
                $('#quote cite').text('— ' + data.author);  // Автор
                console.log('Цитата загружена:', data.quote, '—', data.author);
            })
            .fail(function(xhr, status, error) {
                alert('Ошибка: ' + status);
                console.error('AJAX fail:', status, error);
            })
            .always(function() {
                $button.prop('disabled', false).text(originalText);
            });
    });

    // Модал: Клик на фото галереи → jQuery UI Dialog
    $(document).on('click', '.gallery-img', function() {  // Динамический, для новых фото
        var src = $(this).attr('data-full') || $(this).attr('src');
        var alt = $(this).attr('alt');
        $('#modal-img').attr('src', src).attr('alt', alt);
        $('#modal-caption').text(alt);
        $('#modal').dialog({
            modal: true,
            width: '90%',
            height: '90%',
            resizable: false,
            closeText: 'Закрыть',
            position: { my: "center", at: "center", of: window }
        });
    });

    // Lazy-load: Vanilla IntersectionObserver для галереи (динамически)
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {  // Если есть data-src (для lazy)
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    // Наблюдаем за .gallery-img (новыми тоже)
    $(document).on('DOMNodeInserted', function(e) {
        if (e.target.classList.contains('gallery-img')) {
            imageObserver.observe(e.target);
        }
    });
    // Плавная прокрутка по навигации (для всех a[href^='#'])
$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var targetId = $(this).attr('href').substring(1);  // Убираем #
    var $target = $('#' + targetId);
    if ($target.length) {
        $('html, body').animate({
            scrollTop: $target.offset().top - 60  // Offset для fixed nav
        }, 500, 'swing');  // 500ms, easing 'swing'
        console.log('Скролл к: ' + targetId);
    }
});
});