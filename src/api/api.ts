import axios from 'axios'

export const baseUrl = 'https://pitch-construct.onrender.com/get-campaign-info'

interface PresProps {
  logo: string
  losung: string
  tam: string
}

export const sendIndustry = async (industry: string) => {
  return axios
    .post(baseUrl, {
      industry: industry,
    })
    .then((res) => res.data as PresProps)
}
