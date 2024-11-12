export const formatNumber = (number) => {
    const localDefault = 'es-PE'

    const options = {
        minimumFractionDigits:2
    }
    return new Intl.NumberFormat(localDefault, options).format(number)

  }