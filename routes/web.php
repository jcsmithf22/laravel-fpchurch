<?php

use App\Http\Controllers\UpdateController;
use Illuminate\Support\Facades\Route;

Route::get('/update/{id}', [UpdateController::class, 'show'])
    ->name('update.show');

Route::view('/', 'index')
    ->name('index');

Route::view('beliefs', 'beliefs')
    ->name('beliefs');

Route::view('denomination', 'denomination')
    ->name('denomination');

Route::view('confession', 'confession')
    ->name('confession');

Route::view('details', 'details')
    ->name('details');

Route::view('expectations', 'expectations')
    ->name('expectations');

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

require __DIR__.'/auth.php';
