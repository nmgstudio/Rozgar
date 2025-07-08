// Simple search/filter for job listings on index.html
function setupSearchBar() {
  const searchInput = document.getElementById('site-search');
  const jobsTable = document.getElementById('jobs-table');
  if (!searchInput || !jobsTable) return;
  searchInput.addEventListener('input', function () {
    const value = this.value.toLowerCase();
    const rows = jobsTable.querySelectorAll('tbody tr');
    rows.forEach(row => {
      let show = false;
      row.querySelectorAll('td').forEach(td => {
        if (td.textContent.toLowerCase().includes(value)) show = true;
      });
      row.style.display = show ? '' : 'none';
    });
  });
  // Filter bar logic
  document.getElementById('job-filter-form').addEventListener('input', function () {
    const location = document.getElementById('filter-location').value.toLowerCase();
    const type = document.getElementById('filter-type').value.toLowerCase();
    const date = document.getElementById('filter-date').value;
    const rows = jobsTable.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const tdLoc = row.getAttribute('data-location') || '';
      const tdType = row.getAttribute('data-type') || '';
      const tdDate = row.getAttribute('data-date') || '';
      let show = true;
      if (location && !tdLoc.toLowerCase().includes(location)) show = false;
      if (type && !tdType.toLowerCase().includes(type)) show = false;
      if (date && !tdDate.startsWith(date)) show = false;
      row.style.display = show ? '' : 'none';
    });
  });
}