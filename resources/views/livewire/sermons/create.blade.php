<?php

use Livewire\Volt\Component;
use Livewire\WithFileUploads;
use Livewire\Attributes\Validate;
use App\Models\Sermon;

new class extends Component {
    use WithFileUploads;

    #[Validate('required|file|mimes:mp3,wav|max:102400')]
    public $sermon;

    #[Validate('required|string|max:255')]
    public $title;

    public function store(): void
    {
        $validated = $this->validate();

        $validated['name'] = $this->sermon->store("sermons", "public");

        Sermon::create($validated);

//        dump($this->sermon);
    }
}; ?>

<div>
    <form wire:submit="store">
        <input wire:model="title">

        @error('title') <span class="error">{{ $message }}</span> @enderror

        <input type="file" wire:model="sermon">

        @error('sermon') <span class="error">{{ $message }}</span> @enderror

        <button type="submit">Save photo</button>
    </form>
</div>
