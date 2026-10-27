// SVG diagrams. Each is drawn on a 360-unit-wide canvas so its labels stay
// legible at phone width and simply scale up on desktop.

const arrow = (id, accent = false) => `
  <defs>
    <marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" class="arrowhead${accent ? ' arrowhead--accent' : ''}"/>
    </marker>
  </defs>`;

export function descentDiagram() {
  return `
<svg class="diagram descent__svg" viewBox="0 0 360 260" role="img" aria-labelledby="descent-title descent-desc">
  <title id="descent-title">Gradient descent on a loss curve</title>
  <desc id="descent-desc" data-ar="منحنى خسارة محدّب. كل نقطة تحديث واحد. المعدل المنخفض يزحف، والمعدل المرتفع يتجاوز، والمعدل المناسب يصل إلى الحد الأدنى.">A convex loss curve. Each dot is one update. A low rate crawls, a high rate overshoots, a good rate lands at the minimum.</desc>
  <path class="line line--axis" d="M 30 220 L 335 220"/>
  <path class="line line--axis" d="M 30 220 L 30 28"/>
  <path class="curve" d="M 30 40 Q 180 400 330 40"/>
  <path class="line line--dash line--muted" d="M 180 220 L 180 246"/>
  <text class="t t--muted" x="180" y="258" text-anchor="middle">minimum</text>
  <text class="t t--muted" x="335" y="238" text-anchor="end">weight</text>
  <text class="t t--muted" x="30" y="20" text-anchor="start">loss</text>

  <g data-rate="low">
    <path class="trail" d="M 50 85 L 56 91 L 62 99 L 68 107 L 74 117 L 80 128"/>
    <circle class="pt" cx="50" cy="85" r="3"/><circle class="pt" cx="56" cy="91" r="3"/>
    <circle class="pt" cx="62" cy="99" r="3"/><circle class="pt" cx="68" cy="107" r="3"/>
    <circle class="pt" cx="74" cy="117" r="3"/><circle class="pt" cx="80" cy="128" r="3"/>
  </g>
  <g data-rate="good">
    <path class="trail" d="M 50 85 L 90 155 L 125 196 L 150 213 L 168 219 L 178 220 L 180 220"/>
    <circle class="pt" cx="50" cy="85" r="3"/><circle class="pt" cx="90" cy="155" r="3"/>
    <circle class="pt" cx="125" cy="196" r="3"/><circle class="pt" cx="150" cy="213" r="3"/>
    <circle class="pt" cx="168" cy="219" r="3"/><circle class="pt" cx="180" cy="220" r="3"/>
  </g>
  <g data-rate="high">
    <path class="trail" d="M 50 85 L 280 100 L 60 94 L 315 50 L 45 43"/>
    <circle class="pt" cx="50" cy="85" r="3"/><circle class="pt" cx="280" cy="100" r="3"/>
    <circle class="pt" cx="60" cy="94" r="3"/><circle class="pt" cx="315" cy="50" r="3"/>
    <circle class="pt" cx="45" cy="43" r="3"/>
  </g>
</svg>`;
}

export function loopDiagram() {
  return `
<svg class="diagram" viewBox="0 0 360 210" role="img" aria-labelledby="loop-title loop-desc">
  <title id="loop-title">The learning loop</title>
  <desc id="loop-desc" data-ar="تدخل البيانات إلى النموذج، فيتوقع، وتقيس الخسارة الخطأ، ويغيّر التحديث الأوزان، ثم تتكرر الحلقة.">Data enters the model, the model predicts, the loss measures the error, the update changes the weights, and the loop repeats.</desc>
  ${arrow('loop-arrow')}${arrow('loop-arrow-a', true)}
  <path class="line" d="M 48 100 L 84 100" marker-end="url(#loop-arrow)"/>
  <path class="line" d="M 123 100 L 159 100" marker-end="url(#loop-arrow)"/>
  <path class="line" d="M 198 100 L 234 100" marker-end="url(#loop-arrow)"/>
  <path class="line" d="M 273 100 L 309 100" marker-end="url(#loop-arrow)"/>
  <path class="line line--accent" d="M 330 88 L 330 48 L 105 48 L 105 82" marker-end="url(#loop-arrow-a)"/>
  <g class="ticks">
    <path class="line line--tick" d="M 30 90 L 30 110"/><path class="line line--tick" d="M 105 90 L 105 110"/>
    <path class="line line--tick" d="M 180 90 L 180 110"/><path class="line line--tick" d="M 255 90 L 255 110"/>
    <path class="line line--tick" d="M 330 90 L 330 110"/>
  </g>
  <text class="t" x="30" y="128" text-anchor="middle">data</text>
  <text class="t" x="105" y="128" text-anchor="middle">model</text>
  <text class="t" x="180" y="128" text-anchor="middle">prediction</text>
  <text class="t" x="255" y="128" text-anchor="middle">loss</text>
  <text class="t" x="330" y="128" text-anchor="middle">update</text>
  <text class="t t--muted" x="217" y="38" text-anchor="middle">repeat</text>
</svg>`;
}

