import { NumberInput, TextInput, Textarea, createTheme } from '@mantine/core'

export const theme = createTheme({
  primaryColor: 'orange',
  defaultRadius: 'sm',
  components: {
    TextInput: TextInput.extend({
      defaultProps: {
        styles: {
          label: {
            marginBottom: 10,
          },
        },
      },
    }),
    NumberInput: NumberInput.extend({
      defaultProps: {
        styles: {
          label: {
            marginBottom: 10,
          },
        },
      },
    }),
    Textarea: Textarea.extend({
      defaultProps: {
        styles: {
          label: {
            marginBottom: 10,
          },
        },
      },
    }),
  },
})
