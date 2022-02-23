import { Plan } from '../modal/Plan'

import create from 'zustand'

import { v4 as uuidv4 } from 'uuid'

interface PlanState {
  plans: Plan[]

  addPlan: (description: string) => void
  removePlan: (id: string) => void
  toggleCompletedState: (id: string) => void
}

export const usePlan = create<PlanState>((set) => ({
  // initial state
  plans: [],

  // methods for manipulating state
  addPlan: (description: string) => {
    set((state) => ({
      plans: [
        ...state.plans,
        {
          id: uuidv4(),
          description,
          completed: false,
        } as Plan,
      ],
    }))
  },
  removePlan: (id) => {
    set((state) => ({
      plans: state.plans.filter((plan) => plan.id !== id),
    }))
  },

  toggleCompletedState: (id) => {
    set((state) => ({
      plans: state.plans.map((plan) =>
        plan.id === id
          ? ({ ...plan, completed: !plan.completed } as Plan)
          : plan
      ),
    }))
  },
}))