export function biasDiagram() {
  return `
<svg class="diagram" viewBox="0 0 360 260" role="img" aria-labelledby="bias-title bias-desc">
  <title id="bias-title">The bias-variance trade-off</title>
  <desc id="bias-desc" data-ar="الخط المتقطّع هو خطأ التدريب، وينخفض كلما زاد تعقيد النموذج. المنحنى المتصل هو خطأ الاختبار، على شكل حرف U. أفضل نقطة في الوسط.">The dashed line is training error, falling as the model grows more complex. The solid line is test error, a U shape. The best point is in the middle.</desc>
  <path class="line line--axis" d="M 40 205 L 340 205"/>
  <path class="line line--axis" d="M 40 205 L 40 30"/>
  <path class="line line--muted line--dash" d="M 55 70 C 130 170, 220 195, 335 198"/>
  <path class="curve" d="M 55 75 C 130 190, 180 205, 220 190 C 265 168, 305 110, 335 75"/>
  <path class="line line--dash line--muted" d="M 200 195 L 200 216"/>
  <circle class="pt pt--accent" cx="200" cy="195" r="3"/>
  <text class="t t--accent" x="200" y="232" text-anchor="middle">sweet spot</text>
  <text class="t t--muted" x="55" y="55" text-anchor="start">underfit</text>
  <text class="t t--muted" x="335" y="55" text-anchor="end">overfit</text>
  <text class="t t--muted" x="330" y="165" text-anchor="end">test error</text>
  <text class="t t--muted" x="330" y="188" text-anchor="end">train error</text>
  <text class="t t--muted" x="340" y="238" text-anchor="end">model complexity</text>
  <text class="t t--muted" x="40" y="20" text-anchor="start">error</text>
</svg>`;
}

export function bayesDiagram() {
  return `
<svg class="diagram" viewBox="0 0 360 230" role="img" aria-labelledby="bayes-title bayes-desc">
  <title id="bayes-title">A Bayesian network</title>
  <desc id="bayes-desc" data-ar="رطوبة العشب تعتمد على المطر والرشّاش. السهم يعني تأثيرًا مباشرًا. يتيح الرسم طلب احتمال المطر بعد رؤية العشب مبللًا.">Wet grass depends on rain and on the sprinkler. An arrow is a direct influence. The graph lets you ask for the probability of rain after seeing wet grass.</desc>
  ${arrow('bayes-arrow')}
  <path class="line" d="M 80 78 L 158 148" marker-end="url(#bayes-arrow)"/>
  <path class="line" d="M 280 78 L 202 148" marker-end="url(#bayes-arrow)"/>
  <rect class="node" x="30" y="40" width="100" height="38"/>
  <rect class="node" x="230" y="40" width="100" height="38"/>
  <rect class="node" x="130" y="150" width="100" height="38"/>
  <text class="t" x="80" y="64" text-anchor="middle">rain</text>
  <text class="t" x="280" y="64" text-anchor="middle">sprinkler</text>
  <text class="t" x="180" y="174" text-anchor="middle">wet grass</text>
  <text class="t t--muted" x="180" y="216" text-anchor="middle">P(rain | wet grass)</text>
</svg>`;
}

