<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class SermonController extends Controller
{
    public function index(): View
    {
        return view('dashboard.sermons', []);
    }
}
