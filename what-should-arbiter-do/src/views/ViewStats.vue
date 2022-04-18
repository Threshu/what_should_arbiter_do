<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input v-model="loveNoteballs" maxlength="100" type="text" class="input" placeholder="Do you love noteballs?" v-autofocus>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { vAutofocus } from '@/directives/vAutofocus'
import { useWatchCharacters } from '@/use/useWatchCharacters'

  const storeNotes = useStoreNotes()

  const loveNoteballs = ref('')

  useWatchCharacters(loveNoteballs, 50)
</script>