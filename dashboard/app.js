/* ============================================================
   app.js — Sales Performance Dashboard (Full Navigation)
   ============================================================ */

// ── DATA ─────────────────────────────────────────────────────
const RAW = [
  { month:"Jan", region:"South",   category:"Furniture",       subcat:"Bookcases",   product:"Bush Somerset Bookcase",           sales:261.96,  profit:41.91   },
  { month:"Jan", region:"South",   category:"Furniture",       subcat:"Chairs",      product:"Hon Deluxe Fabric Chairs",          sales:731.94,  profit:219.58  },
  { month:"Jan", region:"South",   category:"Office Supplies", subcat:"Labels",      product:"Self-Adhesive Address Labels",       sales:14.62,   profit:6.87    },
  { month:"Jan", region:"South",   category:"Furniture",       subcat:"Tables",      product:"Bretford CR4500 Table",              sales:957.58,  profit:-383.03 },
  { month:"Jan", region:"West",    category:"Technology",      subcat:"Phones",      product:"Moto E (2nd Gen)",                  sales:907.15,  profit:90.72   },
  { month:"Jan", region:"West",    category:"Furniture",       subcat:"Tables",      product:"Chromcraft Rectangular Tables",      sales:1706.18, profit:85.31   },
  { month:"Jan", region:"West",    category:"Technology",      subcat:"Phones",      product:"Konftel 250 Conference Phone",       sales:911.42,  profit:68.36   },
  { month:"Jan", region:"Central", category:"Office Supplies", subcat:"Appliances",  product:"Holmes HEPA Air Purifier",           sales:68.81,   profit:-123.86 },
  { month:"Jan", region:"Central", category:"Office Supplies", subcat:"Storage",     product:"Stur-D-Stor Shelving",               sales:665.88,  profit:13.32   },
  { month:"Feb", region:"West",    category:"Office Supplies", subcat:"Storage",     product:"Fellowes Super Stor/Drawer",         sales:55.50,   profit:9.99    },
  { month:"Feb", region:"West",    category:"Technology",      subcat:"Phones",      product:"Plantronics CS510 Headset",          sales:2249.90, profit:89.99   },
  { month:"Feb", region:"East",    category:"Office Supplies", subcat:"Binders",     product:"GBC DocuBind TL300",                 sales:1009.90, profit:-1107.17},
  { month:"Feb", region:"West",    category:"Furniture",       subcat:"Chairs",      product:"Novimex Executive Armchair",          sales:129.99,  profit:5.10    },
  { month:"Feb", region:"East",    category:"Technology",      subcat:"Phones",      product:"Polycom VVX 400 Office Phone",        sales:149.95,  profit:23.99   },
  { month:"Mar", region:"West",    category:"Furniture",       subcat:"Bookcases",   product:"Sauder Camden County Bookcase",       sales:205.48,  profit:7.98    },
  { month:"Mar", region:"West",    category:"Technology",      subcat:"Phones",      product:"Samsung Galaxy Note",                 sales:599.98,  profit:239.99  },
  { month:"Mar", region:"West",    category:"Technology",      subcat:"Copiers",     product:"Brother Fax Machine",                 sales:127.98,  profit:15.36   },
  { month:"Apr", region:"West",    category:"Technology",      subcat:"Phones",      product:"Apple iPhone 13",                     sales:999.00,  profit:349.65  },
  { month:"Apr", region:"South",   category:"Furniture",       subcat:"Chairs",      product:"Realspace PRO Bonded Leather Chair",  sales:419.98,  profit:62.99   },
  { month:"Apr", region:"East",    category:"Technology",      subcat:"Machines",    product:"Cisco TelePresence EX90",             sales:22638.48,profit:8811.01 },
  { month:"Apr", region:"West",    category:"Furniture",       subcat:"Bookcases",   product:"Sauder Beginnings Bookcase",          sales:139.90,  profit:17.49   },
  { month:"May", region:"Central", category:"Office Supplies", subcat:"Appliances",  product:"Leapfrog Mr. Sketch Markers",         sales:16.48,   profit:5.31    },
  { month:"May", region:"West",    category:"Technology",      subcat:"Phones",      product:"Cisco IP Phone 7942",                 sales:89.99,   profit:25.20   },
  { month:"May", region:"Central", category:"Technology",      subcat:"Machines",    product:"HP OfficeJet 200 Printer",            sales:165.00,  profit:62.70   },
  { month:"Jun", region:"West",    category:"Furniture",       subcat:"Tables",      product:"Chromcraft Bull-Nose Round Table",    sales:1023.05, profit:219.65  },
  { month:"Jun", region:"Central", category:"Technology",      subcat:"Phones",      product:"Polycom SoundPoint IP 335",           sales:119.99,  profit:40.80   },
  { month:"Jun", region:"Central", category:"Furniture",       subcat:"Furnishings", product:"Howard Miller Wall Clock",             sales:229.99,  profit:89.70   },
  { month:"Jul", region:"East",    category:"Technology",      subcat:"Phones",      product:"Apple iPhone 14 Pro",                 sales:1099.00, profit:428.61  },
  { month:"Jul", region:"East",    category:"Technology",      subcat:"Accessories", product:"Logitech MX Master 3",                sales:99.99,   profit:35.00   },
  { month:"Jul", region:"West",    category:"Furniture",       subcat:"Chairs",      product:"HON 5400 Task Chairs",                sales:219.98,  profit:76.99   },
  { month:"Jul", region:"East",    category:"Technology",      subcat:"Machines",    product:"Canon PIXMA MG3620",                  sales:239.99,  profit:84.00   },
  { month:"Jul", region:"West",    category:"Technology",      subcat:"Phones",      product:"Samsung Galaxy S23",                  sales:799.00,  profit:311.61  },
  { month:"Aug", region:"East",    category:"Furniture",       subcat:"Bookcases",   product:"Safco Arched Vertical File",           sales:159.99,  profit:54.40   },
  { month:"Aug", region:"South",   category:"Technology",      subcat:"Copiers",     product:"HP PageWide Pro 477dw",               sales:469.99,  profit:122.00  },
  { month:"Aug", region:"Central", category:"Furniture",       subcat:"Tables",      product:"Lesro Lenox 6' Folding Table",         sales:299.95,  profit:44.99   },
  { month:"Sep", region:"West",    category:"Technology",      subcat:"Phones",      product:"Cisco Unified IP Phone",               sales:219.98,  profit:74.79   },
  { month:"Sep", region:"West",    category:"Technology",      subcat:"Machines",    product:"Samsung Chromebook 4",                sales:299.99,  profit:107.99  },
  { month:"Sep", region:"East",    category:"Furniture",       subcat:"Chairs",      product:"Bretford Conference Tables",           sales:1599.98, profit:624.00  },
  { month:"Sep", region:"West",    category:"Technology",      subcat:"Phones",      product:"Jabra Evolve 65 UC Stereo",            sales:229.99,  profit:82.80   },
  { month:"Oct", region:"East",    category:"Furniture",       subcat:"Bookcases",   product:"Riverside Palais Royal Bookcase",      sales:2199.90, profit:329.99  },
  { month:"Oct", region:"East",    category:"Technology",      subcat:"Phones",      product:"Apple iPhone 14",                     sales:799.00,  profit:311.61  },
  { month:"Oct", region:"Central", category:"Technology",      subcat:"Machines",    product:"Fujitsu ScanSnap SV600",              sales:399.99,  profit:152.00  },
  { month:"Oct", region:"South",   category:"Furniture",       subcat:"Tables",      product:"Bretford CR4500 Slim Table",           sales:1699.98, profit:599.99  },
  { month:"Nov", region:"West",    category:"Technology",      subcat:"Phones",      product:"Motorola Edge+",                       sales:899.00,  profit:323.64  },
  { month:"Nov", region:"West",    category:"Technology",      subcat:"Copiers",     product:"Brother MFC-L3770CDW Printer",        sales:329.99,  profit:112.20  },
  { month:"Nov", region:"West",    category:"Technology",      subcat:"Machines",    product:"Apple MacBook Air",                   sales:1299.00, profit:506.61  },
  { month:"Nov", region:"Central", category:"Furniture",       subcat:"Chairs",      product:"Realspace Harrington Chair",           sales:169.98,  profit:62.99   },
  { month:"Dec", region:"East",    category:"Technology",      subcat:"Machines",    product:"Microsoft Surface Pro 9",             sales:1599.00, profit:623.61  },
  { month:"Dec", region:"West",    category:"Technology",      subcat:"Phones",      product:"Google Pixel 7",                      sales:599.00,  profit:233.61  },
  { month:"Dec", region:"South",   category:"Technology",      subcat:"Machines",    product:"Dell XPS 15",                         sales:1849.99, profit:721.50  },
  { month:"Dec", region:"Central", category:"Furniture",       subcat:"Tables",      product:"Lesro 6' Training Table",              sales:599.95,  profit:179.99  },
  { month:"Dec", region:"Central", category:"Technology",      subcat:"Phones",      product:"Poly Edge E220 IP Desk Phone",         sales:239.98,  profit:96.39   },
];

