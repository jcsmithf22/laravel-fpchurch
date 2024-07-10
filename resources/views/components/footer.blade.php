<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 mt-40 pb-20 lg:px-8">
        <nav
            class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
            aria-label="Footer"
        >
            <div class="pb-6">
                <a
                    wire:navigate
                    href="{{ route('index') }}"
                    class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >Home</a
                >
            </div>
            <div class="pb-6">
                <a
                    wire:navigate
                    href="{{ route('expectations') }}"
                    class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >What to expect</a
                >
            </div>
            <div class="pb-6">
                <a
                    wire:navigate
                    href="{{ route('details') }}"
                    class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >Location and Schedule</a
                >
            </div>
            <div class="pb-6">
                <a
                    href="#"
                    class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >Contact Us</a
                >
            </div>
            <div class="pb-6">
                <a
                    href="https://www.fpchurch.org.uk/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >Denomination Website</a
                >
            </div>
            <div class="pb-6">
                <a
                    wire:navigate
                    href="{{ route('dashboard') }}"
                    class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >Dashboard</a
                >
            </div>
        </nav>
        <p
            class="mt-10 text-center text-xs leading-5 text-gray-500 dark:text-gray-400"
        >
            &copy; 2023 Free Presbyterian Church of Scotland, Santa Fe, TX
        </p>
    </div>
</footer>
