<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Inquiry;

class InquiryController extends Controller
{
    public function index()
    {
        return Inquiry::latest()->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'mobile' => 'required|string|max:15',
            'city' => 'required|string|max:255',
            'address' => 'required|string',
            'course' => 'required|string',
        ]);

        $inquiry = Inquiry::create($validated);

        return response()->json([
            'message' => 'Inquiry submitted successfully!',
            'data' => $inquiry
        ], 201);
    }
}
