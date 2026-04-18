# 📊 Sales Performance Dashboard — Power BI Project

> **A complete interactive Sales Analytics Dashboard** built as a Power BI portfolio project, featuring KPIs, trend analysis, category breakdown, regional performance, and actionable business insights.

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-View%20Dashboard-6366f1?style=for-the-badge)](https://power-bi-sales-dashboard-woad.vercel.app)

---

## 🌐 Live Demo

🔗 **[https://power-bi-sales-dashboard-woad.vercel.app](https://power-bi-sales-dashboard-woad.vercel.app)**

---

## 🖥️ Web Preview

The `dashboard/` folder contains a **fully interactive web preview** of the dashboard (HTML + Chart.js) that mirrors the Power BI report — great for portfolio display on GitHub Pages.

---

## 📁 Project Structure

```
PowerBI Sales Dashboard/
├── data/
│   └── sales_data.csv          ← Import this into Power BI
├── dashboard/                  ← Interactive web preview
│   ├── index.html
│   ├── style.css
│   └── app.js
├── screenshots/
│   └── dashboard_preview.png   ← Add after building in Power BI
├── Sales_Dashboard.pbix        ← Your Power BI file (save here)
└── README.md
```

---

## 📊 Dashboard Features

### 🔢 KPI Cards
| KPI | Description |
|-----|-------------|
| **Total Sales** | Sum of all revenue |
| **Total Profit** | Net profit across all orders |
| **Total Orders** | Count of unique transactions |
| **Profit Margin** | (Profit / Sales) × 100 |

### 📈 Visualizations
| Chart | Type | Purpose |
|-------|------|---------|
| Sales Over Time | Line Chart | Monthly revenue & profit trends |
| Sales by Category | Bar Chart | Technology vs Furniture vs Office Supplies |
| Sales by Region | Pie Chart | West / East / Central / South distribution |
| Profit by Sub-Category | Donut Chart | Most profitable product segments |

### 🗂️ Filters (Interactive)
- **Region Filter** — Filter all visuals by US region
- **Category Filter** — Drill into specific product categories
- **Search Bar** — Live search across the product table

### 🔍 Key Insights (Auto-generated)
- Highest-performing region
- Best product category
- Peak sales month
- Discount impact warnings

---

## 🔧 How to Build in Power BI

### Step 1 — Import Data
1. Open **Power BI Desktop**
2. Click **Home → Get Data → Text/CSV**
3. Load `data/sales_data.csv`
4. Click **Transform Data** to open Power Query

### Step 2 — Clean Data
In Power Query Editor:
- Set `Order Date` and `Ship Date` → **Date** format
- Set `Sales`, `Profit`, `Discount` → **Decimal Number**
- Remove any rows with null `Sales` values
- Click **Close & Apply**

### Step 3 — Create Measures (DAX)
Go to **Modeling → New Measure** and paste:

```dax
Total Sales = SUM('sales_data'[Sales])
```
```dax
Total Profit = SUM('sales_data'[Profit])
```
```dax
Total Orders = COUNTROWS('sales_data')
```
```dax
Profit Margin % = DIVIDE([Total Profit], [Total Sales]) * 100
```

### Step 4 — Create Visuals

| Visual | Fields |
|--------|--------|
| 📊 Card → Total Sales | Value: `[Total Sales]` |
| 📊 Card → Total Profit | Value: `[Total Profit]` |
| 📊 Card → Orders | Value: `[Total Orders]` |
| 📈 Line Chart | X: `Order Date`, Y: `[Total Sales]`, `[Total Profit]` |
| 📊 Bar Chart | X: `Category`, Y: `[Total Sales]` |
| 🥧 Pie Chart | Legend: `Region`, Values: `[Total Sales]` |
| 📋 Table | `Product Name`, `Category`, `Sales`, `Profit` |

### Step 5 — Add Slicers (Filters)
- Insert → **Slicer** → Field: `Region`
- Insert → **Slicer** → Field: `Category`

### Step 6 — Add Insights Text Box
- Insert → **Text Box**
- Type: `"West region leads all regions in total sales"`
- Type: `"Technology is the most profitable category"`

### Step 7 — Design & Polish
- Title: **"Sales Performance Dashboard"**
- Theme: Dark / Professional
- Align all visuals using the alignment toolbar
- Add company/project logo (optional)

### Step 8 — Save
- File → **Save As** → `Sales_Dashboard.pbix`

---

## 📊 Dataset Overview

**100 records** · US Sales 2023 · 4 Regions · 3 Categories

| Column | Type | Description |
|--------|------|-------------|
| `Order ID` | Text | Unique order identifier |
| `Order Date` | Date | Date order was placed |
| `Customer Name` | Text | Customer full name |
| `Segment` | Text | Consumer / Corporate / Home Office |
| `Region` | Text | West / East / Central / South |
| `Category` | Text | Furniture / Technology / Office Supplies |
| `Sub-Category` | Text | Product sub-group |
| `Product Name` | Text | Full product name |
| `Sales` | Decimal | Revenue (USD) |
| `Quantity` | Integer | Units ordered |
| `Discount` | Decimal | Discount applied (0–1) |
| `Profit` | Decimal | Net profit (USD) |

---

## 🚀 Viewing the Web Preview

Open `dashboard/index.html` in your browser, or serve it locally:

```bash
# Option 1: Python
cd dashboard && python3 -m http.server 3000
# Visit http://localhost:3000

# Option 2: Node.js
npx serve dashboard
```

Or simply double-click `dashboard/index.html`.

---

## 💡 Key Business Insights

| Insight | Finding |
|---------|---------|
| 🏆 Top Region | **West** — highest total sales |
| 📦 Best Category | **Technology** — most profitable |
| 📅 Peak Month | **April 2023** — large enterprise deal |
| ⚠️ Risk Area | Heavy discounts on Binders/Tables → negative profit |
| 💹 Profit Margin | ~32% overall (Technology drives this) |

---

## 🛠️ Tech Stack

**Power BI Dashboard**
- Power BI Desktop (`.pbix`)
- DAX (Data Analysis Expressions)
- Power Query (M Language)

**Web Preview**
- HTML5 / CSS3 / JavaScript (ES6+)
- [Chart.js 4.4](https://www.chartjs.org/) — all visualizations
- Google Fonts — Inter typeface

---

## 👤 Author

**Punit Yadav**  
📧 [your-email@example.com]  
🔗 [LinkedIn](https://linkedin.com/in/your-profile)  
🐙 [GitHub](https://github.com/your-username)

---

## 📄 License

MIT License — Free to use for learning and portfolio purposes.
