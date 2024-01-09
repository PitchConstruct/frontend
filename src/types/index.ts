export interface IPresentaion {
  name: string
  losung: string
  tam: string
  problem_1: string
  solve_1: string
  audience: string
  description: string
  logo: string
  price: number
  income: number
  clients: number
  rival_1: string
  member1: IMember
  goal_1: string
  telegram: string
  phone: string
  website: string
  //   solvings: string[]
  //   sphere: string
  //   conqurents: string[]
  //   advantages: string[]
  //   business?: string
  //   traction: string
  //   income: number
  //   clients_count: number
}

export interface IMember {
  memberName_1: string
  memberSurname_1: string
  background_1: string
}
