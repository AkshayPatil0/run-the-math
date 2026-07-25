// ============================================================
// src/config/tools.ts
// Central tool registry — reads PUBLIC_TOOL_*_URL env vars.
// A tool with url: null is NOT deployed yet → shows 404 on
// /tools/[slug] and a "Coming Soon" state on the homepage.
// ============================================================

export interface Tool {
  /** URL-safe identifier — must match the env var suffix */
  slug: string;
  icon: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  keywords: string[];
  /**
   * Resolved at build-time from import.meta.env.
   * null = env var not set → tool not deployed yet.
   */
  url: string | null;
}

/**
 * Resolve a subdomain URL from the env.
 * Variable convention: PUBLIC_TOOL_<SLUG_UPPER>_URL
 * e.g. slug "freelance-rate-calculator"
 *      → env key PUBLIC_TOOL_FREELANCE_RATE_CALCULATOR_URL
 */
function resolveUrl(slug: string): string | null {
  const key = `PUBLIC_TOOL_${slug.toUpperCase().replace(/-/g, '_')}_URL`;
  const value = import.meta.env[key];
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : null;
}

export const TOOLS: Tool[] = [
  {
    slug: 'freelance-rate-calculator',
    icon: '💼',
    title: 'Freelance Rate & Change Order Calculator',
    description:
      'Calculate your hourly rate, project fees, and generate change order estimates with tax and markup built in.',
    category: 'Finance',
    categoryColor: '#0EA5E9',
    keywords: ['freelance', 'rate', 'invoice', 'change order', 'finance', 'hourly'],
    url: resolveUrl('freelance-rate-calculator'),
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
    url: resolveUrl('filament-cost-estimator'),
  },
  {
    slug: 'coffee-brew-ratio',
    icon: '☕',
    title: 'Specialty Coffee Brew Ratio & Extraction Tool',
    description:
      'Dial in your perfect cup — calculate brew ratios, water temperature, and extraction yield for any brew method.',
    category: 'Coffee',
    categoryColor: '#F59E0B',
    keywords: ['coffee', 'brew', 'ratio', 'extraction', 'espresso', 'pour over', 'specialty'],
    url: resolveUrl('coffee-brew-ratio'),
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
    url: resolveUrl('saas-churn-ltv'),
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
    url: resolveUrl('electricity-cost'),
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
    url: resolveUrl('sprint-planner'),
  },
];

/** Lookup a single tool by slug. Returns undefined if not in registry. */
export function getToolBySlug(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
