import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
			notes: []
		}
  },
	actions: {
		addNote(newNoteContent) {
			let currentDate = new Date().getTime()
			let id = currentDate.toString()
			
			let note = {
				id: id,
				content: newNoteContent
			}

			this.notes.unshift(note)
		},
		deleteNote(idToDelete){
			this.notes = this.notes.filter(note => note.id !== idToDelete)

		},
		updateNote(id, content) {
			let index = this.notes.findIndex(note => note.id === id)
			this.notes[index].content = content
		}
	},
	getters: {
		getNoteContent: (state) => {
			return (id) => {
				return state.notes.filter(note => note.id === id)[0].content
			}
		},
		totalNotesCount: (state) => {
			return state.notes.length
		},
		totalCharactersCount: (state) => {
			let count = 0
			state.notes.forEach(note => {
				count += note.content.length
			})
			return count
		}
	}
})