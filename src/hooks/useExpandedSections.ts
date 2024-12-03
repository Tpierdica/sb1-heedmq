import { create } from 'zustand';

interface ExpandedSectionsState {
  expandedSections: Set<string>;
  toggleSection: (sectionId: string) => void;
  expandAll: () => void;
  collapseAll: () => void;
}

export const useExpandedSections = create<ExpandedSectionsState>((set) => ({
  expandedSections: new Set(),
  toggleSection: (sectionId) =>
    set((state) => {
      const newSet = new Set(state.expandedSections);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return { expandedSections: newSet };
    }),
  expandAll: () =>
    set(() => ({
      expandedSections: new Set(['clinics', 'emergency', 'appointments', 'shopping', 'feedback']),
    })),
  collapseAll: () =>
    set(() => ({
      expandedSections: new Set(),
    })),
}));