const MONTHS   = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const REGIONS  = ["West","East","Central","South"];
const CATS     = ["Technology","Furniture","Office Supplies"];
const PALETTE  = ["#6366f1","#22d3ee","#f59e0b","#10b981","#a855f7","#f97316"];
const REG_COLORS = { West:"#6366f1", East:"#22d3ee", Central:"#f59e0b", South:"#10b981" };
const gridColor  = "rgba(255,255,255,0.06)";

Chart.defaults.color        = "#94a3b8";
Chart.defaults.font.family  = "Inter";
Chart.defaults.font.size    = 12;
Chart.defaults.plugins.legend.display = false;

// ── UTILITIES ────────────────────────────────────────────────
const fmt     = (n) => "$" + Math.abs(n).toLocaleString("en-US",{maximumFractionDigits:0});
const fmtFull = (n) => (n<0?"-":"") + "$" + Math.abs(n).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});
const sum     = (arr,k) => arr.reduce((a,b)=> a + b[k], 0);

function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const k = item[key] || "Other";
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});
}

// ── CHART REGISTRY (to destroy on redraw) ────────────────────
const CHARTS = {};
function destroyChart(id) {
  if (CHARTS[id]) { CHARTS[id].destroy(); delete CHARTS[id]; }
}
function makeChart(id, config) {
  destroyChart(id);
  const ctx = document.getElementById(id);
  if (!ctx) return;
  CHARTS[id] = new Chart(ctx.getContext("2d"), config);
  return CHARTS[id];
}

