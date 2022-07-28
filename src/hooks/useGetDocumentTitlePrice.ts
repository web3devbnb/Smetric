import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { CAKE } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData();
  let metricPriceUsd = 0;
  try {
    metricPriceUsd = priceData ? parseFloat(priceData.data[CAKE.address].price ?? 0) : 0
  } catch (e) {
    // Ignore
  }

  const metricPriceUsdString =
    Number.isNaN(metricPriceUsd) || metricPriceUsd === 0
      ? ''
      : ` - $${metricPriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `ShibmetricSwap${metricPriceUsdString}`
  }, [metricPriceUsdString])
}
export default useGetDocumentTitlePrice
