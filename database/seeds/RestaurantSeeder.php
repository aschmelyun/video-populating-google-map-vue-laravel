<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RestaurantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // create three restaurant entries
        DB::table('restaurants')->insert([
            'name' => 'Number One Pizza',
            'address' => '4142 SW Testing Way',
            'city' => 'Orlando',
            'state' => 'FL',
            'hours' => '9:00am-6:00pm',
            'latitude' => 28.452763,
            'longitude' => -81.412228,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('restaurants')->insert([
            'name' => 'Best BBQ',
            'address' => '28275 Test Lane',
            'city' => 'Orlando',
            'state' => 'FL',
            'hours' => '10:00am-8:00pm',
            'latitude' => 28.473342,
            'longitude' => -81.491581,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('restaurants')->insert([
            'name' => 'Amazing Ice Cream',
            'address' => '352 Faking Drive',
            'city' => 'Orlando',
            'state' => 'FL',
            'hours' => '12:00pm-10:00pm',
            'latitude' => 28.526046,
            'longitude' => -81.396101,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);
    }
}