// ── FILTER STATE ─────────────────────────────────────────────
let filteredData = [...RAW];

function getFiltered() {
  const region   = document.getElementById("filter-region")?.value   || "All";
  const category = document.getElementById("filter-category")?.value || "All";
  return RAW.filter(d =>
    (region   === "All" || d.region   === region) &&
    (category === "All" || d.category === category)
  );
}

function applyFilters() {
  filteredData = getFiltered();
  renderCurrentView();
}

document.getElementById("btn-reset").addEventListener("click", () => {
  document.getElementById("filter-region").value   = "All";
  document.getElementById("filter-category").value = "All";
  filteredData = [...RAW];
  renderCurrentView();
});

document.getElementById("filter-region").addEventListener("change",   applyFilters);
document.getElementById("filter-category").addEventListener("change", applyFilters);

// ── NAVIGATION ───────────────────────────────────────────────
let currentView = "overview";

const VIEW_META = {
  overview: { title: "Sales Performance Dashboard", sub: "FY 2025 · United States — All Metrics" },
  trends:   { title: "📈 Sales Trends",              sub: "Monthly revenue, profit & order volume" },
  products: { title: "📦 Product Analysis",          sub: "Category breakdown & top product table" },
  regions:  { title: "🌎 Region Performance",        sub: "Sales & profit split by US region" },
};

document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const view = item.dataset.view;
    switchView(view);
  });
});

function switchView(view) {
  // Update nav active state
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  document.querySelector(`[data-view="${view}"]`).classList.add("active");

  // Show/hide views with animation
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const target = document.getElementById(`view-${view}`);
  target.classList.add("active");

  // Update header
  document.getElementById("page-title").textContent = VIEW_META[view]?.title || view;
  document.getElementById("page-sub").textContent   = VIEW_META[view]?.sub   || "";

  currentView = view;
  renderCurrentView();
}

function renderCurrentView() {
  switch(currentView) {
    case "overview": renderOverview(); break;
    case "trends":   renderTrends();   break;
    case "products": renderProducts(); break;
    case "regions":  renderRegions();  break;
  }
}

