<x-default-layout>
    <x-page-layout>
        <x-page-background />
        <div
            class="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300"
        >
            <p
                class="text-base font-semibold leading-7 text-blue-700 dark:text-blue-400"
            >
                Update
            </p>
            <h1
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
                {{ $update->title }}
            </h1>
            <p class="mt-6 text-xl leading-8">
                @if($update->end_date)
                    From {{ $update->start_date }} to {{ $update->end_date }}.
                @else
                    {{ $update->start_date }}
                @endif
            </p>
            <div class="mt-10 max-w-2xl">
                <p>
                    {{ $update->description }}
                </p>
{{--                <p class="mt-8">--}}
{{--                    To learn more about the Westminster Confession of Faith, or to read it--}}
{{--                    online, please visit the following article on our denomination's--}}
{{--                    website.--}}
{{--                </p>--}}
            </div>
        </div>
    </x-page-layout>
</x-default-layout>
