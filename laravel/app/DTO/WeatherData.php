<?php

namespace App\DTO;

class WeatherData
{
    public float $temperature;
    public float $wind;

    public function __construct(float $temperature, float $wind)
    {
        $this->temperature = $temperature;
        $this->wind = $wind;
    }
}
