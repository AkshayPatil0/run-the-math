// ============================================================
// src/config/tools.ts
// Central tool registry — edit this file to add, remove, or
// enable/disable tools.
//
// Setting url: null marks the tool as "not yet deployed":
//   • Homepage card  → dimmed "Coming Soon" state
//   • /tools/<slug>  → branded 404-style "not deployed" page
//
// Setting url: 'https://...' makes the tool live:
//   • Homepage card  → active "Open Tool" CTA
//   • /tools/<slug>  → redirects to that subdomain URL
// ============================================================

export interface Tool {
  slug: string;
  icon: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  keywords: string[];
  /** Subdomain URL. null = not yet deployed. */
  url: string | null;
}

export const TOOLS: Tool[] = [
  {
    slug: 'coffee-brew-ratio',
    icon: '☕',
    title: 'Specialty Coffee Brew Ratio & Extraction Tool',
    description:
      'Dial in your perfect cup — calculate brew ratios, water temperature, and extraction yield for any brew method.',
    category: 'Coffee',
    categoryColor: '#F59E0B',
    keywords: ['coffee', 'brew', 'ratio', 'extraction', 'espresso', 'pour over', 'specialty'],
    url: 'https://coffee-calculator.runthemath.app',
  },
  {
    slug: 'freelance-rate-calculator',
    icon: '💼',
    title: 'Freelance Rate & Change Order Calculator',
    description:
      'Calculate your hourly rate, project fees, and generate change order estimates with tax and markup built in.',
    category: 'Finance',
    categoryColor: '#0EA5E9',
    keywords: ['freelance', 'rate', 'invoice', 'change order', 'finance', 'hourly'],
    url: null,
  },
  {
    slug: 'filament-cost-estimator',
    icon: '🖨️',
    title: '3D Printing Filament & Power Cost Estimator',
    description:
      'Estimate filament usage, electricity costs, and total print cost for any FDM print job in seconds.',
    category: '3D Printing',
    categoryColor: '#10B981',
    keywords: ['3d printing', 'filament', 'fdm', 'pla', 'abs', 'cost', 'power'],
    url: null, // not yet deployed
  },
  {
    slug: 'saas-churn-ltv',
    icon: '📈',
    title: 'SaaS Churn & LTV Calculator',
    description:
      'Model monthly/annual churn rates, customer lifetime value, and revenue impact to make data-driven retention decisions.',
    category: 'SaaS',
    categoryColor: '#EC4899',
    keywords: ['saas', 'churn', 'ltv', 'lifetime value', 'retention', 'mrr', 'arr', 'revenue'],
    url: null,
  },
  {
    slug: 'electricity-cost',
    icon: '⚡',
    title: 'Electricity Cost Calculator',
    description:
      'Estimate monthly and annual electricity costs for any device or appliance by wattage and usage hours.',
    category: 'Finance',
    categoryColor: '#0EA5E9',
    keywords: ['electricity', 'power', 'kwh', 'energy', 'utility', 'cost', 'watt'],
    url: null, // not yet deployed
  },
  {
    slug: 'sprint-planner',
    icon: '🎯',
    title: 'Project Deadline & Sprint Planner',
    description:
      'Break down project timelines, set sprint boundaries, and calculate delivery dates accounting for weekends and holidays.',
    category: 'Productivity',
    categoryColor: '#6366F1',
    keywords: ['project', 'deadline', 'sprint', 'agile', 'timeline', 'planning', 'scrum'],
    url: null, // not yet deployed
  },
];

/** Look up a single tool by its slug. Returns undefined for unknown slugs. */
export function getToolBySlug(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
