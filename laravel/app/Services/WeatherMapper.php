<?php

namespace App\Services;

use App\DTO\WeatherData;

class WeatherMapper
{
    public function map(array $data): WeatherData
    {
        return new WeatherData(
            $this->number($data['temperature']),
            $this->number($data['wind'])
        );
    }

    private function number(string $value): float
    {
        return (float) preg_replace('/[^0-9.-]/', '', $value);
    }
}
