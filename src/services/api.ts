export const enviarPedido = async (payload: any) => {
  const response = await fetch(
    'https://api-ebac.vercel.app/api/efood/checkout',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
  )

  return await response.json()
}