// ── ANIMATE NUMBER ───────────────────────────────────────────
function animNum(id, target, formatter) {
  const el = document.getElementById(id);
  if (!el) return;
  const dur = 750, start = performance.now();
  const from = parseFloat(el.dataset.val || 0);
  el.dataset.val = target;
  (function tick(now) {
    const t    = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = formatter(from + (target - from) * ease);
    if (t < 1) requestAnimationFrame(tick);
  })(start);
}

// ── SPARKLINE ────────────────────────────────────────────────
function sparkline(id, data, color) {
  makeChart(id, {
    type:"line",
    data:{ labels:data.map((_,i)=>i), datasets:[{ data, borderColor:color, borderWidth:2, fill:false, pointRadius:0, tension:.4 }] },
    options:{ responsive:true, maintainAspectRatio:false, animation:{duration:600},
      plugins:{tooltip:{enabled:false},legend:{display:false}},
      scales:{x:{display:false},y:{display:false}} }
  });
}

// ════════════════════════════════════════════════════════════
// VIEW 1: OVERVIEW
// ════════════════════════════════════════════════════════════
function renderOverview() {
  const d = filteredData;
  const totalSales  = sum(d,"sales");
  const totalProfit = sum(d,"profit");
  const totalOrders = d.length;
  const margin      = totalSales > 0 ? (totalProfit/totalSales*100) : 0;

  animNum("kpi-total-sales",  totalSales,  v => "$"+Math.round(v).toLocaleString());
  animNum("kpi-total-profit", totalProfit, v => (v<0?"-":"")+"$"+Math.abs(Math.round(v)).toLocaleString());
  animNum("kpi-total-orders", totalOrders, v => Math.round(v).toString());
  animNum("kpi-margin",       margin,      v => v.toFixed(1)+"%");

  // Profit trend badge
  const pt = document.getElementById("kpi-profit-trend");
  if(pt) { pt.className = totalProfit>=0 ? "kpi-trend positive" : "kpi-trend negative";
           pt.textContent = totalProfit>=0 ? "↑ 12.5% YoY" : "↓ Below break-even"; }

  // Sparklines
  const bm = groupBy(d,"month");
  sparkline("spark-sales",  MONTHS.map(m=>sum(bm[m]||[],"sales")),  "#6366f1");
  sparkline("spark-profit", MONTHS.map(m=>sum(bm[m]||[],"profit")), "#10b981");
  sparkline("spark-orders", MONTHS.map(m=>(bm[m]||[]).length),      "#f59e0b");
  sparkline("spark-margin", MONTHS.map(m=>{
    const s=sum(bm[m]||[],"sales"), p=sum(bm[m]||[],"profit");
    return s>0?(p/s*100):0;
  }), "#22d3ee");

  // Line chart
  const salesM  = MONTHS.map(m=>sum(bm[m]||[],"sales"));
  const profitM = MONTHS.map(m=>sum(bm[m]||[],"profit"));

  const lineCtx = document.getElementById("chart-line")?.getContext("2d");
  if(lineCtx) {
    const sg = lineCtx.createLinearGradient(0,0,0,260);
    sg.addColorStop(0,"rgba(99,102,241,0.35)"); sg.addColorStop(1,"rgba(99,102,241,0)");
    const pg = lineCtx.createLinearGradient(0,0,0,260);
    pg.addColorStop(0,"rgba(34,211,238,0.25)"); pg.addColorStop(1,"rgba(34,211,238,0)");

    makeChart("chart-line",{
      type:"line",
      data:{ labels:MONTHS, datasets:[
        { label:"Sales",  data:salesM,  borderColor:"#6366f1", backgroundColor:sg, borderWidth:2.5, fill:true, tension:.4, pointRadius:4, pointBackgroundColor:"#6366f1", pointBorderColor:"#0a0d1a", pointBorderWidth:2 },
        { label:"Profit", data:profitM, borderColor:"#22d3ee", backgroundColor:pg, borderWidth:2,   fill:true, tension:.4, pointRadius:4, pointBackgroundColor:"#22d3ee", pointBorderColor:"#0a0d1a", pointBorderWidth:2 }
      ]},
      options:{ responsive:true, maintainAspectRatio:false, animation:{duration:900},
        plugins:{ legend:{display:false}, tooltip:{ mode:"index",intersect:false,backgroundColor:"#1e293b",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,padding:12,callbacks:{ label:c=>` ${c.dataset.label}: ${fmt(c.parsed.y)}` } } },
        scales:{ x:{grid:{color:gridColor}}, y:{grid:{color:gridColor}, ticks:{callback:v=>fmt(v)}} }
      }
    });
  }

  // Bar – Sales by Category
  const bc = groupBy(d,"category");
  const catLabels = CATS.filter(c=>bc[c]);
  makeChart("chart-bar-ov",{
    type:"bar",
    data:{ labels:catLabels, datasets:[{ data:catLabels.map(c=>sum(bc[c]||[],"sales")), backgroundColor:PALETTE.slice(0,3), borderRadius:8, borderSkipped:false }] },
    options:{ responsive:true, maintainAspectRatio:false, animation:{duration:800},
      plugins:{ legend:{display:false}, tooltip:{backgroundColor:"#1e293b",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,callbacks:{label:c=>` ${fmt(c.parsed.y)}`}} },
      scales:{ x:{grid:{display:false}}, y:{grid:{color:gridColor}, ticks:{callback:v=>fmt(v)}} }
    }
  });

  // Pie – Sales by Region
  const br = groupBy(d,"region");
  const regKeys = REGIONS.filter(r=>br[r]);
  makeChart("chart-pie-ov",{
    type:"pie",
    data:{ labels:regKeys, datasets:[{ data:regKeys.map(r=>sum(br[r]||[],"sales")), backgroundColor:regKeys.map(r=>REG_COLORS[r]||"#888"), borderColor:"#0a0d1a", borderWidth:3 }] },
    options:{ responsive:true, maintainAspectRatio:false, animation:{duration:900},
      plugins:{ legend:{display:true,position:"bottom",labels:{color:"#94a3b8",padding:12,font:{size:11}}}, tooltip:{backgroundColor:"#1e293b",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,callbacks:{label:c=>` ${c.label}: ${fmt(c.parsed)}`}} }
    }
  });

  // Insights
  renderInsights(d);
}

