<?php

namespace App\Livewire\Forms;

use Livewire\Attributes\Validate;
use Livewire\Form;

class UpdateForm extends Form
{
    #[Validate('required|string|max:255')]
    public string $title = '';
    #[Validate('required|string|max:60000')]
    public string $description = '';
    #[Validate('required|date')]
    public string $start_date = '';
    #[Validate('date')]
    public string $end_date = '';
}
