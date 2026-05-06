<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Services\WeatherService;

class GetApiInfo extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:get-api-info';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get weather info and put it in the DB';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(WeatherService $service)
    {
        $service->fetchAndStore();

        $this->info('Weather data loaded');

        return 0;
    }
}
