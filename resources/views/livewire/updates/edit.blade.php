<?php

use Livewire\Attributes\Validate;
use App\Models\Update;
use Livewire\Volt\Component;
use App\Livewire\Forms\UpdateForm;

new class extends Component {
    public Update $update;
    public UpdateForm $form;

    public function mount(): void
    {
        $this->form->title = $this->update->title;
        $this->form->description = $this->update->description;
        $this->form->start_date = $this->update->start_date;
        $this->form->end_date = $this->update->end_date;
    }

    public function save(): void
    {
        $validated = $this->validate();

        $this->update->update($validated);

        $this->dispatch('update-updated');
    }

    public function cancel(): void
    {
        $this->dispatch('update-edit-canceled');
    }

}; ?>

<div class="mt-6">
    <form wire:submit="save">
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
            <x-primary-button>{{ __('Save') }}</x-primary-button>
            <x-secondary-button wire:click.prevent="cancel">Cancel</x-secondary-button>
        </div>
    </form>
</div>