export function agentDiagram() {
  return `
<svg class="diagram" viewBox="0 0 360 200" role="img" aria-labelledby="agent-title agent-desc">
  <title id="agent-title">The reinforcement learning loop</title>
  <desc id="agent-desc" data-ar="يتخذ الوكيل فعلًا، فتعيد البيئة حالة جديدة ومكافأة. تتغيّر السياسة لتزيد المكافأة.">The agent takes an action. The environment returns a new state and a reward. The policy changes to increase the reward.</desc>
  ${arrow('agent-arrow')}${arrow('agent-arrow-a', true)}
  <rect class="node" x="40" y="60" width="100" height="40"/>
  <rect class="node" x="220" y="60" width="100" height="40"/>
  <path class="line" d="M 140 70 L 212 70" marker-end="url(#agent-arrow)"/>
  <path class="line line--accent" d="M 220 92 L 148 92" marker-end="url(#agent-arrow-a)"/>
  <text class="t" x="90" y="86" text-anchor="middle">agent</text>
  <text class="t" x="270" y="86" text-anchor="middle">environment</text>
  <text class="t t--muted" x="176" y="58" text-anchor="middle">action</text>
  <text class="t t--muted" x="184" y="110" text-anchor="middle">state, reward</text>
</svg>`;
}

export function confusionDiagram() {
  return `
<svg class="diagram" viewBox="0 0 360 250" role="img" aria-labelledby="conf-title conf-desc">
  <title id="conf-title">The confusion matrix</title>
  <desc id="conf-desc" data-ar="أربع خلايا: إيجابية صحيحة، سلبية كاذبة، إيجابية كاذبة، سلبية صحيحة. طريقتان للصواب وطريقتان للخطأ.">Four cells: true positive, false negative, false positive, true negative. Two ways to be right and two ways to be wrong.</desc>
  <text class="t t--muted" x="145" y="58" text-anchor="middle">predicted yes</text>
  <text class="t t--muted" x="235" y="58" text-anchor="middle">predicted no</text>
  <text class="t t--muted" x="92" y="105" text-anchor="end">actual yes</text>
  <text class="t t--muted" x="92" y="175" text-anchor="end">actual no</text>
  <rect class="cell" x="100" y="70" width="180" height="140"/>
  <path class="line line--grid" d="M 190 70 L 190 210 M 100 140 L 280 140"/>
  <text class="t" x="145" y="105" text-anchor="middle">true positive</text>
  <text class="t" x="235" y="105" text-anchor="middle">false negative</text>
  <text class="t" x="145" y="175" text-anchor="middle">false positive</text>
  <text class="t" x="235" y="175" text-anchor="middle">true negative</text>
</svg>`;
}

export function factorDiagram() {
  return `
<svg class="diagram" viewBox="0 0 360 250" role="img" aria-labelledby="factor-title factor-desc">
  <title id="factor-title">Matrix factorisation</title>
  <desc id="factor-desc" data-ar="مصفوفة تقييمات ناقصة تتحلّل إلى مصفوفة أذواق المستخدمين ومصفوفة أذواق العناصر. التقييم المفقود هو الجداء النقطي للمتجهين.">A sparse rating matrix factorises into a user-taste matrix and an item-taste matrix. A missing rating is the dot product of the two vectors.</desc>
  <text class="t t--muted" x="59" y="48" text-anchor="middle">ratings</text>
  <text class="t t--muted" x="166" y="48" text-anchor="middle">user tastes</text>
  <text class="t t--muted" x="292" y="48" text-anchor="middle">item tastes</text>
  <g class="cells">
    <rect class="cell" x="20" y="60" width="78" height="90"/>
    <path class="line line--grid" d="M 46 60 L 46 150 M 72 60 L 72 150 M 20 90 L 98 90 M 20 120 L 98 120"/>
    <rect class="cell-filled" x="22" y="62" width="22" height="26"/><rect class="cell-filled" x="74" y="62" width="22" height="26"/>
    <rect class="cell-filled" x="48" y="92" width="22" height="26"/><rect class="cell-filled" x="22" y="122" width="22" height="26"/>
    <rect class="cell-filled" x="74" y="122" width="22" height="26"/>
  </g>
  <text class="t t--big" x="118" y="112" text-anchor="middle">≈</text>
  <g class="cells">
    <rect class="cell" x="140" y="60" width="52" height="90"/>
    <path class="line line--grid" d="M 166 60 L 166 150 M 140 90 L 192 90 M 140 120 L 192 120"/>
    <rect class="cell-soft" x="142" y="62" width="22" height="26"/><rect class="cell-soft" x="168" y="92" width="22" height="26"/>
    <rect class="cell-soft" x="142" y="122" width="22" height="26"/>
  </g>
  <text class="t t--big" x="211" y="112" text-anchor="middle">×</text>
  <g class="cells">
    <rect class="cell" x="240" y="60" width="78" height="60"/>
    <path class="line line--grid" d="M 266 60 L 266 120 M 292 60 L 292 120 M 240 90 L 318 90"/>
    <rect class="cell-soft" x="242" y="62" width="22" height="26"/><rect class="cell-soft" x="268" y="62" width="22" height="26"/>
    <rect class="cell-soft" x="294" y="62" width="22" height="26"/><rect class="cell-soft" x="268" y="92" width="22" height="26"/>
  </g>
  <text class="t t--muted" x="20" y="168" text-anchor="start">3 users</text>
  <text class="t t--muted" x="318" y="168" text-anchor="end">3 items</text>
  <text class="t t--muted" x="166" y="168" text-anchor="middle">2 tastes</text>
  <text class="t t--muted" x="292" y="168" text-anchor="middle">2 tastes</text>
  <text class="t t--muted" x="180" y="200" text-anchor="middle">a missing cell becomes a dot product</text>
  <text class="t t--muted" x="180" y="228" text-anchor="middle">of one user vector and one item vector</text>
</svg>`;
}

