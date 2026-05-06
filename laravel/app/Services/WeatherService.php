<?php

namespace App\Services;

use App\DTO\WeatherData;
use App\Models\Weather;

class WeatherService
{

    private WeatherApiClient $client;
    private WeatherMapper $mapper;

    public function __construct(
        WeatherApiClient $client,
        WeatherMapper $mapper
    ) {
        $this->client = $client;
        $this->mapper = $mapper;
    }

    public function fetchAndStore(): void
    {
        $data = $this->client->fetch();
        $dto = $this->mapper->map($data);
        $this->store($dto);
    }

    private function store(WeatherData $dto): void
    {
        Weather::create([
            'temperature' => $dto->temperature,
            'wind' => $dto->wind,
        ]);
    }
}
