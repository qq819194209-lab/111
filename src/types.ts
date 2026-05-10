export type Category = 'AIGC' | 'DomesticEcom' | 'CrossBorderEcom' | 'All';

export interface WorkItem {
  id: string;
  title: string;
  category: Category;
  subCategory?: string;
  imageUrl: string;
  description: string;
}

export const CATEGORIES = [
  { id: 'All', label: '全部作品' },
  { id: 'AIGC', label: 'AIGC赋能' },
  { id: 'DomesticEcom', label: '国内电商' },
  { id: 'CrossBorderEcom', label: '跨境电商' },
];

export const SUB_CATEGORIES = {
  AIGC: [
    { id: 'AI-Model', label: 'AI模特' },
    { id: 'AI-Scene', label: 'AI场景' }
  ]
};
