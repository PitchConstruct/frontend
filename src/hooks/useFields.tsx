import { TextInput, SimpleGrid } from '@mantine/core'
import { useForm } from '@mantine/form'
import { ReactNode, useState } from 'react'

export const useFields = () => {
  const form = useForm({
    initialValues: {
      name: '',
      industry: '',
      problem_1: '',
      problem_2: '',
      problem_3: '',
      solve_1: '',
      solve_2: '',
      solve_3: '',
      rival_1: '',
      rival_2: '',
      rival_3: '',
      member1: { memberName_1: '', memberSurname_1: '', background_1: '' },
      member2: { memberName_2: '', memberSurname_2: '', background_3: '' },
      member3: { memberName_3: '', memberSurname_3: '', background_3: '' },
      price: 0,
      income: 0,
      clients: 0,
      audience: '',
      description: '',
      goal_1: '',
      goal_2: '',
      goal_3: '',
      phone: '',
      telegram: '',
      website: '',
    },
    // validate: {
    //   name: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   problem_1: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   problem_2: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   problem_3: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   problem_4: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   problem_5: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   solve_1: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   solve_2: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   solve_3: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   solve_4: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   solve_5: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   rival_1: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   rival_2: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   rival_3: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   rival_4: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   rival_5: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   rival_6: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   rival_7: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   memberName_1: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   memberName_2: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   memberName_3: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   memberSurname_1: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   memberSurname_2: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   memberSurname_3: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   background_1: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   background_2: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   background_3: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   audience: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   description: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   goal_1: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   goal_2: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   goal_3: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   goal_4: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   goal_5: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   phone: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   telegram: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    //   website: (value) =>
    //     value.trim().length < 2 ? 'Field length must be > 2' : null,
    // },
  })

  const [problems, setProblems] = useState<ReactNode[]>([])
  const [solutions, setSolutions] = useState<ReactNode[]>([])
  const [rivals, setRivals] = useState<ReactNode[]>([])
  const [members, setMembers] = useState<ReactNode[]>([])
  const [goals, setGoals] = useState<ReactNode[]>([])

  const addProblem = () => {
    setProblems((prev) => [
      ...prev,
      <TextInput
        key={problems.length + 2}
        mt="md"
        placeholder={`Проблема №${problems.length + 2}`}
        name={`problem_${problems.length + 2}`}
        variant="filled"
        {...form.getInputProps(`problem_${problems.length + 2}`)}
      />,
    ])
  }

  const addSolutions = () => {
    setSolutions((prev) => [
      ...prev,
      <TextInput
        key={solutions.length + 2}
        placeholder={`Решение №${solutions.length + 2}`}
        mt="md"
        name={`solve_${solutions.length + 2}`}
        variant="filled"
        {...form.getInputProps(`solve_${solutions.length + 2}`)}
      />,
    ])
  }

  const addRivals = () => {
    setRivals((prev) => [
      ...prev,
      <TextInput
        key={rivals.length + 2}
        placeholder={`Конкурент №${rivals.length + 2}`}
        mt="md"
        name={`rival_${rivals.length + 2}`}
        variant="filled"
        {...form.getInputProps(`rival_${rivals.length + 2}`)}
      />,
    ])
  }

  const addMembers = () => {
    setMembers((prev) => [
      ...prev,
      <SimpleGrid key={members.length + 2} cols={{ base: 1, sm: 3 }} mt="lg">
        <TextInput
          label={`Имя участника ${members.length + 2}`}
          placeholder="Имя"
          name={`memberName_${members.length + 2}`}
          variant="filled"
          {...form.getInputProps(`memberName_${members.length + 2}`)}
        />
        <TextInput
          label={`Фамилия участника ${members.length + 2}`}
          placeholder="Фамилия"
          name={`memberSurname_${members.length + 2}`}
          variant="filled"
          {...form.getInputProps(`memberSurname_${members.length + 2}`)}
        />
        <TextInput
          label={`Бэкграунд участника ${members.length + 2}`}
          placeholder="Бэкграунд"
          name={`background_${members.length + 2}`}
          variant="filled"
          {...form.getInputProps(`background_${members.length + 2}`)}
        />
        {/* <FileInput
          accept="image/png,image/jpeg"
          label="Загрузить фото"
          placeholder="Загрузить фото"
          styles={{
            label: {
              marginBottom: 10,
            },
          }}
        /> */}
      </SimpleGrid>,
    ])
  }

  const addGoals = () => {
    setGoals((prev) => [
      ...prev,
      <TextInput
        key={goals.length + 2}
        placeholder={`Цель №${goals.length + 2}`}
        mt="md"
        name={`goal_${goals.length + 2}`}
        variant="filled"
        {...form.getInputProps(`goal_${goals.length + 2}`)}
      />,
    ])
  }

  return {
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
  }
}
