<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Weather;
use App\Http\Resources\WeatherResource;


class WeatherController extends Controller
{
    public function history()
    {
        return WeatherResource::collection(Weather::orderBy('created_at', 'desc')->get());
    }
}
