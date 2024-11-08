import axios from "axios"
import { z } from "zod" 
import { SearchType } from "../types"

export default function useWeather() {

    // Zod
    const Weather = z.object({
        name: z.string(),
        main: z.object({
            temp: z.number(),
            temp_max: z.number(),
            temp_min: z.number(),
        })
    })

    type Weather = z.infer<typeof Weather>

    const fechtWeather =  async (search: SearchType) => {
        try {
            const appId = import.meta.env.VITE_API_KEY
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const {data} = await axios(geoUrl)
            
            const lat = data[0].lat
            const lon = data[0].lon

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            // Zod
            const {data: weatherResult} = await axios(weatherUrl)
            const result = Weather.safeParse(weatherResult)
            if(result.success) {
                console.log(result.data.name)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return {
        fechtWeather
    }
}
