"use client";

import React, { useState, useEffect, type ReactElement } from 'react';
import {
  BarChart, Bar,
  AreaChart, Area,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, ReferenceLine,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { ExternalLink, BarChart3, PieChart as PieIcon, TrendingUp, Activity, Zap, Radar, type LucideIcon } from 'lucide-react';
import { projects } from '@/content/portfolio';

const tooltipStyle = { backgroundColor: '#000', border: '1px solid #eab308', borderRadius: '8px' };
const tooltipLabelStyle = { color: '#fff' };

// Bellwether -> how much of the model's margin rests on a single feature.
//
// Real figures from the live /kc2 endpoint, not illustrative: the offline
// backtest over 11,188 events puts the model 0.107 PR-AUC above the best
// single-feature baseline, and re-fitting without `account_newness` alone
// drops that to 0.039 — under the 0.05 the pre-registered promotion rule
// demands. The chart exists to show the finding the project publishes against
// itself, which is the reason to look at it at all.
const bellwetherData = [
  { variant: 'All 28 features', margin: 0.107 },
  { variant: 'Minus account age', margin: 0.039 },
];

const BELLWETHER_THRESHOLD = 0.05;

// GridCast -> what each choice actually costs, in gCO2/kWh.
//
// Real figures from the live planner (/v1/plan, 2-hour load, 24-hour window),
// not illustrative. The point of the chart is that the overnight habit almost
// everyone follows sits within 1% of not thinking about it at all.
const gridCastData = [
  { choice: 'Recommended', intensity: 52.5 },
  { choice: 'Random time', intensity: 125.6 },
  { choice: 'Wait til 3am', intensity: 166.8 },
  { choice: 'Run it now', intensity: 168.0 },
];

// Project 1: Job Data Analysis (Final Year Project) -> Job Market Openings BarChart
const jobMarketData = [
  { role: 'Data Analyst', postings: 4200, salary: 85 },
  { role: 'Data Scientist', postings: 3100, salary: 110 },
  { role: 'Data Engineer', postings: 3600, salary: 105 },
  { role: 'ML Engineer', postings: 2200, salary: 120 },
  { role: 'BI Analyst', postings: 1900, salary: 78 },
];

// Project 2: Core Tracker (Side Project) -> Weekly Focus Hours & Productivity AreaChart
const productivityData = [
  { day: 'Mon', tasks: 8, hours: 4.5 },
  { day: 'Tue', tasks: 12, hours: 6.0 },
  { day: 'Wed', tasks: 9, hours: 5.2 },
  { day: 'Thu', tasks: 14, hours: 7.5 },
  { day: 'Fri', tasks: 11, hours: 6.3 },
  { day: 'Sat', tasks: 5, hours: 3.0 },
  { day: 'Sun', tasks: 6, hours: 3.5 },
];

// Project 3: OrderLens -> Review score split by whether the quoted delivery date was met
const orderLensData = [
  { speed: 'Fast (1-3d)', kept: 4.4, broken: 3.4 },
  { speed: 'Normal (4-7d)', kept: 4.3, broken: 3.3 },
  { speed: 'Slow (8-14d)', kept: 4.1, broken: 3.1 },
  { speed: 'Very slow (15d+)', kept: 3.9, broken: 2.9 },
];

// Project 4: InsightForge -> Feature importance from the auto-fitted random forest baseline
const insightForgeData = [
  { feature: 'Delivery Days', importance: 32 },
  { feature: 'Order Value', importance: 24 },
  { feature: 'Product Category', importance: 18 },
  { feature: 'Freight Cost', importance: 15 },
  { feature: 'Seller Rating', importance: 11 },
];

// Project 5: Portfolio Traffic (Portfolio Project) -> Visitor Referral Source PieChart
const visitorData = [
  { name: 'LinkedIn', value: 45 },
  { name: 'GitHub', value: 25 },
  { name: 'Direct/Resume', value: 20 },
  { name: 'Search', value: 10 },
];

const COLORS = ['#eab308', '#fbbf24', '#facc15', '#fde047'];

type ProjectVisual = {
  icon: LucideIcon;
  chart: ReactElement;
  insight: string;
};

// Every series below sets isAnimationActive={false}. It is not a style choice
// and removing it empties the charts.
//
// Under recharts 3.9.2 with React 19.2.4 the entry animation never ticks, and
// the shapes that grow from nothing stay at nothing: a Bar animates its height
// up from 0 and a Pie its angle up from 0, and recharts declines to draw a
// rectangle of zero height or a sector of zero angle. So the layers rendered —
// <g class="recharts-bar-rectangle"> was present and correctly counted — with
// no shape inside them. Axes, gridlines, legends, tooltips and reference lines
// were unaffected throughout, which is what made it look like a working chart
// that happened to have no data.
//
// The Area chart was the tell: it alone still drew, because its path is fully
// shaped on the first frame and animation only reveals it. Five bar charts and
// one pie were blank on the live site; the area beside them was not.
//
// Rendering at final geometry sidesteps the animation entirely. The charts
// appear instantly instead of growing in.
//
// Keyed by the project name in @/content/portfolio
const projectVisuals: Record<string, ProjectVisual> = {
  Bellwether: {
    icon: Radar,
    chart: (
      <BarChart data={bellwetherData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="variant" stroke="#9ca3af" fontSize={12} />
        <YAxis
          stroke="#9ca3af"
          domain={[0, 0.12]}
          label={{ value: 'PR-AUC margin', angle: -90, position: 'insideLeft', fill: '#9ca3af' }}
        />
        <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} />
        <Legend wrapperStyle={{ color: '#fff' }} />
        <ReferenceLine
          y={BELLWETHER_THRESHOLD}
          stroke="#f87171"
          strokeDasharray="6 4"
          label={{ value: 'Promotion threshold (0.05)', fill: '#f87171', fontSize: 12, position: 'insideTopRight' }}
        />
        <Bar dataKey="margin" name="Margin over best single-feature baseline" isAnimationActive={false}>
          {bellwetherData.map((entry) => (
            <Cell
              key={entry.variant}
              fill={entry.margin >= BELLWETHER_THRESHOLD ? '#eab308' : '#6b7280'}
            />
          ))}
        </Bar>
      </BarChart>
    ),
    insight:
      "Scores live English Wikipedia edits for the probability they will be reverted, writes each forecast to a register the writer role cannot UPDATE or DELETE — enforced by database grant, not by careful code — and grades itself only once the outcome has actually settled. 52,080 forecasts committed so far across two model versions, running unattended on scheduled jobs since 10 August. The finding it publishes rather than buries is the one charted here: on the 11,188-event backtest the model leads the best single-feature baseline by 0.107 PR-AUC, but re-fit without the single feature describing how new an account is, that margin falls to 0.039 — below the 0.05 its own pre-registered promotion rule requires. Twelve of the twenty-eight features measure exactly zero importance and were left in place, because removing them after seeing which scored badly would be selection. The claim is not that the model is good; it is that the system can be trusted about the model.",
  },
  GridCast: {
    icon: Zap,
    chart: (
      <BarChart data={gridCastData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="choice" stroke="#9ca3af" fontSize={12} />
        <YAxis stroke="#9ca3af" label={{ value: 'gCO2/kWh', angle: -90, position: 'insideLeft', fill: '#9ca3af' }} />
        <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} />
        <Legend wrapperStyle={{ color: '#fff' }} />
        <Bar dataKey="intensity" name="Carbon intensity (gCO2/kWh)" isAnimationActive={false}>
          {gridCastData.map((entry) => (
            <Cell key={entry.choice} fill={entry.choice === 'Recommended' ? '#eab308' : '#6b7280'} />
          ))}
        </Bar>
      </BarChart>
    ),
    insight:
      "Forecasts GB grid carbon intensity 48 hours ahead and writes each one to an append-only register before the outcome exists, then scores it automatically once the actual arrives - against naive baselines and against National Grid ESO's own forecast, recorded at the horizon it was received. The finding that matters is behavioural: waiting until 3am, the advice almost everyone follows, lands within 1% of running immediately (166.8 vs 168.0 gCO2/kWh) and is worse than picking at random, because off-peak tariffs solve demand peaks rather than carbon. On a wind-and-solar grid the clean hours have moved to the middle of the day. A gradient-boosting model roughly halves the incumbent's error but is running as a scored challenger rather than serving, because the promotion rule was committed before either model existed and requires ~1,440 scored forecasts per horizon first.",
  },
  "Final Year Project": {
    icon: BarChart3,
    chart: (
      <BarChart data={jobMarketData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="role" stroke="#9ca3af" fontSize={12} />
        <YAxis yAxisId="left" stroke="#9ca3af" label={{ value: 'Job Openings', angle: -90, position: 'insideLeft', fill: '#9ca3af' }} />
        <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" label={{ value: 'Avg Salary ($k)', angle: 90, position: 'insideRight', fill: '#9ca3af' }} />
        <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} />
        <Legend wrapperStyle={{ color: '#fff' }} />
        <Bar yAxisId="left" dataKey="postings" fill="#eab308" name="Openings Tracked" isAnimationActive={false} />
        <Bar yAxisId="right" dataKey="salary" fill="#6b7280" name="Avg Salary ($k)" isAnimationActive={false} />
      </BarChart>
    ),
    insight:
      "Scraped and parsed 15,000+ job listings. ML engineers lead salary benchmarks ($120k avg) while Data Analysts remain highly demanded with 4,200 tracked listings.",
  },
  "Side Project": {
    icon: TrendingUp,
    chart: (
      <AreaChart data={productivityData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="day" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} />
        <Legend wrapperStyle={{ color: '#fff' }} />
        <Area type="monotone" dataKey="tasks" stroke="#eab308" fill="rgba(234, 179, 8, 0.2)" name="Tasks Completed" />
        <Area type="monotone" dataKey="hours" stroke="#6b7280" fill="rgba(107, 114, 128, 0.2)" name="Focus Hours" />
      </AreaChart>
    ),
    insight:
      "Tracks productivity metrics by linking focus timers to completed task frequencies, illustrating peak cognitive efficiency around Mid-Week (Thursday).",
  },
  OrderLens: {
    icon: BarChart3,
    chart: (
      <BarChart data={orderLensData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="speed" stroke="#9ca3af" fontSize={12} />
        <YAxis stroke="#9ca3af" domain={[0, 5]} label={{ value: 'Avg Review Score', angle: -90, position: 'insideLeft', fill: '#9ca3af' }} />
        <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} />
        <Legend wrapperStyle={{ color: '#fff' }} />
        <Bar dataKey="kept" fill="#eab308" name="Promise Kept" isAnimationActive={false} />
        <Bar dataKey="broken" fill="#6b7280" name="Promise Broken" isAnimationActive={false} />
      </BarChart>
    ),
    insight:
      "Across ~100,000 marketplace orders, customers punish broken promises rather than slow delivery: missing the quoted date costs a full point on the 5-point review scale at every delivery speed. Extending quoted dates only on demonstrably bad routes cuts broken promises from 8.8% to 7.0% — roughly 560 fewer bad reviews a year at zero operational cost.",
  },
  InsightForge: {
    icon: Activity,
    chart: (
      <BarChart data={insightForgeData} layout="vertical" margin={{ left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis type="number" stroke="#9ca3af" unit="%" />
        <YAxis type="category" dataKey="feature" stroke="#9ca3af" fontSize={12} width={110} />
        <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} />
        <Legend wrapperStyle={{ color: '#fff' }} />
        <Bar dataKey="importance" fill="#eab308" name="Feature Importance (%)" isAnimationActive={false} />
      </BarChart>
    ),
    insight:
      "Upload a CSV and the pipeline runs quality checks, exploratory analysis, auto-selected statistical tests (t-test, ANOVA, chi-square) and a random-forest baseline on an 80/20 split, then surfaces feature importance plus a live what-if prediction simulator and a PDF report. Next.js front end, FastAPI back end, 153 automated tests across both layers.",
  },
  "Portfolio Project": {
    icon: PieIcon,
    chart: (
      <PieChart>
        <Pie
          data={visitorData}
          cx="50%"
          cy="50%"
          labelLine={true}
          label={({ name, value }) => `${name}: ${value}%`}
          outerRadius={90}
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={false}
        >
          {visitorData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} />
      </PieChart>
    ),
    insight:
      "Displays portfolio visitor attribution channels. LinkedIn represents the primary traffic referral vector (45%), followed closely by direct organic search.",
  },
};

// Dynamic client rendering safe wrapper to prevent SSR hydration mismatches
export function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-black relative">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">Interactive data visualizations representing projects and research</p>
        </div>

        <div className="space-y-16">
          {projects.map((project) => {
            const visual = projectVisuals[project.name];
            const Icon = visual?.icon ?? BarChart3;

            return (
              <div key={project.name} className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl shadow-yellow-500/10 p-6 md:p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:scale-[1.01] group text-left">
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-white group-hover:text-yellow-500 transition-colors">{project.name}</h3>
                      <p className="text-gray-400 mt-2">{project.summary}</p>
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 hover:bg-yellow-500/10 rounded-lg transition-colors border border-yellow-500/30 flex items-center justify-center flex-shrink-0"
                    >
                      <ExternalLink className="w-5 h-5 text-yellow-500" />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-semibold border border-yellow-500/30">{tag}</span>
                    ))}
                  </div>
                </div>

                {visual && (
                  <>
                    {/* Chart */}
                    <div className="h-80 bg-black/50 rounded-xl p-4 border border-yellow-500/10 flex items-center justify-center">
                      {mounted ? (
                        <ResponsiveContainer width="100%" height="100%">
                          {visual.chart}
                        </ResponsiveContainer>
                      ) : (
                        <div className="text-gray-500 flex items-center gap-2">
                          <Icon className="animate-pulse w-5 h-5" /> Loading Analytics Visuals...
                        </div>
                      )}
                    </div>

                    <div className="mt-6 p-4 bg-yellow-500/5 rounded-lg border border-yellow-500/20">
                      <p className="text-sm text-gray-300">
                        <strong className="text-yellow-500">Analytics Summary:</strong> {visual.insight}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
