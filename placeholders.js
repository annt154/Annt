
// ── PLACEHOLDER ẢNH TỰ ĐỘNG (đặt sớm để mọi onerror phía dưới dùng được ngay) ──
function escapeXml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function phSVG(label, sub, w, h){
  w = w || 400; h = h || 300;
  const fsL = Math.max(11, Math.min(16, w/26));
  const fsS = Math.max(9, Math.min(11, w/36));
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
    <rect width='100%' height='100%' fill='#e7e9e5'/>
    <rect x='4' y='4' width='${w-8}' height='${h-8}' fill='none' stroke='#8f9597' stroke-width='1' stroke-dasharray='3 3'/>
    <g transform='translate(${w/2},${h/2-14})' fill='none' stroke='#72767b' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'>
      <rect x='-22' y='-13' width='44' height='30' rx='2'/>
      <circle cx='0' cy='3' r='9'/>
      <rect x='-8' y='-20' width='16' height='8' rx='1'/>
    </g>
    <text x='50%' y='${h/2+28}' text-anchor='middle' font-family='monospace' font-size='${fsL}' fill='#202124' letter-spacing='.03em'>${escapeXml(label)}</text>
    <text x='50%' y='${h/2+45}' text-anchor='middle' font-family='monospace' font-size='${fsS}' fill='#72767b'>${escapeXml(sub)}</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}