function renderInsights(d) {
  const br = groupBy(d,"region");
  const bc = groupBy(d,"category");
  const bm = groupBy(d,"month");

  let bestR="",bestRS=0; Object.entries(br).forEach(([r,v])=>{const s=sum(v,"sales");if(s>bestRS){bestRS=s;bestR=r;}});
  let bestC="",bestCS=0; Object.entries(bc).forEach(([c,v])=>{const s=sum(v,"sales");if(s>bestCS){bestCS=s;bestC=c;}});
  let bestM="",bestMS=0; Object.entries(bm).forEach(([m,v])=>{const s=sum(v,"sales");if(s>bestMS){bestMS=s;bestM=m;}});
  const totalS = sum(d,"sales"), totalP=sum(d,"profit");
  const mg = totalS>0?(totalP/totalS*100):0;

  const items = [
    { e:"🏆", t:`<strong>${bestR||"West"}</strong> region leads all regions with <strong>${fmt(bestRS)}</strong> in total sales.` },
    { e:"📦", t:`<strong>${bestC||"Technology"}</strong> is the top-selling category, reflecting high-value enterprise purchases.` },
    { e:"📅", t:`<strong>${bestM||"April"}</strong> was the peak month. Cisco TelePresence deal was a key driver.` },
    { e:"💹", t:`Overall profit margin is <strong>${mg.toFixed(1)}%</strong>. ${mg<20?"Focus on reducing deep discounts.":"Healthy profitability maintained."}` },
    { e:"⚠️", t:`Products with <strong>&gt;40% discount</strong> frequently generate negative profit — review Binders & Tables pricing.` },
  ];

  const el = document.getElementById("insight-list");
  if(!el) return;
  el.innerHTML = items.map((ins,i)=>`
    <div class="insight-item" style="animation-delay:${i*0.07}s">
      <span class="insight-emoji">${ins.e}</span>
      <p class="insight-text">${ins.t}</p>
    </div>`).join("");
}

