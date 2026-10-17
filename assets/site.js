document.querySelectorAll('[data-youtube]').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.youtube;
    if (!/^[a-zA-Z0-9_-]{11}$/.test(id)) return;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
    iframe.title = button.dataset.title;
    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    button.closest('.youtube-placeholder').replaceWith(iframe);
    iframe.tabIndex = 0;
    iframe.focus();
  });
});
