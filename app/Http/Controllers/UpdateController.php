<?php

namespace App\Http\Controllers;

use App\Models\Update;
use Illuminate\Http\Request;
use Illuminate\View\View;

class UpdateController extends Controller
{
    public function show(string $id): View
    {
        return view('update', [
            "update" => Update::findOrFail($id),
        ]);
    }
}
