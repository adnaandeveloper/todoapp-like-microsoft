import { ICustomToggle } from './modal/CustomToggle'
import create from 'zustand'

type CustomToggle = {
  isFalse: boolean
  isNotFalse: boolean
  toggleToTrue: () => void
  toggleToFalse: () => void
}

const useCustomToggle = create<CustomToggle>((set) => ({
  isFalse: false,
  isNotFalse: true,
  toggleToTrue: () => set((state) => ({ isFalse: !state.isFalse })),
  toggleToFalse: () => set((state) => ({ isNotFalse: !state.isNotFalse })),
}))

export default useCustomToggle
