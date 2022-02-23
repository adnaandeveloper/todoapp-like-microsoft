import create from 'zustand'

import { v4 as uuidv4 } from 'uuid'
import { Lesson } from '../modal/Lesson'

interface LessonState {
  lessons: Lesson[]

  addLesson: (description: string) => void
  removeLesson: (id: string) => void
  toggleCompletedState: (id: string) => void
}

export const useLesson = create<LessonState>((set) => ({
  // initial state
  lessons: [],

  // methods for manipulating state
  addLesson: (description: string) => {
    set((state) => ({
      lessons: [
        ...state.lessons,
        {
          id: uuidv4(),
          description,
          completed: false,
        } as Lesson,
      ],
    }))
  },
  removeLesson: (id) => {
    set((state) => ({
      lessons: state.lessons.filter((lesson) => lesson.id !== id),
    }))
  },

  toggleCompletedState: (id) => {
    set((state) => ({
      lessons: state.lessons.map((lesson) =>
        lesson.id === id
          ? ({ ...lesson, completed: !lesson.completed } as Lesson)
          : lesson
      ),
    }))
  },
}))