export function federatedDiagram() {
  return `
<svg class="diagram" viewBox="0 0 360 240" role="img" aria-labelledby="fed-title fed-desc">
  <title id="fed-title">Federated averaging</title>
  <desc id="fed-desc" data-ar="تتدرّب ثلاثة أجهزة محليًا، وترسل الأوزان فقط إلى الخادم. يجمعها الخادم في نموذج عالمي ويعيده.">Three devices train locally and send only weights to the server. The server averages them into a global model and sends it back.</desc>
  ${arrow('fed-arrow')}${arrow('fed-arrow-a', true)}
  <rect class="node" x="20" y="45" width="100" height="36"/>
  <rect class="node" x="20" y="105" width="100" height="36"/>
  <rect class="node" x="20" y="165" width="100" height="36"/>
  <rect class="node" x="235" y="105" width="100" height="36"/>
  <path class="line" d="M 120 63 L 227 116" marker-end="url(#fed-arrow)"/>
  <path class="line" d="M 120 123 L 227 123" marker-end="url(#fed-arrow)"/>
  <path class="line" d="M 120 183 L 227 130" marker-end="url(#fed-arrow)"/>
  <path class="line line--accent line--dash" d="M 285 141 L 285 218 L 70 218 L 70 201" marker-end="url(#fed-arrow-a)"/>
  <text class="t" x="70" y="68" text-anchor="middle">phone</text>
  <text class="t" x="70" y="128" text-anchor="middle">laptop</text>
  <text class="t" x="70" y="188" text-anchor="middle">clinic</text>
  <text class="t" x="285" y="128" text-anchor="middle">server</text>
  <text class="t t--muted" x="170" y="88" text-anchor="middle">weights</text>
  <text class="t t--accent" x="178" y="232" text-anchor="middle">global model</text>
</svg>`;
}

