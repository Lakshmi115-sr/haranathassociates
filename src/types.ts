import type { LucideIcon } from 'lucide-react';

export type TabType = 'home' | 'about' | 'services' | 'solutions' | 'knowledge' | 'careers' | 'contact';

export type KnowledgeSubTab =
  | 'calculators'
  | 'bulletins'
  | 'forms'
  | 'links'
  | 'acts'
  | 'rules'
  | 'utilities';

export type NavigateFn = (tab: TabType, subTab?: KnowledgeSubTab) => void;

export interface ProblemSolution {
  id: string;
  question: string;
  category: string;
  shortDesc: string;
  detailedOverview: string;
  howWeHelp: string[];
  documentsRequired: string[];
  statutorySections: string;
}

export interface ComplianceDeadline {
  id: string;
  exactDateStr: string;
  sortDate: Date;
  daysLeft: number;
  title: string;
  formCode: string;
  category: 'GST' | 'Income Tax & TDS' | 'Annual & Audit' | 'Labour & ROC';
  periodLabel: string;
  description: string;
  penaltyNote: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: string[];
}
