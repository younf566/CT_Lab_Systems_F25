// Simple client-side filter for posts on the homepage
document.addEventListener('DOMContentLoaded', function () {
  const filterSelect = document.getElementById('tag-filter');
  if (!filterSelect) return;

  filterSelect.addEventListener('change', function () {
    const chosen = this.value;
    const items = document.querySelectorAll('.post-item');

    items.forEach(item => {
      const tags = item.dataset.tags ? item.dataset.tags.split(',') : [];
      if (chosen === 'all' || tags.includes(chosen)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
