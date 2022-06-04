const API_URL = 'https://fakestoreapi.com/products'

export const getProducts = async () => {
  try {
    const response = await fetch(API_URL)
    if (response.ok) {
      const data = await response.json()
      return data
    }
    throw new Error('Request products fail!')
  } catch (error) {
    console.log(error)
  }
}