// ════════════════════════════════════════════════════════════
// VIEW 2: SALES TRENDS
// ════════════════════════════════════════════════════════════
function renderTrends() {
  const d  = filteredData;
  const bm = groupBy(d,"month");

  const salesM  = MONTHS.map(m=>sum(bm[m]||[],"sales"));
  const profitM = MONTHS.map(m=>sum(bm[m]||[],"profit"));
  const ordersM = MONTHS.map(m=>(bm[m]||[]).length);
  const marginM = MONTHS.map(m=>{const s=sum(bm[m]||[],"sales"),p=sum(bm[m]||[],"profit");return s>0?(p/s*100):0;});

  const totalS  = sum(d,"sales");
  const avgS    = totalS / 12;
  const peakIdx = salesM.indexOf(Math.max(...salesM));

  animNum("t-kpi-sales",   totalS,  v=>"$"+Math.round(v).toLocaleString());
  animNum("t-kpi-avg",     avgS,    v=>"$"+Math.round(v).toLocaleString());
  const pk = document.getElementById("t-kpi-peak"); if(pk) pk.textContent = MONTHS[peakIdx];
  const mo = document.getElementById("t-kpi-months"); if(mo) mo.textContent = MONTHS.filter(m=>bm[m]).length;

  // Main trends line
  const tCtx = document.getElementById("chart-trends-line")?.getContext("2d");
  if(tCtx) {
    const sg = tCtx.createLinearGradient(0,0,0,300);
    sg.addColorStop(0,"rgba(99,102,241,0.35)"); sg.addColorStop(1,"rgba(99,102,241,0)");
    const pg = tCtx.createLinearGradient(0,0,0,300);
    pg.addColorStop(0,"rgba(34,211,238,0.25)"); pg.addColorStop(1,"rgba(34,211,238,0)");
    makeChart("chart-trends-line",{
      type:"line",
      data:{ labels:MONTHS, datasets:[
        { label:"Sales",  data:salesM,  borderColor:"#6366f1", backgroundColor:sg, borderWidth:2.5, fill:true, tension:.4, pointRadius:5, pointBackgroundColor:"#6366f1", pointBorderColor:"#0a0d1a", pointBorderWidth:2 },
        { label:"Profit", data:profitM, borderColor:"#22d3ee", backgroundColor:pg, borderWidth:2,   fill:true, tension:.4, pointRadius:5, pointBackgroundColor:"#22d3ee", pointBorderColor:"#0a0d1a", pointBorderWidth:2 }
      ]},
      options:{ responsive:true, maintainAspectRatio:false, animation:{duration:900},
        plugins:{ legend:{display:true, position:"top", labels:{color:"#94a3b8",padding:16}},
          tooltip:{ mode:"index",intersect:false,backgroundColor:"#1e293b",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,padding:12,callbacks:{label:c=>` ${c.dataset.label}: ${fmt(c.parsed.y)}`} } },
        scales:{ x:{grid:{color:gridColor}}, y:{grid:{color:gridColor},ticks:{callback:v=>fmt(v)}} }
      }
    });
  }

  // Orders bar
  makeChart("chart-trends-orders",{
    type:"bar",
    data:{ labels:MONTHS, datasets:[{ label:"Orders", data:ordersM, backgroundColor:"rgba(245,158,11,0.8)", borderRadius:6, borderSkipped:false }] },
    options:{ responsive:true, maintainAspectRatio:false, animation:{duration:800},
      plugins:{ legend:{display:false}, tooltip:{backgroundColor:"#1e293b",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,callbacks:{label:c=>` Orders: ${c.parsed.y}`}} },
      scales:{ x:{grid:{display:false}}, y:{grid:{color:gridColor}, ticks:{stepSize:1}} }
    }
  });

  // Margin line
  makeChart("chart-trends-margin",{
    type:"line",
    data:{ labels:MONTHS, datasets:[{ label:"%", data:marginM, borderColor:"#10b981", backgroundColor:"rgba(16,185,129,0.15)", fill:true, tension:.4, borderWidth:2.5, pointRadius:4, pointBackgroundColor:"#10b981" }] },
    options:{ responsive:true, maintainAspectRatio:false, animation:{duration:800},
      plugins:{ legend:{display:false}, tooltip:{backgroundColor:"#1e293b",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,callbacks:{label:c=>` Margin: ${c.parsed.y.toFixed(1)}%`}} },
      scales:{ x:{grid:{display:false}}, y:{grid:{color:gridColor}, ticks:{callback:v=>v.toFixed(0)+"%"}} }
    }
  });
}

