<?php

use Livewire\Volt\Component;

new class extends Component {

    public bool $hero = false;

    public array $navigationItems = [
        [
            "name" => "About Us",
            "sub" => [
                [
                    "name" => "What We Believe",
                    "url" => "beliefs",
                ],
                [
                    "name" => "Denomination",
                    "url" => "denomination",
                ],
                [
                    "name" => "Confession of Faith",
                    "url" => "confession",
                ],
            ],
        ],
        [
            "name" => "Sermons",
            "url" => "sermons",
        ],
        [
            "name" => "Psalm Singing",
            "url" => "psalms",
        ],
        [
            "name" => "Visit",
            "sub" => [
                [
                    "name" => "Location and Service Times",
                    "url" => "details",
                ],
                [
                    "name" => "What to Expect",
                    "url" => "expectations",
                ],
            ],
        ],
        [
            "name" => "Contact Us",
            "url" => "contact",
        ]
    ];
}; ?>

<header class="inset-x-0 absolute z-40">
    <nav
        class="flex items-center lg:justify-center rounded-full lg:ring-1 dark:ring-white/20 {{ $hero ? 'ring-white/20' : 'ring-gray-900/10' }} lg:p-4 lg:px-6 p-6 lg:mt-4 lg:mx-auto ml-auto justify-end max-w-7xl w-fit">
        <div class="hidden lg:flex lg:gap-x-6">
            @if(!$hero)
                <a class="text-sm font-semibold leading-6 hover:opacity-80 {{ $hero ? 'text-white' : 'text-gray-700 dark:text-white'}}"
                   href="{{ route("index") }}" wire:navigate>Home</a>
            @endif
            @foreach($navigationItems as $item)
                @if(isset($item["sub"]))
                    <div class="flex justify-center">
                        <div
                            x-data="{
                                        open: false,
                                        toggle() {
                                            if (this.open) {
                                                return this.close()
                                            }

                                            this.$refs.button.focus()

                                            this.open = true
                                        },
                                        close(focusAfter) {
                                            if (! this.open) return

                                            this.open = false

                                            focusAfter && focusAfter.focus()
                                        }
                                    }"
                            x-on:keydown.escape.prevent.stop="close($refs.button)"
                            x-on:focusin.window="! $refs.panel.contains($event.target) && close()"
                            x-id="['dropdown-button']"
                            class="relative"
                        >
                            <!-- Button -->
                            <button
                                x-ref="button"
                                x-on:click="toggle()"
                                :aria-expanded="open"
                                :aria-controls="$id('dropdown-button')"
                                type="button"
                                class="flex items-center gap-1 text-sm font-semibold leading-6 hover:opacity-80 {{ $hero ? 'text-white' : 'text-gray-700 dark:text-white'}}"
                            >
                                {{ $item["name"] }}

                                <!-- Heroicon: chevron-down -->
                                <svg xmlns="http://www.w3.org/2000/svg" x-bind:class="{ 'rotate-180': open }"
                                     class="h-5 w-5 {{ $hero ? 'text-gray-200' : 'text-gray-700 dark:text-gray-200' }}" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </button>

                            <!-- Panel -->
                            <div
                                x-ref="panel"
                                x-show="open"
                                x-transition.origin.top.left
                                x-on:click.outside="close($refs.button)"
                                :id="$id('dropdown-button')"
                                style="display: none;"
                                class="absolute left-0 mt-2 w-max rounded-md {{ $hero ? 'bg-gray-400/10' : 'bg-gray-200/10 dark:bg-gray-400/10' }} bg-clip-padding backdrop-filter backdrop-blur-md border {{ $hero ? 'border-white/20' : 'dark:border-white/20 border-gray-900/10' }} shadow-md"
                            >
                                @foreach($item["sub"] as $subitems)
                                    <a href="{{ route($subitems["url"]) }}"
                                       class="flex {{ $hero ? 'text-white' : 'text-gray-900 dark:text-white'}} items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm {{ $hero ? 'hover:bg-gray-50/10' : 'hover:bg-gray-900/5 dark:hover:bg-gray-50/10' }} hover:bg-gray-50/10 disabled:text-gray-500"
                                       wire:navigate
                                    >
                                        {{ $subitems["name"] }}
                                    </a>
                                @endforeach
                            </div>
                        </div>
                    </div>
                @else
                    <a class="text-sm font-semibold leading-6 hover:opacity-80 {{ $hero ? 'text-white' : 'text-gray-700 dark:text-white'}}"
                       href="{{ route("index") }}" wire:navigate>{{ $item["name"] }}</a>
                @endif
            @endforeach
        </div>
    </nav>
</header>
