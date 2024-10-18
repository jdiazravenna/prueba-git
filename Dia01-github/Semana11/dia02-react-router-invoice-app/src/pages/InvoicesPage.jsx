import { useEffect, useState } from "react";

const fetchInvoices = async () => {

  const url = "https://67074c70a0e04071d229b91d.mockapi.io/invoices"
  
  const response = await fetch(url)

  return await response.json()
}

const InvoicesPage = () => {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    fetchInvoices()
    .then(invoices => setInvoices(invoices))
  }, [])
  return (
    <section>
      <h1>Listado de invoices</h1>
      {invoices.map(invoices => {
        return <div>{JSON.stringify(invoices)}</div>
      })}
    </section>
  )
}

export default InvoicesPage
