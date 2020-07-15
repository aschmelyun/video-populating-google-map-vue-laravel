<?php

namespace App\Http\Controllers;

use App\Restaurant;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{

    public function index()
    {
        return Restaurant::all();
    }

}
