@php
try {
    $ssr = Http::post('http://localhost:8080/render', $page)
        ->throw()
        ->json();
} catch (Exception $e) {
    $ssr = null;
}
@endphp
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('frontend/css/app.css') }}" rel="stylesheet">
    <script src="{{ mix('frontend/js/app.js') }}" defer></script>
    @foreach ($ssr['head'] ?? [] as $element)
        {!! $element !!}
    @endforeach
</head>

<body>
    @if ($ssr)
        {!! $ssr['body'] !!}
    @else
        @inertia
    @endif
</body>

</html>
