<?php

use Livewire\Attributes\Validate;
use Livewire\Volt\Component;
use App\Models\Update;
use App\Livewire\Forms\UpdateForm;
use Illuminate\Database\Eloquent\Collection;
use Livewire\Attributes\On;

new class extends Component {

    public UpdateForm $form;
    public Collection $updates;
    public ?Update $editing = null;

    public function mount(): void
    {
        $this->getUpdates();
    }

    public function store(): void
    {
        $validated = $this->validate();

        Update::create($validated);

        $this->getUpdates();

//        $this->dispatch('update-created');

        $this->form->title = '';
        $this->form->description = '';
        $this->form->start_date = '';
        $this->form->end_date = '';
    }

    public function edit(Update $update): void
    {
        $this->editing = $update;

        $this->getUpdates();
    }

    #[On('update-edit-canceled')]
    #[On('update-updated')]
    public function disableEditing(): void
    {
        $this->editing = null;

        $this->getUpdates();
    }

//    #[On('update-created')]
    public function getUpdates(): void
    {
        $this->updates = Update::orderBy('start_date')->take(3)->get();
    }

}; ?>

<div>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    <form wire:submit="store">
                        <div class="flex flex-col gap-y-6">
                            <div>
                                <x-input-label for="title" :value="__('Title')" class="mb-2"/>
                                <x-text-input
                                    class="w-full"
                                    id="title"
                                    wire:model="form.title"
                                />
                                <x-input-error :messages="$errors->get('form.title')" class="mt-2"/>
                            </div>
                            <div>
                                <x-input-label for="description" :value="__('Description')" class="mb-2"/>
                                <x-text-area
                                    id="description"
                                    wire:model="form.description"
                                    class="w-full"
                                ></x-text-area>
                                <x-input-error :messages="$errors->get('form.description')" class="mt-2"/>
                            </div>
                            <div>
                                <x-input-label for="start_date" :value="__('Start Date')" class="mb-2"/>
                                <x-text-input
                                    id="start_date"
                                    type="date"
                                    wire:model="form.start_date"
                                    class="w-full"
                                />
                                <x-input-error :messages="$errors->get('form.start_date')" class="mt-2"/>
                            </div>
                            <div>
                                <x-input-label for="end_date" :value="__('End Date')" class="mb-2"/>
                                <x-text-input
                                    id="end_date"
                                    type="date"
                                    wire:model="form.end_date"
                                    class="w-full"
                                />
                                <x-input-error :messages="$errors->get('form.end_date')" class="mt-2"/>
                            </div>
                        </div>
                        <div class="mt-6">
                            <x-primary-button>{{ __('Chirp') }}</x-primary-button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="mt-6 bg-white dark:bg-gray-800 shadow-sm rounded-lg divide-y">
                @foreach ($updates as $update)
                    <div class="p-6 flex space-x-2" wire:key="{{ $update->id }}">
                        <div class="flex-1">
                            <div class="flex justify-between items-center">
                                <div>
                                    <span class="text-gray-800 dark:text-gray-200">{{ $update->title }}</span>
                                    <small
                                        class="ml-2 text-sm text-gray-600 dark:text-gray-400">{{ $update->created_at->format('j M Y, g:i a') }}</small>
                                </div>
                                <x-dropdown>
                                    <x-slot name="trigger">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400"
                                                 viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/>
                                            </svg>
                                        </button>
                                    </x-slot>
                                    <x-slot name="content">
                                        <x-dropdown-link wire:click="edit({{ $update->id }})">
                                            {{ __('Edit') }}
                                        </x-dropdown-link>
                                    </x-slot>
                                </x-dropdown>
                            </div>
                            @if ($update->is($editing))
                                <livewire:updates.edit :update="$update" :key="$update->id" />
                            @else
                                <p class="mt-4 text-lg text-gray-900 dark:text-gray-100">{{ $update->description }}</p>
                            @endif
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
