<?php

namespace Gurulabs\Http\Frontend\Pages\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Gurulabs\App\Controllers\Controller;

class PagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Home/Index');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function about()
    {
        return Inertia::render('About/Index');
    }
}