export function gaDiagram() {
  return `
<svg class="diagram" viewBox="0 0 360 160" role="img" aria-labelledby="ga-title ga-desc">
  <title id="ga-title">A genetic algorithm</title>
  <desc id="ga-desc" data-ar="تبدأ الخوارزمية بمجموعة حلول، تقيس لياقتها، تختار الأفضل، ثم تزاوج وتطفّر لتنتج الجيل التالي.">The algorithm starts with a population, scores fitness, selects the better candidates, then crosses and mutates them into the next generation.</desc>
  ${arrow('ga-arrow')}
  <path class="line" d="M 44 80 L 72 80" marker-end="url(#ga-arrow)"/>
  <path class="line" d="M 116 80 L 144 80" marker-end="url(#ga-arrow)"/>
  <path class="line" d="M 188 80 L 216 80" marker-end="url(#ga-arrow)"/>
  <path class="line" d="M 260 80 L 288 80" marker-end="url(#ga-arrow)"/>
  <g class="ticks">
    <path class="line line--tick" d="M 28 70 L 28 90"/><path class="line line--tick" d="M 100 70 L 100 90"/>
    <path class="line line--tick" d="M 172 70 L 172 90"/><path class="line line--tick" d="M 244 70 L 244 90"/>
    <path class="line line--tick" d="M 316 70 L 316 90"/>
  </g>
  <text class="t" x="28" y="112" text-anchor="middle">population</text>
  <text class="t" x="100" y="112" text-anchor="middle">fitness</text>
  <text class="t" x="172" y="112" text-anchor="middle">select</text>
  <text class="t" x="244" y="112" text-anchor="middle">crossover</text>
  <text class="t" x="316" y="112" text-anchor="middle">mutate</text>
  <text class="t t--muted" x="180" y="142" text-anchor="middle">then the next generation</text>
</svg>`;
}

export function rulesDiagram() {
  return `
<svg class="diagram" viewBox="0 0 360 190" role="img" aria-labelledby="rules-title rules-desc">
  <title id="rules-title">An association rule</title>
  <desc id="rules-desc" data-ar="قاعدة الارتباط تربط عنصرًا بعنصر: من يشتري الخبز يشتري الحليب. يقاس الدعم والثقة والرفع على المعاملات.">An association rule links one item to another: a basket with bread tends to have milk. Support, confidence and lift are measured over transactions.</desc>
  ${arrow('rules-arrow-a', true)}
  <rect class="node" x="30" y="35" width="90" height="38"/>
  <rect class="node" x="240" y="35" width="90" height="38"/>
  <path class="line line--accent" d="M 120 54 L 232 54" marker-end="url(#rules-arrow-a)"/>
  <text class="t" x="75" y="59" text-anchor="middle">bread</text>
  <text class="t" x="285" y="59" text-anchor="middle">milk</text>
  <text class="t t--muted" x="176" y="44" text-anchor="middle">rule</text>
  <path class="line line--grid" d="M 30 96 L 330 96"/>
  <text class="t t--muted" x="30" y="122" text-anchor="start">support: both items ÷ all baskets</text>
  <text class="t t--muted" x="30" y="146" text-anchor="start">confidence: both ÷ bread baskets</text>
  <text class="t t--muted" x="30" y="170" text-anchor="start">lift: confidence ÷ support of milk</text>
</svg>`;
}

export function semiDiagram() {
  return `
<svg class="diagram" viewBox="0 0 360 200" role="img" aria-labelledby="semi-title semi-desc">
  <title id="semi-title">Semi-supervised learning</title>
  <desc id="semi-desc" data-ar="قليل من النقاط الموسومة، وكثير من النقاط غير الموسومة. يستفيد النموذج من موضع النقاط غير الموسومة لرسم الحد الفاصل.">A few labelled points and many unlabelled ones. The model uses where the unlabelled points sit to place the boundary.</desc>
  <path class="line line--dash line--muted" d="M 196 20 C 160 70, 160 130, 196 180"/>
  <g class="dots">
    <circle class="dot-filled" cx="70" cy="55" r="4"/><circle class="dot-filled" cx="95" cy="105" r="4"/>
    <circle class="dot-hollow" cx="55" cy="130" r="3.5"/><circle class="dot-hollow" cx="80" cy="150" r="3.5"/>
    <circle class="dot-hollow" cx="120" cy="65" r="3.5"/><circle class="dot-hollow" cx="130" cy="140" r="3.5"/>
    <circle class="dot-hollow" cx="45" cy="85" r="3.5"/><circle class="dot-hollow" cx="150" cy="95" r="3.5"/>
    <circle class="dot-filled" cx="270" cy="60" r="4"/><circle class="dot-filled" cx="295" cy="135" r="4"/>
    <circle class="dot-hollow" cx="240" cy="105" r="3.5"/><circle class="dot-hollow" cx="265" cy="150" r="3.5"/>
    <circle class="dot-hollow" cx="310" cy="85" r="3.5"/><circle class="dot-hollow" cx="320" cy="160" r="3.5"/>
    <circle class="dot-hollow" cx="230" cy="50" r="3.5"/><circle class="dot-hollow" cx="285" cy="30" r="3.5"/>
  </g>
  <circle class="dot-filled" cx="30" cy="182" r="3.5"/>
  <text class="t t--muted" x="40" y="186" text-anchor="start">labelled</text>
  <circle class="dot-hollow" cx="145" cy="182" r="3.5"/>
  <text class="t t--muted" x="155" y="186" text-anchor="start">unlabelled</text>
</svg>`;
}

