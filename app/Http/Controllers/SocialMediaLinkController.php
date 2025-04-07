<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SocialMediaLink;

class SocialMediaLinkController extends Controller
{
    public function index()
    {
        return response()->json(SocialMediaLink::all(), 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'platform' => 'required|string|max:50',
            'url' => 'required|url'
        ]);

        $link = SocialMediaLink::create($request->all());
        return response()->json($link, 201);
    }

    public function show($id)
    {
        return response()->json(SocialMediaLink::findOrFail($id), 200);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'platform' => 'sometimes|required|string|max:50',
            'url' => 'sometimes|required|url'
        ]);

        $link = SocialMediaLink::findOrFail($id);
        $link->update($request->all());

        return response()->json($link, 200);
    }

    public function destroy($id)
    {
        SocialMediaLink::destroy($id);
        return response()->json(['message' => 'Link deleted'], 200);
    }
}