// ════════════════════════════════════════════════════════════
// VIEW 3: PRODUCTS
// ════════════════════════════════════════════════════════════
let allRows = [], sortDir = {};

function renderProducts() {
  const d = filteredData;
  const bc = groupBy(d,"category");
  const catLabels = CATS.filter(c=>bc[c]);

  // Category bar
  makeChart("chart-prod-cat",{
    type:"bar",
    data:{ labels:catLabels, datasets:[
      { label:"Sales",  data:catLabels.map(c=>sum(bc[c]||[],"sales")),  backgroundColor:["rgba(99,102,241,0.85)","rgba(34,211,238,0.85)","rgba(245,158,11,0.85)"], borderRadius:10, borderSkipped:false },
    ]},
    options:{ responsive:true, maintainAspectRatio:false, animation:{duration:800},
      plugins:{ legend:{display:false}, tooltip:{backgroundColor:"#1e293b",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,callbacks:{label:c=>` Sales: ${fmt(c.parsed.y)}`}} },
      scales:{ x:{grid:{display:false}}, y:{grid:{color:gridColor}, ticks:{callback:v=>fmt(v)}} }
    }
  });

  // Donut – profit by sub-cat
  const bs = groupBy(d,"subcat");
  const scEntries = Object.entries(bs)
    .map(([k,v])=>({name:k, profit:sum(v,"profit")}))
    .sort((a,b)=>b.profit-a.profit).slice(0,6);

  makeChart("chart-prod-donut",{
    type:"doughnut",
    data:{ labels:scEntries.map(e=>e.name), datasets:[{ data:scEntries.map(e=>Math.max(e.profit,0)), backgroundColor:PALETTE, borderColor:"#0a0d1a", borderWidth:3, hoverOffset:8 }] },
    options:{ responsive:true, maintainAspectRatio:false, cutout:"62%", animation:{duration:800, animateRotate:true},
      plugins:{ legend:{display:true, position:"bottom",labels:{color:"#94a3b8",padding:10,font:{size:11}}},
        tooltip:{backgroundColor:"#1e293b",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,callbacks:{label:c=>` ${c.label}: ${fmt(c.parsed)}`}} }
    }
  });

  // Product table
  const bp = groupBy(d,"product");
  allRows = Object.entries(bp).map(([prod,rows])=>({
    product:prod, category:rows[0].category, region:rows[0].region,
    sales:sum(rows,"sales"), profit:sum(rows,"profit"),
    margin:sum(rows,"sales")>0?(sum(rows,"profit")/sum(rows,"sales")*100):0
  })).sort((a,b)=>b.sales-a.sales);

  displayTable(allRows);
}

function displayTable(rows) {
  const tbody = document.getElementById("table-body");
  if (!tbody) return;
  tbody.innerHTML = rows.slice(0,30).map((r,i)=>{
    const pc = r.profit>=0 ? "profit-pos" : "profit-neg";
    const mc = r.margin>=30 ? "margin-high" : r.margin>=15 ? "margin-mid" : "margin-low";
    return `<tr>
      <td title="${r.product}">${i+1}. ${r.product.length>30 ? r.product.substring(0,30)+"…" : r.product}</td>
      <td>${r.category}</td><td>${r.region}</td>
      <td>${fmtFull(r.sales)}</td>
      <td class="${pc}">${fmtFull(r.profit)}</td>
      <td><span class="margin-badge ${mc}">${r.margin.toFixed(1)}%</span></td>
    </tr>`;
  }).join("");
}

function filterTable() {
  const q = document.getElementById("table-search")?.value.toLowerCase()||"";
  displayTable(q ? allRows.filter(r=>
    r.product.toLowerCase().includes(q)||
    r.category.toLowerCase().includes(q)||
    r.region.toLowerCase().includes(q)
  ) : allRows);
}

function sortTable(col) {
  const keys = ["product","category","region","sales","profit","margin"];
  const key  = keys[col];
  sortDir[col] = !sortDir[col];
  allRows.sort((a,b)=> typeof a[key]==="string"
    ? (sortDir[col] ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]))
    : (sortDir[col] ? a[key]-b[key] : b[key]-a[key]));
  displayTable(allRows);
}

