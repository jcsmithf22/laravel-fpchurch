<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Sermons') }}
        </h2>
    </x-slot>

{{--    <livewire:updates.create/>--}}
    <livewire:sermons.create />
</x-app-layout>
