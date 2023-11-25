import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Flex,
  Loader,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'
import { generatePresentation } from 'utils'

export function GeneratorPage() {
  const form = useForm({
    initialValues: {
      name: '',
      slogan: '',
      audience: '',
      description: '',
    },
    validate: {
      name: (value) =>
        value.trim().length < 2 ? 'Field length must be > 2' : null,
      // slogan: (value) =>
      //   value.trim().length < 2 ? 'Field length must be > 2' : null,
      // audience: (value) =>
      //   value.trim().length < 2 ? 'Field length must be > 2' : null,
      // description: (value) =>
      //   value.trim().length < 2 ? 'Field length must be > 2' : null,
    },
  })

  const [isLoading, setIsLoading] = useState(false)

  return (
    <Flex align="center" justify="center" h="100%" w="100%">
      {isLoading ? (
        <Loader />
      ) : (
        <form
          onSubmit={form.onSubmit((values) => {
            setIsLoading(true)
            setTimeout(() => {
              setIsLoading(false)
              generatePresentation(values)
            }, 0)
          })}
          style={{ width: '100%' }}
        >
          <Title
            order={2}
            size="h1"
            style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
            fw={900}
            ta="center"
          >
            Генерировать презентацию
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
            <TextInput
              label="Название проекта"
              placeholder="Ваш проект"
              name="name"
              variant="filled"
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Слоган"
              placeholder="Ваш слоган"
              name="slogan"
              variant="filled"
              {...form.getInputProps('slogan')}
            />
          </SimpleGrid>

          <TextInput
            label="Целевая аудитория"
            placeholder="Ваша целевая аудитория"
            mt="md"
            name="audience"
            variant="filled"
            {...form.getInputProps('audience')}
          />
          <Textarea
            mt="md"
            label="Описание"
            placeholder="Ваше описание"
            maxRows={10}
            minRows={5}
            autosize
            name="description"
            variant="filled"
            {...form.getInputProps('description')}
          />

          <TextInput
            label="Решение"
            placeholder="Ваше решение"
            mt="md"
            name="solve"
            variant="filled"
            {...form.getInputProps('solve')}
          />

          <TextInput
            label="Сфера рынка (TAM-SAM-SOM)"
            placeholder="Ваше сфера рынка"
            mt="md"
            name="sphere"
            variant="filled"
            {...form.getInputProps('sphere')}
          />

          <TextInput
            label="Конкуренты"
            placeholder="Ваши конкуренты"
            mt="md"
            name="conqurents 1"
            variant="filled"
            {...form.getInputProps('conqurents')}
          />
          <TextInput
            placeholder="Ваши конкуренты"
            mt="md"
            name="conqurents 2"
            variant="filled"
            {...form.getInputProps('conqurents')}
          />
          <TextInput
            placeholder="Ваши конкуренты"
            mt="md"
            name="conqurents 3"
            variant="filled"
            {...form.getInputProps('conqurents')}
          />

          <Group justify="center" mt="xl">
            <Button type="submit" size="md">
              Создать презентацию
            </Button>
          </Group>
        </form>
      )}
    </Flex>
  )
}