// Three k-means panels, kept as separate SVGs so the panels can stack on a phone.
export function kmeansPanels() {
  const A = [[35, 45], [50, 60], [30, 68], [60, 40], [42, 55]];
  const B = [[135, 40], [152, 52], [142, 68], [128, 58], [145, 45]];
  const C = [[80, 135], [100, 150], [72, 158], [95, 125], [88, 145]];
  const dot = ([x, y], kind) => {
    if (kind === 'a') return `<circle class="dot-filled" cx="${x}" cy="${y}" r="3.5"/>`;
    if (kind === 'b') return `<circle class="dot-hollow" cx="${x}" cy="${y}" r="3.5"/>`;
    return `<rect class="dot-square" x="${x - 3.5}" y="${y - 3.5}" width="7" height="7"/>`;
  };
  const all = (kindFn) => [...A.map((p) => dot(p, kindFn('a'))), ...B.map((p) => dot(p, kindFn('b'))), ...C.map((p) => dot(p, kindFn('c')))].join('');
  const cross = (x, y, cls) => `<path class="${cls}" d="M ${x - 5} ${y} L ${x + 5} ${y} M ${x} ${y - 5} L ${x} ${y + 5}"/>`;
  const empty = [...A, ...B, ...C].map(([x, y]) => `<circle class="dot-hollow" cx="${x}" cy="${y}" r="3.5"/>`).join('');

  const one = `
  <svg class="diagram" viewBox="0 0 180 180" role="img" aria-labelledby="km1-label">
    <title id="km1-label">Panel 1: three starting centres among the points</title>
    ${empty}
    ${cross(60, 80, 'cross')}${cross(115, 85, 'cross')}${cross(70, 145, 'cross')}
  </svg>`;
  const two = `
  <svg class="diagram" viewBox="0 0 180 180" role="img" aria-labelledby="km2-label">
    <title id="km2-label">Panel 2: points assigned to the nearest centre, then each centre moved to its mean</title>
    ${all((k) => k)}
    ${cross(60, 80, 'cross cross--ghost')}${cross(115, 85, 'cross cross--ghost')}${cross(70, 145, 'cross cross--ghost')}
    ${cross(43, 54, 'cross')}${cross(140, 53, 'cross')}${cross(87, 143, 'cross')}
    <path class="line line--accent line--dash" d="M 58 78 L 45 56" marker-end="url(#km-arrow-a)"/>
    <path class="line line--accent line--dash" d="M 114 83 L 138 56" marker-end="url(#km-arrow-a)"/>
    <path class="line line--accent line--dash" d="M 71 142 L 85 142" marker-end="url(#km-arrow-a)"/>
  </svg>`;
  const three = `
  <svg class="diagram" viewBox="0 0 180 180" role="img" aria-labelledby="km3-label">
    <title id="km3-label">Panel 3: the centres have stopped moving</title>
    ${all((k) => k)}
    ${cross(43, 54, 'cross')}${cross(140, 53, 'cross')}${cross(87, 143, 'cross')}
  </svg>`;

  const defs = `<defs>
    <marker id="km-arrow-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" class="arrowhead--accent"/>
    </marker>
  </defs>`;

  return { one, two: two.replace('<svg ', '<svg ').replace(`<title id="km2-label">`, `${defs}<title id="km2-label">`), three };
}

export const DIAGRAMS = {
  descent: descentDiagram,
  loop: loopDiagram,
  bias: biasDiagram,
  bayes: bayesDiagram,
  agent: agentDiagram,
  confusion: confusionDiagram,
  factor: factorDiagram,
  federated: federatedDiagram,
  ga: gaDiagram,
  rules: rulesDiagram,
  semi: semiDiagram,
};
