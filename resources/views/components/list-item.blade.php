<li class="flex gap-x-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         class="h-2.5 w-2.5 flex-none text-blue-700 dark:text-blue-400"
         style="margin-top: 9px"
    >
        <circle cx="12" cy="12" r="10" class="fill-blue-700 dark:fill-blue-400" />
    </svg>
    <span
    >
        @if($title != '')
            <strong class="font-semibold text-gray-900 dark:text-white">
                {{ $title }}
            </strong>
        @endif
        {{ $slot }}
  </span>
</li>
