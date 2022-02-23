import create from 'zustand'
type CustomToggle = {
  isFalse: boolean
  open: boolean
  openTodoDrawer: boolean
  toggleOpenTodoDrawer: () => void
  toggleToTrue: () => void
  toggleOpen: () => void
}

const useCustomToggle = create<CustomToggle>((set) => ({
  isFalse: false,
  open: false,
  openTodoDrawer: false,

  toggleToTrue: () => set((state) => ({ isFalse: !state.isFalse })),
  toggleOpen: () => set((state) => ({ open: !state.open })),
  toggleOpenTodoDrawer: () =>
    set((state) => ({ openTodoDrawer: !state.openTodoDrawer })),
}))

export default useCustomToggle
