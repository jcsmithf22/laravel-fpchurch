<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    {{--    <link rel="preconnect" href="https://fonts.bunny.net">--}}
    {{--    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet"/>--}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
{{--    <link rel="peload"--}}
{{--          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"--}}
{{--          as="style" crossorigin>--}}
{{--    <link--}}
{{--        rel="preload"--}}
{{--        href="https://fonts.gstatic.com/s/figtree/v5/_Xms-HUzqDCFdgfMm4S9DaRvzig.woff2"--}}
{{--        crossorigin--}}
{{--        as="font"--}}
{{--        type="font/woff2"--}}
{{--    />--}}
    <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans antialiased dark:bg-gray-900">
{{ $slot }}
<x-footer/>
</body>
</html>
