
(function () {
  var btn = document.querySelector('.menu-btn');
  var panel = document.getElementById('mobile-nav');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var open = panel.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open);
  });
  panel.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { panel.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }
  });
})();
