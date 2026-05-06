<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class WeatherApiClient
{
    public function fetch(): array
    {
        $response = Http::get('https://goweather.xyz/v2/weather/Novosibirsk');

        /* Format:

            {
            "temperature": "16 °C",
            "wind": "34 km/h",
            "description": "Partly cloudy",
            "forecast": [
                {
                "day": "Wednesday",
                "temperature": "13 °C",
                "wind": "6 km/h"
                },
                {
                "day": "Thursday",
                "temperature": "14 °C",
                "wind": "15 km/h"
                },
                {
                "day": "Friday",
                "temperature": "16 °C",
                "wind": "8 km/h"
                }
            ]
            }

        */

        return $response->json();
    }
}
