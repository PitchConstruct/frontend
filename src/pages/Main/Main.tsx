import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Flex,
  Loader,
  NumberInput,
  Text,
  Box,
  Input,
  rem,
} from '@mantine/core'
import { IconAt, IconWorld } from '@tabler/icons-react'
import { sendIndustry } from 'api'
import { useFields } from 'hooks'
import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import { generatePresentation } from 'utils'

export function Main() {
  const {
    form,
    problems,
    solutions,
    rivals,
    members,
    goals,
    addGoals,
    addMembers,
    addProblem,
    addRivals,
    addSolutions,
  } = useFields()

  const [isLoading, setIsLoading] = useState(false)

  return (
    <Flex align="center" justify="center" h="100%" w="100%">
      {isLoading ? (
        <Flex h="100vh" direction="column" justify="center" align="center">
          <Loader />
          Создаем презентацию...
        </Flex>
      ) : (
        <form
          onSubmit={form.onSubmit(async (values) => {
            setIsLoading(true)
            const res = await sendIndustry(values.industry).then((res) => {
              setIsLoading(false)
              return res
            })

            // const res = { logo: '', losung: '', tam: '' }

            generatePresentation({ ...values, ...res })
          })}
          style={{
            width: '100%',
            background: '#111',
            borderRadius: 14,
            border: '1px solid white',
            padding: 40,
          }}
        >
          <Title
            order={2}
            size="h1"
            style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
            fw={900}
            ta="center"
          >
            PitchConstruct - Магия ИИ в каждом слайде!
          </Title>

          <TextInput
            mt="xl"
            label="Название проекта"
            placeholder="Название проекта"
            name="name"
            variant="filled"
            withAsterisk
            {...form.getInputProps('name')}
          />
          <TextInput
            mt="md"
            label="Целевая аудитория"
            placeholder="Целевая аудитория"
            name="name"
            variant="filled"
            withAsterisk
            {...form.getInputProps('audience')}
          />
          <Box
            mt="xl"
            p={16}
            style={{ border: '1px solid white', borderRadius: 10 }}
          >
            <TextInput
              label="Проблемы"
              placeholder="Проблема №1"
              name="problem_1"
              variant="filled"
              withAsterisk
              {...form.getInputProps('problem_1')}
            />

            {problems}
            {problems.length < 2 && (
              <Text
                mt={10}
                styles={{ root: { cursor: 'pointer' } }}
                onClick={addProblem}
              >
                + Добавить проблему
              </Text>
            )}
          </Box>

          <Box
            mt="xl"
            p={16}
            style={{ border: '1px solid white', borderRadius: 10 }}
          >
            <TextInput
              label="Решения"
              placeholder="Решение №1"
              name="solve_1"
              variant="filled"
              withAsterisk
              {...form.getInputProps('solve_1')}
            />

            {solutions}
            {solutions.length < 2 && (
              <Text
                mt={10}
                styles={{ root: { cursor: 'pointer' } }}
                onClick={addSolutions}
              >
                + Добавить решение
              </Text>
            )}
          </Box>

          <TextInput
            label="Сфера рынка (TAM-SAM-SOM)"
            placeholder="Сфера рынка (TAM-SAM-SOM)"
            mt="md"
            name="sphere"
            variant="filled"
            withAsterisk
            {...form.getInputProps('industry')}
          />

          <Box
            mt="xl"
            p={16}
            style={{ border: '1px solid white', borderRadius: 10 }}
          >
            <TextInput
              label="Конкруренты"
              placeholder="Конкурент №1"
              name="rival_1"
              variant="filled"
              withAsterisk
              {...form.getInputProps('rival_1')}
            />

            {rivals}
            {rivals.length < 2 && (
              <Text
                mt={10}
                styles={{ root: { cursor: 'pointer' } }}
                onClick={addRivals}
              >
                + Добавить конкурента
              </Text>
            )}
          </Box>

          <Textarea
            mt="md"
            label="Описание"
            placeholder="Описание"
            maxRows={10}
            minRows={5}
            autosize
            name="description"
            variant="filled"
            withAsterisk
            {...form.getInputProps('description')}
          />

          <SimpleGrid cols={{ base: 1, sm: 4 }}>
            <NumberInput
              label="Выручка (в год)"
              placeholder="Выручка (в год)"
              prefix="₽ "
              mt="md"
              name="income"
              variant="filled"
              withAsterisk
              {...form.getInputProps('income')}
            />
            <NumberInput
              label="Количество клиентов"
              placeholder="Количество клиентов"
              mt="md"
              name="clients"
              variant="filled"
              withAsterisk
              {...form.getInputProps('clients')}
            />
            <NumberInput
              label="Стоимость компании"
              placeholder="Стоимость компании"
              prefix="₽ "
              mt="md"
              name="price"
              variant="filled"
              withAsterisk
              {...form.getInputProps('price')}
            />
            <NumberInput
              label="Средняя окупаемость"
              placeholder="Средняя окупаемость"
              mt="md"
              name="payback"
              variant="filled"
              disabled
              value={(form.values.price / form.values.income).toFixed(2)}
              // {...form.getInputProps('payback')}
            />
          </SimpleGrid>
          <Box
            mt="xl"
            p={16}
            style={{ border: '1px solid white', borderRadius: 10 }}
          >
            <SimpleGrid cols={{ base: 1, sm: 3 }}>
              <TextInput
                label="Имя участника 1"
                placeholder="Имя"
                name="memberName_1"
                variant="filled"
                withAsterisk
                {...form.getInputProps('memberName_1')}
              />
              <TextInput
                label="Фамилия участника 1"
                placeholder="Фамилия"
                name="memberSurname_1"
                variant="filled"
                withAsterisk
                {...form.getInputProps('memberSurname_1')}
              />
              <TextInput
                label="Бэкграунд участника 1"
                placeholder="Бэкграунд"
                name="background_1"
                variant="filled"
                withAsterisk
                {...form.getInputProps('background_1')}
              />
              {/* <FileInput
                accept="image/png,image/jpeg"
                label="Загрузить фото"
                placeholder="Загрузить фото"
                withAsterisk
                styles={{
                  label: {
                    marginBottom: 10,
                  },
                }}
              /> */}
            </SimpleGrid>
            {members}
            {members.length < 2 && (
              <Text
                mt={10}
                styles={{ root: { cursor: 'pointer' } }}
                onClick={addMembers}
              >
                + Добавить участника
              </Text>
            )}
          </Box>

          <Box
            mt="xl"
            p={16}
            style={{ border: '1px solid white', borderRadius: 10 }}
          >
            <TextInput
              label="Цели"
              placeholder="Цель №1"
              name="goal_1"
              variant="filled"
              withAsterisk
              {...form.getInputProps('goal_1')}
            />

            {goals}
            {goals.length < 2 && (
              <Text
                mt={10}
                styles={{ root: { cursor: 'pointer' } }}
                onClick={addGoals}
              >
                + Добавить цель
              </Text>
            )}
          </Box>
          <Input.Wrapper label="Телефон" mt="md" withAsterisk>
            <Input
              mt="sm"
              placeholder="Телефон"
              name="goal_1"
              variant="filled"
              component={IMaskInput}
              mask="+7 (000) 000-00-00"
              {...form.getInputProps('phone')}
            />
          </Input.Wrapper>
          <TextInput
            mt="md"
            label="Telegram"
            placeholder="Telegram"
            name="telegram"
            variant="filled"
            leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
            withAsterisk
            {...form.getInputProps('telegram')}
          />
          <TextInput
            mt="md"
            label="Личный сайт"
            placeholder="Сайт"
            name="website"
            variant="filled"
            leftSection={
              <IconWorld style={{ width: rem(18), height: rem(18) }} />
            }
            withAsterisk
            {...form.getInputProps('website')}
          />

          <Group justify="center" mt="xl">
            <Button
              type="submit"
              size="md"
              variant="gradient"
              gradient={{ from: 'yellow', to: 'red', deg: 90 }}
            >
              Создать презентацию
            </Button>
          </Group>
        </form>
      )}
    </Flex>
  )
}