// ════════════════════════════════════════════════════════════
// VIEW 4: REGIONS
// ════════════════════════════════════════════════════════════
function renderRegions() {
  const d  = filteredData;
  const br = groupBy(d,"region");
  const regKeys = REGIONS.filter(r=>br[r]);

  // Region KPI cards
  const kpiContainer = document.getElementById("region-kpis");
  if(kpiContainer) {
    const classes = ["kpi-sales","kpi-profit","kpi-orders","kpi-margin"];
    kpiContainer.innerHTML = regKeys.map((r,i)=>{
      const rs = sum(br[r],"sales"), rp=sum(br[r],"profit"), ro=br[r].length;
      const rm = rs>0?(rp/rs*100):0;
      return `<div class="kpi-card ${classes[i%4]}">
        <div class="kpi-icon" style="font-size:22px">${r==="West"?"🌅":r==="East"?"🌆":r==="Central"?"🏙️":"☀️"}</div>
        <div class="kpi-content">
          <span class="kpi-label">${r} Region</span>
          <span class="kpi-value">${fmt(rs)}</span>
          <span class="kpi-trend ${rp>=0?"positive":"negative"}">${rp>=0?"↑":"↓"} ${Math.abs(rp/rs*100).toFixed(1)}% margin · ${ro} orders</span>
        </div>
      </div>`;
    }).join("");
  }

  // Pie
  makeChart("chart-reg-pie",{
    type:"pie",
    data:{ labels:regKeys, datasets:[{ data:regKeys.map(r=>sum(br[r],"sales")), backgroundColor:regKeys.map(r=>REG_COLORS[r]||"#888"), borderColor:"#0a0d1a", borderWidth:3 }] },
    options:{ responsive:true, maintainAspectRatio:false, animation:{duration:900},
      plugins:{ legend:{display:true,position:"bottom",labels:{color:"#94a3b8",padding:14,font:{size:12}}},
        tooltip:{backgroundColor:"#1e293b",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,callbacks:{label:c=>` ${c.label}: ${fmt(c.parsed)}`}} }
    }
  });

  // Bar – Profit by Region
  makeChart("chart-reg-bar",{
    type:"bar",
    data:{ labels:regKeys, datasets:[{ label:"Profit", data:regKeys.map(r=>sum(br[r],"profit")),
      backgroundColor:regKeys.map(r=>REG_COLORS[r]||"#888"), borderRadius:10, borderSkipped:false }] },
    options:{ responsive:true, maintainAspectRatio:false, animation:{duration:800},
      plugins:{ legend:{display:false}, tooltip:{backgroundColor:"#1e293b",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,callbacks:{label:c=>` Profit: ${fmt(c.parsed.y)}`}} },
      scales:{ x:{grid:{display:false}}, y:{grid:{color:gridColor}, ticks:{callback:v=>fmt(v)}} }
    }
  });

  // Multi-line – Region sales trends
  const bm = groupBy(d,"month");
  const regLine = makeChart("chart-reg-line",{
    type:"line",
    data:{ labels:MONTHS, datasets:regKeys.map(r=>({
      label:r,
      data:MONTHS.map(m=> sum((groupBy(bm[m]||[], "region")[r])||[],"sales")),
      borderColor:REG_COLORS[r], backgroundColor:"transparent",
      borderWidth:2.5, tension:.4, pointRadius:4,
      pointBackgroundColor:REG_COLORS[r], pointBorderColor:"#0a0d1a", pointBorderWidth:2
    }))},
    options:{ responsive:true, maintainAspectRatio:false, animation:{duration:1000},
      plugins:{ legend:{display:true, position:"top", labels:{color:"#94a3b8",padding:16,usePointStyle:true}},
        tooltip:{mode:"index",intersect:false,backgroundColor:"#1e293b",borderColor:"rgba(255,255,255,0.1)",borderWidth:1,padding:12,callbacks:{label:c=>` ${c.dataset.label}: ${fmt(c.parsed.y)}`}} },
      scales:{ x:{grid:{color:gridColor}}, y:{grid:{color:gridColor},ticks:{callback:v=>fmt(v)}} }
    }
  });
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  filteredData = [...RAW];
  renderOverview();
});
