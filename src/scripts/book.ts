const menu = document.querySelector<HTMLButtonElement>('#menu-toggle');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  document.querySelector('#sidebar')?.classList.toggle('is-open', open);
});

const searchInput = document.querySelector<HTMLInputElement>('#search');
const searchPanel = document.querySelector<HTMLElement>('#search-results');
const searchList = document.querySelector('#search-list');
const searchCount = document.querySelector('#search-count');
const entries: {title: string; description: string; href: string; text: string}[] = JSON.parse(document.querySelector('#search-data')?.textContent || '[]');
const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g,'d');
function closeSearch() { if (searchPanel) searchPanel.hidden = true; }
searchInput?.addEventListener('input', () => {
  const query = normalize(searchInput.value.trim());
  if (!query) { closeSearch(); return; }
  const words = query.split(/\s+/);
  const matches = entries.filter(e => words.every(w => normalize(e.text).includes(w)));
  searchList?.replaceChildren();
  matches.forEach(e => {
    const a = document.createElement('a'); a.href = e.href;
    const title = document.createElement('strong'); title.textContent = e.title;
    const description = document.createElement('p'); description.textContent = e.description;
    a.append(title, description); searchList?.append(a);
  });
  if (searchCount) searchCount.textContent = matches.length ? `${matches.length} bài phù hợp` : 'Chưa tìm thấy. Thử từ ngắn hơn, ví dụ “Base” hoặc “người duyệt”.';
  if (searchPanel) searchPanel.hidden = false;
});
document.querySelector('#search-close')?.addEventListener('click', () => { closeSearch(); searchInput?.focus(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeSearch(); });

const dialog = document.querySelector<HTMLDialogElement>('#image-dialog');
let imageTrigger: HTMLButtonElement | null = null;
document.querySelectorAll<HTMLButtonElement>('[data-zoom]').forEach(button => {
  button.addEventListener('click', () => {
    const source = button.querySelector('img');
    const large = document.querySelector<HTMLImageElement>('#image-large');
    if (!source || !large || !dialog) return;
    large.src = source.src; large.alt = source.alt;
    const caption = document.querySelector('#image-caption');
    if (caption) caption.textContent = button.dataset.caption || source.alt;
    imageTrigger = button;
    dialog.showModal();
  });
});
document.querySelector('#image-close')?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
dialog?.addEventListener('close', () => imageTrigger?.focus());

const guide = document.querySelector<HTMLElement>('[data-guide]');
if (guide) {
  const boxes = [...guide.querySelectorAll<HTMLInputElement>('[data-step]')];
  const key = `tyg-lark:${guide.dataset.guide}`;
  let stored: unknown = [];
  try { stored = JSON.parse(localStorage.getItem(key) || '[]'); } catch { /* Reading works without storage. */ }
  const completed = Array.isArray(stored) ? stored : [];
  boxes.forEach(box => box.checked = completed.includes(box.dataset.step));
  const update = () => {
    const checked = boxes.filter(b => b.checked).map(b => b.dataset.step);
    const count = document.querySelector('#step-count');
    if(count) count.textContent = `${checked.length}/${boxes.length} bước đã đánh dấu`;
    try { localStorage.setItem(key, JSON.stringify(checked)); } catch { /* Storage can be disabled. */ }
  };
  boxes.forEach(box => box.addEventListener('change',update)); update();
}
