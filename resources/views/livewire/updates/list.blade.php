<?php

use App\Models\Update;
use Illuminate\Database\Eloquent\Collection;
use Livewire\Volt\Component;

new class extends Component {

    public Collection $updates;

    public function mount(): void
    {
        $this->getUpdates();
    }

    #[On('update-created')]
    public function getUpdates(): void
    {
        $this->updates = Update::orderBy('start_date')->take(3)->get();
    }
}; ?>

<div class="mt-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
            <h2
                class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
                Upcoming Events
            </h2>
            <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Keep track of upcoming events and announcements.
            </p>
        </div>
        <div
            class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 border-gray-200 dark:border-white/10 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
            @foreach ($updates as $update)
                <article class="flex max-w-xl flex-col items-start justify-between">
                    <div class="flex items-center gap-x-4 text-xs">
                        <time
                            datetime="2020-03-16"
                            class="text-gray-500 dark:text-gray-400"
                        >
                            {{ $update->start_date }}
                        </time>
                    </div>
                    <div class="relative">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                            <a wire:navigate href="{{ route("update.show", [ "id" => $update->id ]) }}">
                                {{ $update->title }}
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                            {{ $update->description }}
                        </p>
                    </div>
                </article>
            @endforeach
        </div>
    </div>
</div>
