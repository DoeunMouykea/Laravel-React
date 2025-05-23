<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SlidesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductCreateController;
use App\Http\Controllers\AboutCreateController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\ShowProductController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShowSlideController;
use App\Http\Controllers\SocialController;
use App\Http\Controllers\ShowSocialController;
use App\Http\Controllers\ShowAboutController;
use App\Http\Controllers\ShowBlogController;
use App\Http\Controllers\ShowContactController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\OrderPageController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\DocumentationController;

Route::get('/register', [RegisterController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [RegisterController::class, 'register']);


Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

Route::get('/', function () {
    return view('welcome');
});

Route::get('/slideshow', [SlidesController::class, 'index']);
Route::get('/showslide', [ShowSlideController::class, 'index']);
Route::get('/product', [ProductCreateController::class, 'index']);
Route::get('/showproduct', [ShowProductController::class, 'index']);
Route::get('/social', [SocialController::class, 'index']);
Route::get('/showsocial', [ShowSocialController::class, 'index']);
Route::get('/about', [AboutCreateController::class, 'index']);
Route::get('/showabout', [ShowAboutController::class, 'index']);
Route::get('/about/edit/{id}', [AboutController::class, 'edit'])->name('edit_about');
Route::delete('/about/delete/{id}', [AboutController::class, 'delete'])->name('delete_about');
Route::get('/blog', [BlogController::class, 'index']);
Route::get('/showblog', [ShowBlogController::class, 'index']);
Route::get('/edit_blog/{id}', [BlogController::class, 'editBlog'])->name('edit_blog');
Route::get('/delete_blog/{id}', [BlogController::class, 'deleteBlog'])->name('delete_blog');
Route::get('/showcontact', [ShowContactController::class, 'index']);
Route::get('/products/{product}/edit', [ProductController::class, 'edit'])->name('products.edit');
Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('products.destroy');
Route::get('/order', [OrderPageController::class, 'index'])->name('orders.table');
Route::get('/sale', [SaleController::class, 'index']);
Route::get('/document', [DocumentationController::class, 'index']);
