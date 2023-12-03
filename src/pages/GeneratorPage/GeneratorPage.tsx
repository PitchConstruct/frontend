import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Flex,
  Loader,
  // Text,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { ReactNode, useState } from 'react'
import { generatePresentation } from 'utils'

export function GeneratorPage() {
  const form = useForm({
    initialValues: {
      name: '',
      slogan: '',
      problem_1: '',
      problem_2: '',
      problem_3: '',
      problem_4: '',
      problem_5: '',
      solve_1: '',
      audience: '',
      description: '',
    },
    validate: {
      name: (value) =>
        value.trim().length < 2 ? 'Field length must be > 2' : null,
      slogan: (value) =>
        value.trim().length < 2 ? 'Field length must be > 2' : null,
      problem_1: (value) =>
        value.trim().length < 2 ? 'Field length must be > 2' : null,

      solve_1: (value) =>
        value.trim().length < 2 ? 'Field length must be > 2' : null,
      // problem_2: (value) =>
      //   value.trim().length < 2 ? 'Field length must be > 2' : null,
      // problem_3: (value) =>
      //   value.trim().length < 2 ? 'Field length must be > 2' : null,
      // problem_4: (value) =>
      //   value.trim().length < 2 ? 'Field length must be > 2' : null,
      // problem_5: (value) =>
      //   value.trim().length < 2 ? 'Field length must be > 2' : null,
      // audience: (value) =>
      //   value.trim().length < 2 ? 'Field length must be > 2' : null,
      // description: (value) =>
      //   value.trim().length < 2 ? 'Field length must be > 2' : null,
    },
  })

  const [isLoading, setIsLoading] = useState(false)
  const [problems] = useState<ReactNode[]>([])
  const [solvings] = useState<ReactNode[]>([])
  // const addField = () => {
  //   setFields((prev) => [
  //     ...prev,
  //     <TextInput
  //       key={fields.length + 2}
  //       placeholder={`Ваша проблема №${fields.length + 2}`}
  //       mt="md"
  //       name={`problem_${fields.length + 2}`}
  //       variant="filled"
  //       // {...form.getInputProps(`problem_${fields.length + 2}`)}
  //     />,
  //   ])
  // }

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
            label="Проблемы"
            placeholder="Ваша проблема №1"
            mt="md"
            name="problem_1"
            variant="filled"
            {...form.getInputProps('problem_1')}
          />

          {problems}
          {/* {fields.length < 4 && (
            <Text
              mt={10}
              styles={{ root: { cursor: 'pointer' } }}
              onClick={addField}
            >
              + Добавить поле
            </Text>
          )} */}

          <TextInput
            label="Решение"
            placeholder="Ваше решение №1"
            mt="md"
            name="solve_1"
            variant="filled"
            {...form.getInputProps('solve_1')}
          />

          {solvings}

          <TextInput
            label="Сфера рынка (TAM-SAM-SOM)"
            placeholder="Ваше сфера рынка"
            mt="md"
            name="sphere"
            variant="filled"
            {...form.getInputProps('sphere')}
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
