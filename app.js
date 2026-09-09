const layers = [
  {
    className: 'map-detail',
    label: 'GLOBAL MARKET NAVIGATION',
    title: '先看清市场全局，<br>再决定往哪里走。',
    desc: '覆盖全球主要指数与资产，通过趋势扫描和阶段识别，快速发现阶段变化，把握市场大方向。',
    items: ['全球指数与资产地图', '股票 / ETF 趋势扫描', '阶段变化快速识别', '一站式市场导航']
  },
  {
    className: 'stage-detail',
    label: 'WEEKLY TREND ANALYSIS',
    title: '识别趋势生命周期，<br>理解市场所处阶段。',
    desc: '用周线四阶段框架观察中长期趋势，将完整周期划分为春、夏、秋、冬，并进一步识别子阶段与趋势拐点。',
    items: ['S1–S4 四阶段', '春夏秋冬周期语言', 'S2 / S4 子阶段识别', '中长期趋势拐点']
  },
  {
    className: 'status-detail',
    label: 'DAILY STATUS SCORE',
    title: '把模糊的市场感受，<br>转化为清晰的状态。',
    desc: '从多个维度评估趋势强弱与市场状态，以 0–100 综合评分和红绿灯提示，辅助确认观察与执行节奏。',
    items: ['趋势强弱分析', '市场状态识别', '0–100 综合评分', '红绿灯状态提示']
  },
  {
    className: 'dca-detail',
    label: 'CAPITAL MANAGEMENT',
    title: '让资金跟随周期，<br>而不是追随情绪。',
    desc: '面向长期配置与定投场景，根据市场趋势和温度调整资金节奏，降低波动风险，让策略更有纪律。',
    items: ['长期配置策略', '定投温度信号', '资金管理方案', '降低波动风险']
  }
];

const tabs = [...document.querySelectorAll('.layer-tab')];
const panel = document.querySelector('#layerDetail');
const label = document.querySelector('#detailLabel');
const title = document.querySelector('#detailTitle');
const desc = document.querySelector('#detailDesc');
const list = document.querySelector('#detailList');
const visual = document.querySelector('#detailVisual');
const toolVisuals = [
  visual.innerHTML,
  `<div class="tool-screen stage-screen">
    <div class="tool-screen-head"><span class="tool-symbol">↗</span><div><small>TREND LIFECYCLE</small><strong>LZ-4Stage 趋势周期</strong></div><em>WEEKLY</em></div>
    <div class="stage-chart">
      <div class="stage-zones"><span>S1<small>春</small></span><span>S2<small>夏</small></span><span>S3<small>秋</small></span><span>S4<small>冬</small></span></div>
      <svg viewBox="0 0 520 180" preserveAspectRatio="none" aria-label="四阶段趋势周期示意">
        <path class="ma-line" d="M0 150 C80 148 110 132 155 118 S235 48 315 55 S395 75 520 150" />
        <path class="price-line" d="M0 145 C42 138 76 151 118 126 S165 116 192 92 S230 79 254 49 S294 32 329 51 S366 46 394 72 S430 92 454 119 S490 128 520 158" />
        <circle cx="254" cy="49" r="6" /><circle cx="394" cy="72" r="6" />
      </svg>
      <div class="chart-caption"><span><i></i>价格趋势</span><span><i></i>MA30</span><b>S1 → S2 → S3 → S4</b></div>
    </div>
  </div>`,
  `<div class="tool-screen status-screen">
    <div class="tool-screen-head"><span class="tool-symbol">◫</span><div><small>MARKET STATUS</small><strong>LZ-Status 状态评分</strong></div><em>DAILY</em></div>
    <div class="status-dashboard">
      <div class="score-ring" style="--score:78"><div><strong>78</strong><small>综合评分</small></div></div>
      <div class="status-metrics">
        <div><span>趋势强度</span><b>强</b><i><em style="width:82%"></em></i></div>
        <div><span>市场动能</span><b>良好</b><i><em style="width:71%"></em></i></div>
        <div><span>波动状态</span><b>正常</b><i><em style="width:58%"></em></i></div>
      </div>
      <div class="traffic-light"><span></span><span class="active"></span><span></span><small>当前状态：趋势观察</small></div>
    </div>
  </div>`,
  `<div class="tool-screen dca-screen">
    <div class="tool-screen-head"><span class="tool-symbol">◇</span><div><small>CAPITAL RHYTHM</small><strong>LZ-DCA 资金节奏</strong></div><em>LONG TERM</em></div>
    <div class="dca-dashboard">
      <div class="temp-scale"><span class="hot">高温保护<small>控制投入</small></span><span class="wait">观望区间<small>耐心等待</small></span><span class="invest active">定投区间<small>分批投入</small></span><span class="cold">低温关注<small>准备资金</small></span></div>
      <div class="allocation-card"><small>本期资金方案</small><strong>600</strong><span>建议投入档位</span><div class="allocation-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><p><b>60%</b> 执行定投 <em>40%</em> 保留现金</p></div>
    </div>
  </div>`
];

tabs.forEach((tab) => tab.addEventListener('click', () => {
  const index = Number(tab.dataset.layer);
  const layer = layers[index];
  tabs.forEach((item) => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  panel.className = `layer-detail ${layer.className}`;
  label.textContent = layer.label;
  title.innerHTML = layer.title;
  desc.textContent = layer.desc;
  list.innerHTML = layer.items.map((item) => `<li>${item}</li>`).join('');
  visual.innerHTML = toolVisuals[index];
}));

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.desktop-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.classList.toggle('open');
  nav.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.classList.remove('open');
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const revealTargets = document.querySelectorAll('.section-head, .platform-card, .season, .statement p, .method-copy');
revealTargets.forEach((el) => el.classList.add('reveal'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach((el) => observer.observe(el));

const style = document.createElement('style');
style.textContent = '.reveal{opacity:0;transform:translateY(18px);transition:opacity .65s ease,transform .65s ease}.reveal.visible{opacity:1;transform:none}@media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none}}';
document.head.appendChild(style);
